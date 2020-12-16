export const region_level_01_fill = {
  id: 'region_level_01_fill',
  type: 'fill',
  source: {
    type: 'geojson',
    data: null,
  },
  layout: {},
  paint: {
    'fill-color': ['get','color'],
    'fill-opacity': 0.8,
  },
};
export const region_level_01_Border = {
  id: 'region_level_01_Border',
  type: 'line',
  source: {
    type: 'geojson',
    data: null,
  },
  layout: {},
  paint: {
    'line-color': '#fff',
    'line-opacity': 0.8,
  },
};
export const region_level_01_Symbol = {
    id: 'region_level_01_Symbol',
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
    'layout': {
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
   
        }
  };
export const layerids = ['region_level_01_fill', 'region_level_01_Border','region_level_01_Symbol'];
