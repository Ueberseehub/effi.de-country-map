var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#EFF5F3",
    
    //State defaults
    state_description: "State description",
    state_color: "#156949",
    state_hover_color: "#D2F289",
    state_url: "",
    border_size: "2",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#C6F35F",
    location_opacity: "1",
    location_hover_opacity: 1,
    location_size: "16",
    location_type: "circle",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#156949",
    label_size: "18",
    label_font: "Geist, sans-serif",
    label_display: "all",
    label_scale: "no",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "0",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 1,
    popup_shadow: 0.5,
    popup_corners: 3,
    popup_font: "12px/1.5 Geist, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
    border_hover_color: "",
    border_hover_size: "4"
  },
  state_specific: {
    DEBB: {
      name: "Brandenburg",
      description: "3140 properties"
    },
    DEBE: {
      name: "Berlin",
      description: "901 properties"
    },
    DEBW: {
      name: "Baden-Württemberg",
      description: "1721 properties"
    },
    DEBY: {
      name: "Bayern",
      description: "1563 properties"
    },
    DEHB: {
      name: "Bremen",
      description: "3140 properties"
    },
    DEHE: {
      name: "Hessen",
      description: "3140 properties"
    },
    DEHH: {
      name: "Hamburg",
      description: "3140 properties"
    },
    DEMV: {
      name: "Mecklenburg-Vorpommern",
      description: "3140 properties"
    },
    DENI: {
      name: "Niedersachsen",
      description: "3140 properties"
    },
    DENW: {
      name: "Nordrhein-Westfalen",
      description: "3140 properties"
    },
    DERP: {
      name: "Rheinland-Pfalz",
      description: "3140 properties"
    },
    DESH: {
      name: "Schleswig-Holstein",
      description: "3140 properties"
    },
    DESL: {
      name: "Saarland",
      description: "3140 properties"
    },
    DESN: {
      name: "Sachsen",
      description: "3140 properties"
    },
    DEST: {
      name: "Sachsen-Anhalt",
      description: "3140 properties"
    },
    DETH: {
      name: "Thüringen",
      description: "3140 properties"
    }
  },
  locations: {
    "0": {
      name: "Potsdam",
      lat: "52.4009309",
      lng: "13.0591397",
      description: "402 properties"
    },
    "1": {
      name: "Cottbus",
      lat: "51.760982513427734",
      lng: "14.331473350524902",
      description: "156 properties"
    },
    "3": {
      name: "Berlin",
      lat: "52.5173885",
      lng: "13.3951309",
      description: "348 properties"
    }
  },
  labels: {
    "0": {
      name: "Potsdam",
      x: "680",
      y: "395",
      display: "all",
      parent_id: "DEBB"
    },
    "1": {
      name: "Berlin",
      parent_id: "DEBE",
      x: "714",
      y: "330"
    },
    "2": {
      name: "Cottbus",
      parent_id: "DEBB",
      x: "760",
      y: "430"
    },
    DEBB: {
      name: "Brandenburg",
      parent_id: "DEBB",
      x: "709.4",
      y: "395",
      display: "none"
    },
    DEBE: {
      name: "Berlin",
      parent_id: "DEBE",
      x: "714",
      y: "360.5",
      display: "none"
    },
    DEBW: {
      name: "Baden-Württemberg",
      parent_id: "DEBW",
      x: "405",
      y: "800",
      display: "none"
    },
    DEBY: {
      name: "Bayern",
      parent_id: "DEBY",
      x: 599.6,
      y: 792.5,
      display: "none"
    },
    DEHB: {
      name: "Bremen",
      parent_id: "DEHB",
      x: 380.7,
      y: 288.9,
      display: "none"
    },
    DEHE: {
      name: "Hessen",
      parent_id: "DEHE",
      x: 403.8,
      y: 577.4,
      display: "none"
    },
    DEHH: {
      name: "Hamburg",
      parent_id: "DEHH",
      x: 468.4,
      y: 236,
      display: "none"
    },
    DEMV: {
      name: "Mecklenburg-Vorpommern",
      parent_id: "DEMV",
      x: 671.1,
      y: 208.3,
      display: "none"
    },
    DENI: {
      name: "Niedersachsen",
      parent_id: "DENI",
      x: 455.5,
      y: 318.9,
      display: "none"
    },
    DENW: {
      name: "Nordrhein-Westfalen",
      parent_id: "DENW",
      x: 284.8,
      y: 479.4,
      display: "none"
    },
    DERP: {
      name: "Rheinland-Pfalz",
      parent_id: "DERP",
      x: 259.6,
      y: 651.5,
      display: "none"
    },
    DESH: {
      name: "Schleswig-Holstein",
      parent_id: "DESH",
      x: 438.9,
      y: 158.9,
      display: "none"
    },
    DESL: {
      name: "Saarland",
      parent_id: "DESL",
      x: 245.1,
      y: 720.5,
      display: "none"
    },
    DESN: {
      name: "Sachsen",
      parent_id: "DESN",
      x: 702.5,
      y: 537.6,
      display: "none"
    },
    DEST: {
      name: "Sachsen-Anhalt",
      parent_id: "DEST",
      x: 587.1,
      y: 440.2,
      display: "none"
    },
    DETH: {
      name: "Thüringen",
      parent_id: "DETH",
      x: 530.3,
      y: 556.1,
      display: "none"
    }
  },
  legend: {
    entries: []
  },
  regions: {},
  data: {
    data: {}
  }
};
