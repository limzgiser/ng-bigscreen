export const default_fill_color = [
    'case',
    ['==', ['to-number', ['get', 'level']], 0],
    '#05B474',
    ['==', ['to-number', ['get', 'level']], 1],
    '#0C9579',
    ['==', ['to-number', ['get', 'level']], 2],
    '#04656B',
    ['==', ['to-number', ['get', 'level']], 3],
    '#064D61',
    ['==', ['to-number', ['get', 'level']], 4],
    '#022135',
    '#022135',
];
export const active_fill_color = [
      'case',
      ['==', ['to-number', ['get', 'level']], 0],
      '#0A261D',
      ['==', ['to-number', ['get', 'level']], 1],
      '#0A211D',
      ['==', ['to-number', ['get', 'level']], 2],
      '#09191A',
      ['==', ['to-number', ['get', 'level']], 3],
      '#0A1518',
      ['==', ['to-number', ['get', 'level']], 4],
      '#0A0F12',
      '#0A0F12',
  ];
  
export const region_fill = {
  id: 'region_fill',
  type: 'fill',
  source: {
    type: 'geojson',
    data: null,
  },
  layout: {},
  paint: {
    'fill-color': default_fill_color,
    'fill-opacity': 0.8,
  },
};
export const region_border = {
  id: 'region_border',
  type: 'line',
  source: {
    type: 'geojson',
    data: null,
  },
  layout: {},
  paint: {
    'line-color': '#fff',
    'line-width': 1,
    'line-opacity': 0.8,
  },
};
export const region_symbol = {
  id: 'region_symbol',
  type: 'symbol',
  source: {
    type: 'geojson',
    data: null,
  },
  paint: {
    'text-color': '#fff',
    'text-halo-color': '#000',
    'text-halo-width': 2,
  },
  layout: {
    'text-field': ['get', 'geo_name'],
    'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
    'text-radial-offset': 0.5,
    'text-justify': 'auto',
    'icon-allow-overlap': false,
    'icon-size': 1,
    'text-size': 22,
    'text-font': ['MicrosoftYaHeiBold'],
    'text-anchor': 'center',
    'text-max-width': 8,
  },
};
export const layerids = [
  'region_fill',
  'region_border',
  'region_symbol',
];

