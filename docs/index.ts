import maplibregl from 'maplibre-gl';
import { MaplibreLegendControl, LegendOptions } from '../lib/index';
import '../css/styles.css';

(()=>{
    const map = new maplibregl.Map({
        container: 'map',
        style:'https://narwassco.github.io/mapbox-stylefiles/unvt/style.json',
        center: [35.87063, -1.08551],
        zoom: 12,
        hash:true,
    });
    map.addControl(new maplibregl.NavigationControl(), 'top-right');

    map.on('load', function() {
        const targets = {
            'pipeline': 'Pipeline',
            'pipeline_annotation': 'Pipeline Label', 
            'meter': 'Water Meter',
            'flow meter': 'Flow Meter', 
            'valve': 'Valve', 
            'firehydrant': 'Fire Hydrant', 
            'washout': 'Washout',
            'tank': 'Tank', 
            'tank_annotation': 'Tank Label', 
            'wtp': 'WTP', 
            'wtp_annotation': 'WTP Label', 
            'intake': 'Intake', 
            'intake_annotation': 'Intake Label', 
            'parcels': 'Parcels', 
            'parcels_annotation': 'Parcels Label', 
            'village': 'Village', 
            'village_annotation': 'Village Label', 
            'dma': 'DMA',
            'dma-annotation': 'DMA Label', 
            'contour-line': 'Countour',
            'contour-label': 'Contour Label',
            'hillshade': 'Hillshade'
        };
        // add legend control without checkbox, and it will be hide as default
        let options : LegendOptions = {
            showDefault: false, 
            showCheckbox: false, 
            onlyRendered: true,
            reverseOrder: true
        }
        map.addControl(new MaplibreLegendControl(targets, options), 'top-right');

        // add legend control with checkbox, and it will be shown as default
        options  = {
            showDefault: true, 
            showCheckbox: true, 
            onlyRendered: true,
            reverseOrder: false,
            title: "A custom title"
        }
        map.addControl(new MaplibreLegendControl(targets, options), 'bottom-right');

        // add legend control with all layers, and it reverse layer order
        options  = {
            showDefault: true, 
            showCheckbox: true, 
            onlyRendered: false,
            reverseOrder: true
        }
        map.addControl(new MaplibreLegendControl({}, options), 'bottom-left');
    });
})()