document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header Logic (already handled by CSS position: sticky, but can add scroll class)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Calendly Modal Trigger
    const ctaButtons = document.querySelectorAll('.revival-audit-cta');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.Calendly) {
                Calendly.initPopupWidget({
                    url: 'https://calendly.com/sukhdeep-scaleamplify/the-revival-audit-pipeline-diagnostic'
                });
            }
            return false;
        });
    });

    // Leaflet Map Initialization (only if element exists)
    const mapElement = document.getElementById('engine-map');
    if (mapElement && typeof L !== 'undefined') {
        const isMobile = window.innerWidth <= 768;
        const map = L.map('engine-map', {
            center: [20.5937, 78.9629], // India
            zoom: 3,
            scrollWheelZoom: !isMobile,
            dragging: !isMobile,
            zoomControl: !isMobile
        });

        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap &copy; CARTO'
        }).addTo(map);

        // Nodes
        const nodes = [
            { name: 'India (HQ)', coords: [20.5937, 78.9629] },
            { name: 'North America', coords: [37.0902, -95.7129] },
            { name: 'EMEA', coords: [48.8566, 2.3522] },
            { name: 'APAC', coords: [1.3521, 103.8198] }
        ];

        nodes.forEach(node => {
            L.circleMarker(node.coords, {
                radius: 8,
                fillColor: "#208091",
                color: "#fff",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            }).addTo(map).bindPopup(node.name);
        });

        // Simple arcs (lines for now as SVG arcs are complex in pure Leaflet without plugins)
        nodes.slice(1).forEach(node => {
            L.polyline([nodes[0].coords, node.coords], {
                color: '#208091',
                weight: 1,
                dashArray: '5, 10'
            }).addTo(map);
        });
    }
});
