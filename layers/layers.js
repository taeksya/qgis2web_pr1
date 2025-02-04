var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_1lab1_2 = new ol.format.GeoJSON();
var features_1lab1_2 = format_1lab1_2.readFeatures(json_1lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1lab1_2.addFeatures(features_1lab1_2);
var lyr_1lab1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1lab1_2, 
                style: style_1lab1_2,
                popuplayertitle: 'ПР1 — lab1',
                interactive: true,
                title: '<img src="styles/legend/1lab1_2.png" /> ПР1 — lab1'
            });
var format_1building_3 = new ol.format.GeoJSON();
var features_1building_3 = format_1building_3.readFeatures(json_1building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1building_3.addFeatures(features_1building_3);
var lyr_1building_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1building_3, 
                style: style_1building_3,
                popuplayertitle: 'ПР1 — building',
                interactive: true,
                title: '<img src="styles/legend/1building_3.png" /> ПР1 — building'
            });
var format_1highway_4 = new ol.format.GeoJSON();
var features_1highway_4 = format_1highway_4.readFeatures(json_1highway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1highway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1highway_4.addFeatures(features_1highway_4);
var lyr_1highway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1highway_4, 
                style: style_1highway_4,
                popuplayertitle: 'ПР1 — highway',
                interactive: true,
                title: '<img src="styles/legend/1highway_4.png" /> ПР1 — highway'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_1lab1_2.setVisible(true);lyr_1building_3.setVisible(true);lyr_1highway_4.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_1lab1_2,lyr_1building_3,lyr_1highway_4];
lyr_1lab1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_1building_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:province': 'addr:province', 'addr:postcode': 'addr:postcode', 'addr:hamlet': 'addr:hamlet', 'opening_hours': 'opening_hours', 'name': 'name', 'amenity': 'amenity', 'addr:street': 'addr:street', 'addr:region': 'addr:region', 'addr:housenumber': 'addr:housenumber', 'addr:district': 'addr:district', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'address': 'address', });
lyr_1highway_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tracktype': 'tracktype', 'living_street': 'living_street', 'noname': 'noname', 'footway': 'footway', 'seasonal': 'seasonal', 'ice_road': 'ice_road', 'layer': 'layer', 'bridge': 'bridge', 'old_ref': 'old_ref', 'service': 'service', 'name:ru': 'name:ru', 'smoothness': 'smoothness', 'oneway': 'oneway', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'maxspeed': 'maxspeed', 'surface': 'surface', 'ref': 'ref', 'lanes': 'lanes', });
lyr_1lab1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_1building_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:province': '', 'addr:postcode': '', 'addr:hamlet': '', 'opening_hours': '', 'name': '', 'amenity': '', 'addr:street': '', 'addr:region': '', 'addr:housenumber': '', 'addr:district': '', 'addr:country': '', 'addr:city': '', 'address': '', });
lyr_1highway_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'tracktype': '', 'living_street': '', 'noname': '', 'footway': '', 'seasonal': '', 'ice_road': '', 'layer': '', 'bridge': '', 'old_ref': '', 'service': '', 'name:ru': '', 'smoothness': '', 'oneway': '', 'name:etymology:wikidata': '', 'name': '', 'maxspeed': '', 'surface': '', 'ref': '', 'lanes': '', });
lyr_1lab1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_1building_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:province': 'no label', 'addr:postcode': 'no label', 'addr:hamlet': 'no label', 'opening_hours': 'no label', 'name': 'no label', 'amenity': 'no label', 'addr:street': 'no label', 'addr:region': 'no label', 'addr:housenumber': 'no label', 'addr:district': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_1highway_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tracktype': 'no label', 'living_street': 'no label', 'noname': 'no label', 'footway': 'no label', 'seasonal': 'no label', 'ice_road': 'no label', 'layer': 'no label', 'bridge': 'no label', 'old_ref': 'no label', 'service': 'no label', 'name:ru': 'no label', 'smoothness': 'no label', 'oneway': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'surface': 'no label', 'ref': 'no label', 'lanes': 'no label', });
lyr_1highway_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});