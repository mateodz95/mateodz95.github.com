var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_AP_TARAZA_todo_V1_1 = new ol.format.GeoJSON();
var features_AP_TARAZA_todo_V1_1 = format_AP_TARAZA_todo_V1_1.readFeatures(json_AP_TARAZA_todo_V1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AP_TARAZA_todo_V1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AP_TARAZA_todo_V1_1.addFeatures(features_AP_TARAZA_todo_V1_1);
var lyr_AP_TARAZA_todo_V1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AP_TARAZA_todo_V1_1, 
                style: style_AP_TARAZA_todo_V1_1,
                interactive: true,
                title: '<img src="styles/legend/AP_TARAZA_todo_V1_1.png" /> AP_TARAZA_todo_V1'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_AP_TARAZA_todo_V1_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_AP_TARAZA_todo_V1_1];
lyr_AP_TARAZA_todo_V1_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'PL_PUNT_LU': 'PL_PUNT_LU', 'SERIAL_LUM': 'SERIAL_LUM', 'FID_EPM': 'FID_EPM', 'TIPO_APOYO': 'TIPO_APOYO', 'TIP_CAR_LU': 'TIP_CAR_LU', 'MATER_CARC': 'MATER_CARC', 'ZONA_ILUMI': 'ZONA_ILUMI', 'TIPO_CONTR': 'TIPO_CONTR', 'ACCESO': 'ACCESO', 'POT_LUM_IN': 'POT_LUM_IN', 'TIP_LUM_IN': 'TIP_LUM_IN', 'POT_LUM_R': 'POT_LUM_R', 'TIPO_LUM_R': 'TIPO_LUM_R', 'MEDIDOR': 'MEDIDOR', 'V_PTO_CNX': 'V_PTO_CNX', 'N_TRAFO_AL': 'N_TRAFO_AL', 'ALT_LUMINA': 'ALT_LUMINA', 'DIRECCION': 'DIRECCION', 'BARRIO': 'BARRIO', 'SECTOR': 'SECTOR', 'ZONA': 'ZONA', 'PROCESO': 'PROCESO', 'PROPIETARI': 'PROPIETARI', 'NOVEDAD': 'NOVEDAD', 'FECHA': 'FECHA', 'X': 'X', 'Y': 'Y', });
lyr_AP_TARAZA_todo_V1_1.set('fieldImages', {'OBJECTID': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Snippet': '', 'PopupInfo': '', 'HasLabel': '', 'LabelID': '', 'PL_PUNT_LU': '', 'SERIAL_LUM': '', 'FID_EPM': '', 'TIPO_APOYO': '', 'TIP_CAR_LU': '', 'MATER_CARC': '', 'ZONA_ILUMI': '', 'TIPO_CONTR': '', 'ACCESO': '', 'POT_LUM_IN': '', 'TIP_LUM_IN': '', 'POT_LUM_R': '', 'TIPO_LUM_R': '', 'MEDIDOR': '', 'V_PTO_CNX': '', 'N_TRAFO_AL': '', 'ALT_LUMINA': '', 'DIRECCION': '', 'BARRIO': '', 'SECTOR': '', 'ZONA': '', 'PROCESO': '', 'PROPIETARI': '', 'NOVEDAD': '', 'FECHA': '', 'X': '', 'Y': '', });
lyr_AP_TARAZA_todo_V1_1.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', 'PL_PUNT_LU': 'no label', 'SERIAL_LUM': 'no label', 'FID_EPM': 'no label', 'TIPO_APOYO': 'no label', 'TIP_CAR_LU': 'no label', 'MATER_CARC': 'no label', 'ZONA_ILUMI': 'no label', 'TIPO_CONTR': 'no label', 'ACCESO': 'no label', 'POT_LUM_IN': 'inline label', 'TIP_LUM_IN': 'inline label', 'POT_LUM_R': 'no label', 'TIPO_LUM_R': 'no label', 'MEDIDOR': 'no label', 'V_PTO_CNX': 'no label', 'N_TRAFO_AL': 'inline label', 'ALT_LUMINA': 'no label', 'DIRECCION': 'no label', 'BARRIO': 'no label', 'SECTOR': 'inline label', 'ZONA': 'no label', 'PROCESO': 'no label', 'PROPIETARI': 'no label', 'NOVEDAD': 'no label', 'FECHA': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_AP_TARAZA_todo_V1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});