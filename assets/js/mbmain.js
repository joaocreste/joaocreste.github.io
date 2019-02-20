
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9hb2NyZXN0ZSIsImEiOiJjajY2d2RsaHgwMGppMnFuNjBvYWoxM3ZwIn0.LxZj6o4IGDT_dccs_FOcfQ';

// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/joaocreste/cjo1pymvu3oqq2rrrw04kv0ux',
//     zoom: 4,
//     center: [-49.317,-17.154]
// });

var map = new mapboxgl.Map({
    container: 'var_map',
    style: 'mapbox://styles/joaocreste/cjs513dce0z2f1fo4qyx8oob9',
    center: [-49.317,-17.154],
    zoom: 4
});

var MapView = document.getElementById('MapView')
var SatView = document.getElementById('SatView')


map.on('load', function () {

// - 1. ELECTRICAL DATA ------------------------------------------ //

// --------------------------------------------------------------- //
    map.addSource('substations', {
        type: 'vector',
        url: 'mapbox://joaocreste.79kfc9j0'
    });

    map.addLayer({
        'id': 'Substations',
        'icon-allow-overlap': true,
        'type': 'symbol',
        'source': 'substations',
        'layout': {
            'visibility': 'none',
            'icon-image': 'picnic-site-15',
            'icon-size': 1.1,
            'text-field': [
                          "step",
                          ["zoom"],
                          "",
                          6,
                          [
                            "to-string",
                            ["get", "Nome"]
                          ]
                        ],
            'text-font': [
                          "DIN Offc Pro Regular",
                          "Arial Unicode MS Regular"
                        ],
            'text-size': 10,
            'text-offset': [0, -1.2],

        },
        'paint':{
            'text-halo-color': "hsl(0, 0%, 100%)",
            'text-halo-width': 1,

        },

        'source-layer': 'Substation_Existing-23494i'
    });

// --------------------------------------------------------------- //

    map.addSource('Transmission Lines', {
        type: 'vector',
        url: 'mapbox://joaocreste.64lwqdfc'
    });

    map.addLayer({
        'id': 'Transmission Lines',
        'type': 'line',
        'source': 'Transmission Lines',
        'layout': {
                    'visibility': 'none',
                },

        'paint': {
                    'line-color': [
                      "case",
                      [
                        "match",
                        ["get", "Tensao"],
                        ["", "800"],
                        true,
                        false
                      ],
                      "hsl(259, 98%, 36%)",
                      [
                        "match",
                        ["get", "Tensao"],
                        ["", "765"],
                        true,
                        false
                      ],
                      "hsl(242, 83%, 44%)",
                      [
                        "match",
                        ["get", "Tensao"],
                        ["", "600"],
                        true,
                        false
                      ],
                      "hsl(272, 100%, 35%)",
                      [
                        "match",
                        ["get", "Tensao"],
                        ["", "525"],
                        true,
                        false
                      ],
                      "hsl(272, 97%, 36%)",
                      [
                        "match",
                        ["get", "Tensao"],
                        ["", "500"],
                        true,
                        false
                      ],
                      "hsl(275, 100%, 43%)",
                      [
                        "match",
                        ["get", "Tensao"],
                        ["", "440"],
                        true,
                        false
                      ],
                      "hsl(0, 100%, 44%)",
                      [
                        "match",
                        ["get", "Tensao"],
                        ["", "345"],
                        true,
                        false
                      ],
                      "hsl(16, 100%, 52%)",
                      [
                        "match",
                        ["get", "Tensao"],
                        ["", "230"],
                        true,
                        false
                      ],
                      "hsl(20, 100%, 58%)",
                      "#000000"
                    ]
        },

        'source-layer': 'TL_Existing-7irkcq'
    });

// --------------------------------------------------------------- //

// --------------------------------------------------------------- //

    map.addSource('Wind Turbines', {
        type: 'vector',
        url: 'mapbox://joaocreste.cjnd4w8va01la31oiayfur4jj-5b8a0'
    });
    map.addLayer({
        'id': 'Wind Turbines',
        'type': 'circle',
        'source': 'Wind Turbines',
        'layout': {
            'visibility': 'none'
        },
        'paint': {
            'circle-radius': 2,
            'circle-color': [
							  "match",
							  ["get", "Operacao"],
							  ["", "SIM"],
							  "hsl(154, 94%, 29%)",
							  "hsl(0, 94%, 34%)"
							],
			'circle-stroke-color': "hsl(0, 0%, 100%)",
			'circle-stroke-width': 0.5,
        },
        'source-layer': 'wind-turbines-BR'
    });

// --------------------------------------------------------------- //

    map.addSource('WindNames', {
        type: 'vector',
        url: 'mapbox://joaocreste.c6u9yw5u'
    });
    map.addLayer({
        'id': 'Wind Complexes',
        'type': 'symbol',
        'source': 'WindNames',
        'layout': {
            'visibility': 'none',
            'text-field':["to-string", ["get", "Name"]],
            'text-size':10

        },

        'paint':{
            'text-halo-color': "hsl(0, 0%, 100%)",
            'text-halo-width': 1, 

        },

        'source-layer': 'Parques_Elicos_Vlidos'
    });


// --------------------------------------------------------------- //

    map.addSource('Met Masts', {
        type: 'vector',
        url: 'mapbox://joaocreste.9tqubt20'
    });
    map.addLayer({
        'id': 'Met Masts',
        'type': 'symbol',
        'source': 'Met Masts',
        'layout': {
            'visibility': 'none',
            'icon-allow-overlap': true,
            'icon-image': 'embassy-11',
            'text-field': [
                          "concat",
                          [
                            "to-string",
                            ["get", "Speed"]
                          ],
                          " m/s"
                        ],
            'text-size': 9,
            'text-offset': [0,-1.5],
            'text-font': [
                          "DIN Offc Pro Regular",
                          "Arial Unicode MS Regular"
                        ],

        },

        'source-layer': 'MetMasts-bsplhe'
    });

// --------------------------------------------------------------- //

    map.addSource('Solar Projects', {
        type: 'vector',
        url: 'mapbox://joaocreste.6jmgims8'
    });

    map.addLayer({
        'id': 'Solar (Status)',
        'type': 'circle',
        'source': 'Solar Projects',
        'layout': {
            'visibility': 'none'
        },
        'paint': {
            'circle-radius': 3,
            'circle-color': [
                              "match",
                              ["get", "ESTAGIO_1"],
                              ["", "Pré-Cadastro"],
                              "hsl(0, 93%, 42%)",
                              ["DRO"],
                              "hsl(33, 85%, 47%)",
                              [
                                "Construção não iniciada",
                                "Construção com Outorga"
                              ],
                              "hsl(281, 94%, 34%)",
                              ["Revogado"],
                              "hsl(0, 94%, 34%)",
                              ["Operação"],
                              "hsl(154, 94%, 29%)",
                              "hsl(0, 0%, 57%)"
                            ],
            'circle-stroke-color': "hsl(0, 0%, 100%)",
            'circle-stroke-width': 0.5,
        },

        'source-layer': 'PVPlants-c3klzy'
    });

    map.addLayer({
        'id': 'Solar Projects',
        'type': 'symbol',
        'source': 'Solar Projects',
        'layout': {
            'visibility': 'none',
            'text-field':["to-string", ["get", "NOME"]],
            'text-size':10,
            'text-offset': [0,-1.5],
            
        },

        'paint':{
            'text-halo-color': "hsl(0, 0%, 100%)",
            'text-halo-width': 1, 

        },

        'source-layer': 'PVPlants-c3klzy'
    });

// --------------------------------------------------------------- //



// --------------------------------------------------------------- //

// - 2. ENVIRONMENTAL CONSTRAINTS -------------------------------- //

// --------------------------------------------------------------- //

    map.addSource('Caves', {
        type: 'vector',
        url: 'mapbox://joaocreste.a4gtw23p'
    });
    map.addLayer({
        'id': 'Caves',
        'type': 'symbol',
        'source': 'Caves',
        'layout': {
            'visibility': 'none',
            'icon-image': 'cliff',
            'text-field': [
                              "step",
                              ["zoom"],
                              "",
                              10,
                              [
                                "to-string",
                                ["get", "name"]
                              ]
                            ],
            'text-size': 9,
            'text-offset': [0,-1.5],
            'text-font': [
                          "DIN Offc Pro Regular",
                          "Arial Unicode MS Regular"
                        ],

        },

        'paint':{
            'text-halo-color': "hsl(0, 0%, 100%)",
            'text-halo-width': 1,
        },

        'source-layer': 'CavesBR_201807-67mw4i'
    });

// --------------------------------------------------------------- //

    map.addSource('Indigenous Lands', {
        type: 'vector',
        url: 'mapbox://joaocreste.7pljgzin'
    });

    map.addLayer({
        'id': 'Indigenous Lands',
        'type': 'fill',
        'source': 'Indigenous Lands',
        'layout': {
            'visibility': 'none',

        },

        'paint':{
            'fill-color': "hsla(334, 96%, 31%, 0.6)",
        },

        'source-layer': 'ti_sirgas'
    });

// --------------------------------------------------------------- //

    map.addSource('Conservation Units', {
        type: 'vector',
        url: 'mapbox://joaocreste.ckpn4m4m'
    });

    map.addLayer({
        'id': 'Conservation Units',
        'type': 'fill',
        'source': 'Conservation Units',
        'layout': {
            'visibility': 'none',

        },

        'paint':{
            'fill-color': "hsla(193, 96%, 31%, 0.6)",
            'fill-outline-color':"hsl(177, 75%, 31%)",
        },

        'source-layer': 'ucstodas'
    });

// --------------------------------------------------------------- //

// - 3. LAND RELATED --------------------------------------------- //

// --------------------------------------------------------------- //

    map.addSource('SIGEF', {
        type: 'vector',
        url: 'mapbox://joaocreste.2f04truc'
    });

    map.addLayer({
        'id': 'SIGEF',
        'type': 'fill',
        'source': 'SIGEF',
        'layout': {
            'visibility': 'none',

        },


        'paint':{
            'fill-color': "hsla(281, 88%, 41%, 0.1)",
            'fill-outline-color': "hsl(285, 86%, 24%)", 

        },

        'source-layer': 'Sigef_Brasil_RN-0jc2aw'
    });

// --------------------------------------------------------------- //

    map.addLayer({
        'id': 'Registries',
        'type': 'symbol',
        'source': 'SIGEF',
        'layout': {
            'visibility': 'none',
            'text-field':[
                          "concat",
                          ["get", "nome_area"],
                          "\n",
                          ["get", "registro_m"],
                          "\n",
                          ["get", "status"]
                        ],
            'text-font':[
                          "DIN Offc Pro Regular",
                          "Arial Unicode MS Regular"
                        ],
            'text-size':10,

        },


        'paint':{
            'text-halo-color': "hsl(0, 0%, 100%)",
            'text-halo-width': 0.2, 

        },

        'source-layer': 'Sigef_Brasil_RN-0jc2aw'
    });

// --------------------------------------------------------------- //

    map.addSource('Rural Areas', {
        type: 'vector',
        url: 'mapbox://joaocreste.bt21uvv8'
    });

    map.addLayer({
        'id': 'Rural Areas',
        'type': 'fill',
        'source': 'Rural Areas',
        'layout': {
            'visibility': 'none',

        },


        'paint':{
            'fill-color': 'hsla(39, 86%, 41%, 0.3)',
            'fill-outline-color': 'hsl(36, 94%, 34%)', 

        },

        'source-layer': 'RN_AREA_IMOVEL-26c1pv'
    });

// --------------------------------------------------------------- //

    map.addSource('APPs', {
        type: 'vector',
        url: 'mapbox://joaocreste.66y7wmo8'
    });

    map.addLayer({
        'id': 'APPs',
        'type': 'fill',
        'source': 'APPs',
        'layout': {
            'visibility': 'none',

        },


        'paint':{
            'fill-color': "hsla(144, 39%, 47%, 0.6)",
            'fill-outline-color': "hsla(144, 39%, 47%, 0.95)",

        },

        'source-layer': 'RN_APP-8bfws0'
    });

// --------------------------------------------------------------- //


    map.addSource('Legal Reserve', {
        type: 'vector',
        url: 'mapbox://joaocreste.0r85zzcs'
    });

    map.addLayer({
        'id': 'Legal Reserve',
        'type': 'fill',
        'source': 'Legal Reserve',
        'layout': {
            'visibility': 'none',

        },


        'paint':{
            'fill-color': "hsla(144, 39%, 47%, 0.6)",
            'fill-outline-color': "hsla(144, 39%, 47%, 0.95)", 

        },

        'source-layer': 'RN_RESERVA_LEGAL-dkvhgm'
    });

// --------------------------------------------------------------- //

MapView.onclick = function (e) {
    map.setStyle('mapbox://styles/joaocreste/cjs513dce0z2f1fo4qyx8oob9')
}

SatView.onclick = function (e) {
    map.setStyle('mapbox://styles/joaocreste/cjiyxqx9s03lc2ro06lktn1kv')
}

});

var geocoder = new MapboxGeocoder({ accessToken: mapboxgl.accessToken });

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

var map_layers = ['Registries','SIGEF','Rural Areas','APPs','Legal Reserve','Caves', 'Indigenous Lands','Conservation Units','Met Masts','Substations', 'Transmission Lines', 'Wind Complexes','Wind Turbines','Solar (Status)','Solar Projects'];

for (var i = 0; i < map_layers.length; i++) {
    var id = map_layers[i];

    var link = document.getElementById(map_layers[i]);

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };
}
