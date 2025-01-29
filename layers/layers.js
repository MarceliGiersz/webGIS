var wms_layers = [];

var lyr_Raster_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Raster',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Raster_0, 0]);
var format_historyczna1940_1 = new ol.format.GeoJSON();
var features_historyczna1940_1 = format_historyczna1940_1.readFeatures(json_historyczna1940_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_historyczna1940_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_historyczna1940_1.addFeatures(features_historyczna1940_1);
var lyr_historyczna1940_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_historyczna1940_1, 
                style: style_historyczna1940_1,
                popuplayertitle: 'historyczna1940',
                interactive: false,
                title: '<img src="styles/legend/historyczna1940_1.png" /> historyczna1940'
            });
var format_vmap2004_2 = new ol.format.GeoJSON();
var features_vmap2004_2 = format_vmap2004_2.readFeatures(json_vmap2004_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vmap2004_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vmap2004_2.addFeatures(features_vmap2004_2);
var lyr_vmap2004_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vmap2004_2, 
                style: style_vmap2004_2,
                popuplayertitle: 'vmap2004',
                interactive: false,
                title: '<img src="styles/legend/vmap2004_2.png" /> vmap2004'
            });
var format_sentinel2024_3 = new ol.format.GeoJSON();
var features_sentinel2024_3 = format_sentinel2024_3.readFeatures(json_sentinel2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sentinel2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentinel2024_3.addFeatures(features_sentinel2024_3);
var lyr_sentinel2024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentinel2024_3, 
                style: style_sentinel2024_3,
                popuplayertitle: 'sentinel2024',
                interactive: false,
                title: '<img src="styles/legend/sentinel2024_3.png" /> sentinel2024'
            });

lyr_Raster_0.setVisible(true);lyr_historyczna1940_1.setVisible(true);lyr_vmap2004_2.setVisible(true);lyr_sentinel2024_3.setVisible(true);
var layersList = [lyr_Raster_0,lyr_historyczna1940_1,lyr_vmap2004_2,lyr_sentinel2024_3];
lyr_historyczna1940_1.set('fieldAliases', {'Id': 'Id', 'NoteType': 'NoteType', 'Name': 'Name', 'Notes': 'Notes', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_vmap2004_2.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_sentinel2024_3.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_historyczna1940_1.set('fieldImages', {'Id': 'TextEdit', 'NoteType': 'TextEdit', 'Name': 'TextEdit', 'Notes': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_vmap2004_2.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_sentinel2024_3.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_historyczna1940_1.set('fieldLabels', {'Id': 'no label', 'NoteType': 'no label', 'Name': 'no label', 'Notes': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_vmap2004_2.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_sentinel2024_3.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_sentinel2024_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});