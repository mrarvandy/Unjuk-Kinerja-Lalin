var wms_layers = [];


        var lyr_CartoVoyagerLabels_0 = new ol.layer.Tile({
            'title': 'Carto Voyager Labels',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png'
            })
        });
var format_TataGunaLahan_1 = new ol.format.GeoJSON();
var features_TataGunaLahan_1 = format_TataGunaLahan_1.readFeatures(json_TataGunaLahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TataGunaLahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TataGunaLahan_1.addFeatures(features_TataGunaLahan_1);
var lyr_TataGunaLahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TataGunaLahan_1, 
                style: style_TataGunaLahan_1,
                popuplayertitle: 'Tata Guna Lahan',
                interactive: false,
    title: 'Tata Guna Lahan<br />\
    <img src="styles/legend/TataGunaLahan_1_0.png" /> HUNIAN<br />\
    <img src="styles/legend/TataGunaLahan_1_1.png" /> KEAGAMAAN<br />\
    <img src="styles/legend/TataGunaLahan_1_2.png" /> KHUSUS<br />\
    <img src="styles/legend/TataGunaLahan_1_3.png" /> PENGGUNAAN LAIN<br />\
    <img src="styles/legend/TataGunaLahan_1_4.png" /> SOSIAL BUDAYA<br />\
    <img src="styles/legend/TataGunaLahan_1_5.png" /> USAHA<br />\
    <img src="styles/legend/TataGunaLahan_1_6.png" /> <br />' });
var format_JaringanJalanJakarta_2 = new ol.format.GeoJSON();
var features_JaringanJalanJakarta_2 = format_JaringanJalanJakarta_2.readFeatures(json_JaringanJalanJakarta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalanJakarta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalanJakarta_2.addFeatures(features_JaringanJalanJakarta_2);
var lyr_JaringanJalanJakarta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalanJakarta_2, 
                style: style_JaringanJalanJakarta_2,
                popuplayertitle: 'Jaringan Jalan Jakarta',
                interactive: true,
    title: 'Jaringan Jalan Jakarta<br />\
    <img src="styles/legend/JaringanJalanJakarta_2_0.png" /> A<br />\
    <img src="styles/legend/JaringanJalanJakarta_2_1.png" /> B<br />\
    <img src="styles/legend/JaringanJalanJakarta_2_2.png" /> C<br />\
    <img src="styles/legend/JaringanJalanJakarta_2_3.png" /> D<br />\
    <img src="styles/legend/JaringanJalanJakarta_2_4.png" /> E<br />\
    <img src="styles/legend/JaringanJalanJakarta_2_5.png" /> F<br />\
    <img src="styles/legend/JaringanJalanJakarta_2_6.png" /> <br />' });

lyr_CartoVoyagerLabels_0.setVisible(true);lyr_TataGunaLahan_1.setVisible(true);lyr_JaringanJalanJakarta_2.setVisible(true);
var layersList = [lyr_CartoVoyagerLabels_0,lyr_TataGunaLahan_1,lyr_JaringanJalanJakarta_2];
lyr_TataGunaLahan_1.set('fieldAliases', {'FID_Penggu': 'FID_Penggu', 'V_SURVEYOR': 'V_SURVEYOR', 'STATUS': 'STATUS', 'KODE_SAMPE': 'KODE_SAMPE', 'KEGIATAN_L': 'KEGIATAN_L', 'SHAPE_LENG': 'SHAPE_LENG', 'D_PENGGUNA': 'D_PENGGUNA', 'D_SUB_PENG': 'D_SUB_PENG', 'D_KEGIATAN': 'D_KEGIATAN', 'D_KODE_KEG': 'D_KODE_KEG', 'FID_ADM_KE': 'FID_ADM_KE', 'KECAMATAN': 'KECAMATAN', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_JaringanJalanJakarta_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'fungsi_jal': 'fungsi_jal', 'tipe_jalan': 'tipe_jalan', 'jembatan': 'jembatan', 'lebar': 'lebar', 'volume': 'volume', 'kapasitas': 'kapasitas', 'vcr': 'vcr', 'kecepatan': 'kecepatan', 'los': 'los', 'hambatan_s': 'hambatan_s', 'satu_arah': 'satu_arah', 'terowongan': 'terowongan', 'Shape_Leng': 'Shape_Leng', 'tahun_surv': 'tahun_surv', });
lyr_TataGunaLahan_1.set('fieldImages', {'FID_Penggu': 'TextEdit', 'V_SURVEYOR': 'TextEdit', 'STATUS': 'TextEdit', 'KODE_SAMPE': 'TextEdit', 'KEGIATAN_L': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'D_PENGGUNA': 'TextEdit', 'D_SUB_PENG': 'TextEdit', 'D_KEGIATAN': 'TextEdit', 'D_KODE_KEG': 'TextEdit', 'FID_ADM_KE': 'TextEdit', 'KECAMATAN': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_JaringanJalanJakarta_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'fungsi_jal': 'TextEdit', 'tipe_jalan': 'TextEdit', 'jembatan': 'TextEdit', 'lebar': 'TextEdit', 'volume': 'TextEdit', 'kapasitas': 'TextEdit', 'vcr': 'TextEdit', 'kecepatan': 'TextEdit', 'los': 'TextEdit', 'hambatan_s': 'TextEdit', 'satu_arah': 'TextEdit', 'terowongan': 'TextEdit', 'Shape_Leng': 'TextEdit', 'tahun_surv': 'TextEdit', });
lyr_TataGunaLahan_1.set('fieldLabels', {'FID_Penggu': 'no label', 'V_SURVEYOR': 'no label', 'STATUS': 'no label', 'KODE_SAMPE': 'no label', 'KEGIATAN_L': 'no label', 'SHAPE_LENG': 'no label', 'D_PENGGUNA': 'no label', 'D_SUB_PENG': 'no label', 'D_KEGIATAN': 'no label', 'D_KODE_KEG': 'no label', 'FID_ADM_KE': 'no label', 'KECAMATAN': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_JaringanJalanJakarta_2.set('fieldLabels', {'id': 'inline label - always visible', 'nama': 'inline label - always visible', 'fungsi_jal': 'inline label - always visible', 'tipe_jalan': 'inline label - always visible', 'jembatan': 'inline label - always visible', 'lebar': 'inline label - always visible', 'volume': 'inline label - always visible', 'kapasitas': 'inline label - always visible', 'vcr': 'inline label - always visible', 'kecepatan': 'inline label - always visible', 'los': 'inline label - always visible', 'hambatan_s': 'inline label - always visible', 'satu_arah': 'inline label - always visible', 'terowongan': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'tahun_surv': 'inline label - always visible', });
lyr_JaringanJalanJakarta_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});