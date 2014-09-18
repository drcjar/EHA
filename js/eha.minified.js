( function() {
  if ( typeof e === "undefined" ) {
    var e = {}
  }
  e.diseases = {
    "Stillbirths male": {
      field: "stillbirth_m",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/330/{z}/{x}/{y}",
      min: [],
      max: []
    },
    "Stillbirths female": {
      field: "stillbirth_f",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/329/{z}/{x}/{y}",
      min: [],
      max: []
    },
    "Low Birth Weight male": {
      field: "lowbwght_m",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/320/{z}/{x}/{y}",
      min: [ "00AWFY", "34", "Greater London" ],
      max: [ "00FNNW", "46", "Leicester Unitary Authority" ]
    },
    "Low Birth Weight female": {
      field: "lowbwght_f",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/319/{z}/{x}/{y}",
      min: [ "00AWFY,34,Greater London" ],
      max: [ "00FNNZ,46,Leicester Unitary Authority" ]
    },
    "Lung cancer male": {
      field: "lung_m",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/322/{z}/{x}/{y}",
      min: [ "00AEGX", "34", "Greater London" ],
      max: [ "00BYFQ", "51", "Merseyside" ],
      riskFactorTitle: "The fraction of lung cancer attributable to lifestyle and environmental factors in males in the UK in 2010 ",
      riskFactors: {
        "Tobacco smoking": [ [ 1, 87.3 ] ],
        "Occupational exposures": [ [ 2.1, 20.5 ] ],
        "Deficient intake Fruit&Veg": [ [ 3.2, 8.5 ] ],
        "Ionising radiation": [ [ 4.3, 4.2 ] ],
        "Others incl. Env. factors": [ [ 5.4, 8.9 ] ]
      }
    },
    "Lung cancer female": {
      field: "lung_f",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/321/{z}/{x}/{y}",
      min: [ "00FNNW", "46", "Leicester Unitary Authority" ],
      max: [ "00BYFQ", "51", "Merseyside" ],
      riskFactorTitle: "The fraction of lung cancer attributable to lifestyle and environmental factors in females in the UK in 2010 ",
      riskFactors: {
        "Tobacco smoking": [ [ 1, 83.6 ] ],
        "Occupational exposures": [ [ 2.1, 9.3 ] ],
        "Deficient intake Fruit&Veg": [ [ 3.2, 4.3 ] ],
        "Ionising radiation ": [ [ 4.3, 5.4 ] ],
        "Others incl. Env. factors": [ [ 5.4, 13.5 ] ]
      }
    },
    "Leukaemia male": {
      field: "leukaemia_m",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/316/{z}/{x}/{y}",
      min: [ "00CWFU", "100", "West Midlands" ],
      max: [ "00NSRF", "67", "Pembrokeshire" ],
      riskFactorTitle: "The fraction of leukaemia attributable to lifestyle and environmental factors in males in the UK in 2010",
      riskFactors: {
        "Tobacco smoking": [ [ 1, 8.4 ] ],
        "Ionising radiation": [ [ 2.1, 7.8 ] ],
        "Occupational exposure": [ [ 3.2, .9 ] ]
      }
    },
    "Leukaemia female": {
      field: "leukaemia_f",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/315/{z}/{x}/{y}",
      min: [ "00CBFL", "51", "Merseyside" ],
      max: [ "40UCGS", "79", "Somerset" ],
      riskFactorTitle: "The fraction of leukaemia attributable to lifestyle and environmental factors in females in the UK in 2010",
      riskFactors: {
        "Tobacco smoking": [ [ 1, 3 ] ],
        "Ionising radiation": [ [ 2.1, 10.4 ] ],
        "Occupational exposure": [ [ 3.2, .5 ] ]
      }
    },
    "Breast cancer male": {
      field: "breast_m",
      url: ""
    },
    "Breast cancer female": {
      field: "breast_f",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/304/{z}/{x}/{y}",
      min: [ "00NCRP", "36", "Gwynedd" ],
      max: [ "35UCGD", "63", "Northumberland" ],
      riskFactorTitle: "The fraction of breast cancer attributable to lifestyle and environmental factors in females in the UK in 2010",
      riskFactors: {
        Alcohol: [ [ 1, 6.4 ] ],
        "Overweight and Obesity": [ [ 2.1, 8.7 ] ],
        "≤30min exercise 5 times p/w": [ [ 3.2, 3.4 ] ],
        "Post-menopausal hormones": [ [ 4.3, 3.2 ] ],
        "Ionising radiation": [ [ 5.4, .9 ] ],
        "< 6 months breast feeding": [ [ 6.5, 3.1 ] ]
      }
    },
    "Prostate cancer male": {
      field: "prostate_m",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/328/{z}/{x}/{y}",
      min: [ "00ACGE", "34", "Greater London" ],
      max: [ "00NCQA", "36", "Gwynedd" ]
    },
    "Prostate cancer female": {
      field: "prostate_f",
      url: ""
    },
    "Bladder cancer male": {
      field: "bladder_m",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/301/{z}/{x}/{y}",
      min: [ "33UEHK", "58", "Norfolk" ],
      max: [ "00NENT", "18", "Conwy" ],
      riskFactorTitle: "The fraction of bladder cancer attributable to lifestyle and environmental factors in males in the UK in 2010",
      riskFactors: {
        "Tobacco smoking": [ [ 1, 37.5 ] ],
        "Ionising radiation": [ [ 2.1, 2.6 ] ],
        "Occupational exposure": [ [ 3.2, 7.1 ] ]
      }
    },
    "Bladder cancer female": {
      field: "bladder_f",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/300/{z}/{x}/{y}",
      min: [ "29UEGS", "43", "Kent" ],
      max: [ "00PBPS", "8", "Bridgend" ],
      riskFactorTitle: "The fraction of bladder cancer attributable to lifestyle and environmental factors in females in the UK in 2010",
      riskFactors: {
        "Tobacco smoking": [ [ 1, 34.4 ] ],
        "Ionising radiation": [ [ 2.1, 2.3 ] ],
        "Occupational exposure": [ [ 3.2, 1.9 ] ]
      }
    },
    "Brain cancer male": {
      field: "brain_m",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/303/{z}/{x}/{y}",
      min: [ "00HGND", "69", "Plymouth Unitary Authority" ],
      max: [ "29UNGR", "43", "Kent" ]
    },
    "Brain cancer female": {
      field: "brain_f",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/302/{z}/{x}/{y}",
      min: [ "00CSFR", "100", "West Midlands" ],
      max: [ "00NEPK", "18", "Conwy" ]
    },
    "COPD male": {
      field: "copd_m",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/306/{z}/{x}/{y}",
      min: [ "00BKGC", "34", "Greater London" ],
      max: [ "43UCFR", "88", "Surrey" ]
    },
    "COPD female": {
      field: "copd_f",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/305/{z}/{x}/{y}",
      min: [ "40UFGG", "79", "Somerset" ],
      max: [ "30UPHB", "45", "Lancashire" ]
    },
    "Heart disease male": {
      field: "ihd_m",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/310/{z}/{x}/{y}",
      min: [ "00AWGM", "34", "Greater London" ],
      max: [ "36UEHC", "61", "North Yorkshire" ]
    },
    "Heart disease female": {
      field: "ihd_f",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/309/{z}/{x}/{y}",
      min: [ "00AWFZ", "34", "Greater London" ],
      max: [ "00EHNU", "22", "Darlington Unitary Authority" ]
    },
    "Kidney disease male": {
      field: "kidney_m",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/312/{z}/{x}/{y}",
      min: [ "18UBHR", "26", "Devon", "kidney_m" ],
      max: [ "09UEHB", "2", "Bedfordshire" ]
    },
    "Kidney disease female": {
      field: "kidney_f",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/311/{z}/{x}/{y}",
      min: [ "00HHMN", "94", "Torbay Unitary Authority" ],
      max: [ "00KAMT", "49", "Luton Unitary Authority" ]
    },
    "Liver cancer male": {
      field: "liver_m",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/318/{z}/{x}/{y}",
      min: [ "00FCNA", "59", "North East Lincolnshire Unitary Authority" ],
      max: [ "13UBHK", "17", "Cheshire" ],
      riskFactorTitle: "The fraction of liver cancer attributable to lifestyle and environmental factors in males in the UK in 2010",
      riskFactors: {
        "Tobacco smoking": [ [ 1, 27.3 ] ],
        "Alcohol consumption": [ [ 2.1, 11.4 ] ],
        Infections: [ [ 3.2, 19.6 ] ],
        "Ionising radiation": [ [ 4.3, .6 ] ],
        "Occupational exposures": [ [ 5.4, .2 ] ]
      }
    },
    "Liver cancer female": {
      field: "liver_f",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/317/{z}/{x}/{y}",
      min: [ "22UNHL", "31", "Essex" ],
      max: [ "00CBFF", "51", "Merseyside" ],
      riskFactorTitle: "The fraction of liver cancer attributable to lifestyle and environmental factors in females in the UK in 2010",
      riskFactors: {
        "Tobacco smoking": [ [ 1, 15.3 ] ],
        "Alcohol consumption": [ [ 2.1, 5 ] ],
        Infections: [ [ 3.2, 9.3 ] ],
        "Ionising radiation": [ [ 4.3, 1.1 ] ],
        "Occupational exposure": [ [ 5.4, .1 ] ]
      }
    },
    "Skin cancer male": {
      field: "melanoma_m",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/324/{z}/{x}/{y}",
      min: [ "00BBGN", "34", "Greater London" ],
      max: [ "00HGNN", "69", "Plymouth Unitary Authority" ],
      riskFactorTitle: "The fraction of skin cancer attributable to UV radiation in the UK in males and females in 2010",
      riskFactors: {
        "UV Radiation Males": [ [ 1, 89.8 ] ],
        "UV Radiation Females": [ [ 2.1, 82.4 ] ],
        "UV Radiation Both": [ [ 3.2, 85.9 ] ]
      }
    },
    "Skin cancer female": {
      field: "melanoma_f",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/323/{z}/{x}/{y}",
      min: [ "00ASGS", "34", "Greater London" ],
      max: [ "00HGNN", "69", "Plymouth Unitary Authority" ],
      riskFactorTitle: "The fraction of skin cancer attributable to UV radiation in the UK in males and females in 2010",
      riskFactors: {
        "UV Radiation Males": [ [ 1, 89.8 ] ],
        "UV Radiation Females": [ [ 2.1, 82.4 ] ],
        "UV Radiation Both": [ [ 3.2, 85.9 ] ]
      }
    },
    "Mesothelioma male": {
      field: "mesothelioma_m",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/326/{z}/{x}/{y}",
      min: [ "00NCQK", "36", "Gwynedd" ],
      max: [ "16UCFW", "21", "Cumbria" ],
      riskFactorTitle: "The fraction of mesothelioma attributable to occupational factors in males and females in the UK in 2010",
      riskFactors: {
        "Occupation Males": [ [ 1, 97 ] ],
        "Occupation Females": [ [ 2.1, 82.5 ] ],
        "Occupation Both": [ [ 3.2, 94.4 ] ]
      }
    },
    "Mesothelioma female": {
      field: "mesothelioma_f",
      url: "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/325/{z}/{x}/{y}",
      min: [ "00CNFR", "100", "West Midlands" ],
      max: [ "00ABGC", "34", "Greater London" ],
      riskFactorTitle: "The fraction of mesothelioma attributable to occupational factors in females and males in the UK in 2010",
      riskFactors: {
        "Occupation Males": [ [ 1, 97 ] ],
        "Occupation Females": [ [ 2.1, 82.5 ] ],
        "Occupation Both": [ [ 3.2, 94.4 ] ]
      }
    }
  };
  e.wardSelected = false;
  e.current = {
    disease: "Lung cancer",
    gender: "female"
  };
  e.version = "0.1";
  window.EHA = e
} )();
EHA.postcode = {
  current: false,
  search: function() {
    var e = $( "#postcode input" ).attr( "value" ).trim();
    if ( this.check( e ) ) {
      this.getCentroid( e );
      $( "#pcdInfo" ).text( "" )
    } else {
      $( "#pcdBtn" ).hide();
      $( "#pcdInfo" ).show().text( "Invalid postcode." )
    }
  },
  check: function( e ) {
    var t = /^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {0,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)$/i;
    return t.test( e )
  },
  getCentroid: function( e ) {
    e = e.replace( /\s+/g, "" );
    var t = this.capitalize( e ),
      n = $.extend( n || {}, {
        dataType: "text",
        cache: false,
        type: "POST",
        data: "pcd=" + e,
        url: "backend/pcdSearch.php",
        success: function( e, t, n ) {
          if ( e === " " ) {
            $( "#pcdBtn" ).hide();
            $( "#pcdInfo" ).show().text( "Postcode not found." )
          }
          EHA.postcode.showPcd( e )
        },
        error: function( e, t, n ) {
          alert( e + "xc" + t )
        }
      } );
    jQuery.ajax( n )
  },
  showPcd: function( e, t ) {
    var n = e.split( "," ),
      r = n[ 2 ],
      i = n[ 3 ],
      s = n[ 4 ].replace( /\s+/g, "" ),
      o = n[ 5 ].replace( /^\s\s*/, "" ).replace( /\s\s*$/, "" );
    this.x = n[ 0 ];
    this.y = n[ 1 ];
    EHA.map.currentBounds = null;
    EHA.map.geojson.setCnty( i, s );
    EHA.map.geojson.setWardId( o );
    $( ".legendrr div.highl" ).removeClass( "highl" );
    EHA.map.geojson.getGeojson( this.marker )
  },
  marker: function( e, t ) {
    var e = e || EHA.postcode.x,
      t = t || EHA.postcode.y;
    EHA.postcode.currentmarker = EHA.map.addMarker( e, t );
    if ( EHA.postcode.current != false ) {
      EHA.postcode.current.clearLayers()
    }
    EHA.postcode.current = new L.layerGroup( [ EHA.postcode.currentmarker ] );
    EHA.map.addLayer( EHA.postcode.current )
  },
  capitalize: function( e ) {
    var t = /\w/g;
    return e.replace( t, function( e ) {
      return e.toUpperCase()
    } )
  }
};
EHA.map = {
  chartIsOpen: false,
  zoomLevel: 7,
  init: function( e ) {
    var t = this.zoomLevel,
      n = new L.Map( "map", {
        zoom: t,
        minZoom: 7,
        maxBounds: [ [ 46.8615136861442, 4 ], [ 58, -8 ] ],
        attributionControl: false
      } );
    if ( !EHA.wardSelected ) {
      n.setView( new L.LatLng( 53, -1.8 ), t )
    }
    var r = this.getLegend();
    r.addTo( n );
    this.lmap = n
  },
  diseaseTiles: {
    draw: function( e ) {
      var t = e || EHA.map.lmap,
        n = EHA.current[ "disease" ] + " " + EHA.current[ "gender" ];
      this.crntTiles = new L.TileLayer( EHA.diseases[ n ].url, {
        maxZoom: 10
      } );
      t.addLayer( this.crntTiles )
    },
    removeTile: function( e ) {
      if ( typeof this.crntTiles !== "undefined" ) {
        EHA.map.lmap.removeLayer( this.crntTiles )
      }
    }
  },
  addLayer: function( e ) {
    this.lmap.addLayer( e )
  },
  addMarker: function( e, t ) {
    var n = L.icon( {
      iconUrl: "images/marker-icon.png",
      iconSize: [ 25, 41 ],
      iconAnchor: [ 12, 40 ],
      shadowUrl: "images/marker-shadow.png",
      shadowSize: [ 41, 41 ],
      shadowAnchor: [ 15, 40 ]
    } );
    var r = this.getExtent( e, t );
    this.zoomTo( r );
    return L.marker( [ t, e ], {
      icon: n,
      zIndexOffset: -99999
    } )
  },
  getExtent: function( t, n ) {
    var r = t > 0 ? t + .03 : ( Math.abs( t ) - .03 ) * -1,
      i = Math.abs( n ) + .03,
      s = t > 0 ? t - .03 : ( Math.abs( t ) + .03 ) * -1,
      o = Math.abs( n ) - .03;
    var u = new L.LatLng( o, s ),
      a = new L.LatLng( i, r ),
      f = new L.LatLngBounds( u, a );
    return f
  },
  zoomTo: function( e ) {
    this.lmap.fitBounds( e )
  },
  getLegend: function() {
    var e = L.control( {
        position: "bottomleft"
      } ),
      t = this;
    e.onAdd = function( e ) {
      var t = L.DomUtil.create( "div", "info legendrr" ),
        n = [ "<= 0.67", "0.68 - 0.75", "0.76 - 0.85", "0.86 - 0.95", "0.96 - 1.06", "1.07 - 1.19", "1.20 - 1.34", "1.35 - 1.50", ">=1.51" ],
        r = [];
      t.id = "smr";
      var i = document.createElement( "div" );
      i.id = "rrTitle";
      i.innerHTML = "<span> Relative Risk </span>" + "<div id='genderIcon' class='icon" + EHA.current.gender + "'></div>";
      t.appendChild( i );
      var s = document.createElement( "div" );
      s.id = "arrow";
      t.appendChild( s );
      var o = n.length;
      while ( n[ --o ] ) {
        t.innerHTML += "<div class=" + ( o + 1 ) + '><i class ="cat' + ( o + 1 ) + '"></i> ' + n[ o ] + "</div>"
      }
      return t
    };
    return e
  },
  setBounds: function() {
    if ( EHA.map.currentBounds && EHA.wardSelected ) {
      var e = EHA.map.currentBounds.split( "," ),
        t = new L.LatLng( e[ 0 ], e[ 1 ] );
      this.lmap.setView( t, parseInt( this.zoomLevel ) )
    }
  },
  getClass: function( e ) {
    return e === 9 ? "cat9" : e === 8 ? "cat8" : e === 1.19 ? "cat7" : e === 1.06 ? "cat6" : e === .94 ? "cat5" : e === .84 ? "cat4" : e === .75 ? "cat3" : e === .67 ? "cat2" : "cat1"
  }
};
( function() {
  var e = EHA.map.geojson = {
    selection: false,
    slctdId: null,
    nrequests: 0,
    currentBounds: null,
    jsonobj: {
      name: "counties",
      level: "counties",
      obj: null
    },
    styles: {
      counties: {
        style: {
          weight: .5,
          color: "#575757",
          fillOpacity: 0,
          fillColor: "#FFFFFF"
        },
        hover: {
          weight: 8,
          color: "#7CCD7C",
          fillOpacity: 0
        }
      },
      wards: {
        style: {
          weight: 1,
          color: "#575757",
          fillOpacity: 0,
          fillColor: "#7CCD7C"
        },
        hover: {
          weight: 5,
          color: "#7CCD7C",
          fillOpacity: .3
        }
      }
    },
    cnty: {
      name: "",
      gid: ""
    },
    init: function( e, t ) {
      var n = e || this.jsonobj,
        r = this.styles[ n.level ].style,
        i = EHA.map.lmap,
        s = n.name;
      if ( typeof e == "object" ) {
        this.jsonobj = e
      }
      var o = {
          style: r,
          onEachFeature: this.evHandl
        },
        u = this.jsonobj.level === "counties" ? new L.TopoJSON( n.obj, o ) : new L.geoJson( n.obj, o );
      u.addTo( i );
      $( "<div id='" + s + "'></div>" ).prependTo( $( "#myLayers" ) );
      if ( typeof t == "function" ) {
        t( this.jsonlyr )
      }
      this.jsonlyr = u;
      if ( this.jsonobj.level === "counties" ) {
        return
      }
      if ( this.slctdId !== null ) {
        this.slctWardByName( this.slctdId, this.cnty.name );
        EHA.map.setBounds()
      } else {
        i.fitBounds( u.getBounds() )
      }
    },
    evHandl: function( n, r ) {
      var o = t(),
        u = i()[ o ],
        a = e.jsonobj.name,
        f, l, c, h, p, d, v;
      hover = function( t ) {
        r.setStyle( u.hover );
        if ( !L.Browser.ie && !L.Browser.opera && $( "#myLayers" ).children().size() == 1 ) {
          r.bringToFront()
        }
        if ( o === "counties" ) {
          $( ".leaflet-overlay-pane svg g" ).hoverbox_counties( r.feature.properties.county )
        } else {
          if ( e.selection ) {
            return
          }
          e.update( r )
        }
      }, out = function( t ) {
        if ( e.slctdId === r.feature.properties.w ) {
          return
        }
        e.clear( r, u )
      }, clickme = function( t ) {
        if ( o === "counties" ) {
          s();
          e.cnty.name = r.feature.properties.county.replace( /\s/g, "" );
          e.cnty.gid = r.feature.properties.gid;
          counties = e.jsonlyr;
          e.disableSelection();
          e.getGeojson();
          return
        }
        var n = r.feature.properties.w.replace( /^\s\s*/, "" ).replace( /\s\s*$/, "" ),
          i = r.feature.properties.d.replace( /^\s\s*/, "" ).replace( /\s\s*$/, "" );
        $( ".hoverBlock" ).attr( "class", "hoverBlock wardsClicked" );
        $( ".legendrr div.highl" ).removeClass( "highl" );
        e.slctWardByName( n, i )
      };
      return r.on( {
        mouseover: hover,
        mouseout: out,
        click: clickme
      } )
    },
    slctWardByName: function( t, n ) {
      $( ".legendrr div.highl" ).removeClass( "highl" );
      var r = this.styles.wards;
      for ( each in this.jsonlyr._layers ) {
        var i = this.jsonlyr._layers[ each ].feature.properties.w,
          s = this.jsonlyr._layers[ each ].feature.properties.d;
        if ( i == t && ( s == n || this.cnty.name == n ) ) {
          this.jsonlyr._layers[ each ].setStyle( r.hover );
          e.update( this.jsonlyr._layers[ each ] );
          this.enableSelection( t )
        } else {
          this.jsonlyr._layers[ each ].setStyle( r.style )
        }
      }
      e.w_name = t;
      e.d_name = n
    },
    clear: function( n, r ) {
      var s = r || i()[ t() ],
        o = n || this.jsonlyr;
      o.setStyle( s.style );
      if ( !e.selection ) {
        $( ".legendrr div" ).removeClass( "highl" )
      }
    },
    enableSelection: function( t ) {
      e.slctdId = t;
      e.selection = true;
      $( "#clear" ).show()
    },
    disableSelection: function( t ) {
      e.selection = EHA.wardSelected = false;
      e.slctdId = null;
      e.clear();
      $( "#clear" ).hide();
      $( ".hoverBlock" ).removeClass( "wardsClicked" );
      if ( t ) {
        s()
      }
    },
    update: function( e ) {
      var t = e.feature.properties,
        n = t[ r() ].split( "," );
      rr = n[ 0 ], cl = n[ 1 ], cu = n[ 2 ], gid = n[ 3 ], pop = t[ "pop" ], wname = t[ "w" ], dname = t[ "d" ];
      EHA.graph.highlight( gid, cl, cu, rr );
      EHA.box.update( {
        risk: rr,
        pop: pop,
        ward: wname,
        dist: dname
      } )
    },
    getGeojson: function( t ) {
      var n = EHA.current.gender,
        i = EHA.current.disease;
      if ( e.cnty.name != "" ) {
        if ( n === "male" && i === "Breast cancer" || i === "Prostate cancer" && n === "female" ) {
          return
        }
        u( n.charAt( 0 ) + "/" + r() + "/" + e.cnty.gid + ".json", e.cnty, "wards", t );
        if ( this.nrequests++ === 0 ) {
          EHA.graph.toggleChart( "open" )
        }
      }
    },
    setCnty: function( t, n ) {
      e.cnty.gid = t;
      e.cnty.name = n
    },
    setWardId: function( t ) {
      e.slctdId = t
    },
    startMe: function( e ) {
      u( "../counties/countiesTopo.json", "counties", "counties", e )
    },
    removeWards: function() {
      if ( $( "#myLayers" ).children().size() > 1 ) {
        f( e.jsonlyr )
      }
    },
    setSession: function() {
      o()
    }
  };
  var t = function() {
    return e.jsonobj.level
  };
  var n = function() {
    return EHA.current.disease + " " + EHA.current.gender
  };
  var r = function() {
    return EHA.diseases[ n() ].field
  };
  var i = function() {
    return e.styles
  };
  var s = function( e, t ) {
    var n = {
      url: "backend/unsetSelection.php",
      error: function( e, t, n ) {
        alert( "An Error occured" + e.status )
      },
      success: function( e, t, n ) {
        console.log( e )
      }
    };
    jQuery.ajax( n )
  };
  var o = function() {
    if ( !e.selection ) {
      return
    }
    e.currentBounds = EHA.map.lmap.getBounds();
    var t = EHA.map.lmap.getCenter(),
      n = EHA.map.lmap.getZoom(),
      r = EHA.current.gender,
      i = {
        url: "backend/setRegisterSelection.php",
        data: "wardname=" + e.w_name + "&countyname=" + e.d_name + "&countyid=" + e.cnty.gid + "&wardId=" + e.slctdId + "&center=" + t.lat + "," + t.lng + "&zoom=" + n + "&gender=" + r,
        type: "POST",
        success: function( e, t, n ) {},
        error: function( e, t, n ) {
          alert( "An Error occured" + e.status )
        }
      };
    jQuery.ajax( i )
  };
  var u = function( t, n, r, i ) {
    var s = $.extend( s || {}, {
      dataType: "json",
      cache: false,
      url: "GEOJSONS/wards/" + t,
      success: function( t, s, o ) {
        e.jsonobj = {};
        if ( r === "wards" ) {
          EHA.graph.draw( t )
        }
        e.init( {
          name: n,
          level: r,
          obj: t
        }, a );
        if ( i ) {
          i.call()
        }
      },
      error: function( e, t, n ) {
        alert( "An Error occured" + e.status );
        console.log( e )
      },
      complete: function() {
        $( "#loader" ).fadeOut()
      }
    } );
    jQuery.ajax( s )
  };
  var a = function( e ) {
    if ( $( "#myLayers" ).children().size() > 2 ) {
      f( e )
    }
  };
  var f = function( e ) {
    var t = $( "#myLayers" ).children()[ 1 ];
    EHA.map.lmap.removeLayer( e );
    $( t ).remove()
  }
} )();
EHA.graph = {
  ewAvrg: {
    label: "Average",
    data: [ [ 1, 1 ], [ 10, 1 ] ],
    lines: {
      show: true,
      lineWidth: 3,
      fillColor: "#EEC591"
    },
    shadowSize: 0
  },
  init: function() {
    this.getRiskFactor()
  },
  getCurrent: function() {
    return EHA.current.disease + " " + EHA.current.gender
  },
  draw: function( e, t ) {
    if ( e !== null && typeof t === "undefined" ) {
      this.gData = {
        rr: [],
        lower: [],
        upper: [],
        maxX: 0,
        minX: 0,
        maxRisk: -1,
        minRisk: 10
      };
      var n = EHA.diseases[ this.getCurrent() ].field,
        r = 0,
        s = e.features.length;
      for ( i = s; i--; ) {
        var o = e.features[ i ].properties[ n ].split( "," ),
          r = parseInt( o[ 3 ] ),
          u = o[ 0 ];
        y = o[ 1 ];
        b = o[ 2 ];
        this.gData.maxRisk = b > this.gData.maxRisk ? b : Math.round( this.gData.maxRisk * 100 ) / 100;
        this.gData.minRisk = y < this.gData.minRisk ? y : Math.round( this.gData.minRisk * 100 ) / 100;
        this.gData.maxX = r > this.gData.maxX ? r : this.gData.maxX;
        this.gData.minX = r < this.gData.minX ? r : this.gData.minX;
        this.gData.lower[ i ] = [ r, y ];
        this.gData.upper[ i ] = [ r, b ];
        this.gData.rr[ i ] = [ r, u ]
      }
    }
    var a = typeof t !== "undefined",
      f = a ? {
        data: [ t[ 0 ], t[ 1 ] ],
        lines: {
          show: true,
          lineWidth: 4
        }
      } : [],
      l = a ? {
        data: [ t[ 2 ] ],
        points: {
          show: true,
          fill: true,
          radius: 4,
          fillColor: "#4169E1"
        }
      } : [],
      c = a ? {
        data: [ t[ 1 ] ],
        points: {
          show: true,
          fill: true,
          radius: 1,
          fillColor: "#4169E1"
        }
      } : [],
      h = a ? {
        data: [ t[ 0 ] ],
        points: {
          show: true,
          fill: true,
          radius: 1,
          fillColor: "#4169E1"
        }
      } : [];
    var p = this.gData.minX - 2,
      d = this.gData.maxX + 1,
      v = this.gData.minRisk - .3,
      m = this.gData.maxRisk + .3;
    this.plot = $.plot( $( "#graph" ), [ {
        data: [ [ this.gData.minX, 1 ], [ this.gData.maxX, 1 ] ],
        lines: {
          show: true,
          lineWidth: 2,
          fillColor: "#FFD39B"
        },
        label: "Relative risk(RR) equal to England and Wales",
        shadowSize: 0,
        hoverable: false,
        clickable: false
      }, {
        label: "Relative Risk",
        data: this.gData.rr,
        lines: {
          show: true,
          fillColor: "#104E8B",
          lineWidth: 3
        },
        highlightColor: "#104E8B",
        hoverable: false,
        clickable: false
      }, {
        data: this.gData.lower,
        lines: {
          show: true,
          lineWidth: .5,
          fillcolor: "#7D9EC0"
        },
        label: "95% uncertainty intervals",
        hoverable: false,
        clickable: false
      }, {
        data: this.gData.upper,
        lines: {
          show: true,
          lineWidth: .5,
          fillcolor: "#7D9EC0"
        },
        hoverable: false,
        clickable: false
      },
      f, l, c, h ], {
      grid: {
        hoverable: true,
        clickable: true,
        borderColor: "white",
        backgroundColor: "white",
        borderWidth: 1,
        labelMargin: 0
      },
      yaxis: {
        min: v,
        max: m
      },
      xaxis: {
        autoscaleMargin: .02,
        min: p,
        max: d
      },
      colors: [ "#FFD39B", "#4169E1", "#7D9EC0", "#7D9EC0", "#7CCD7C", "#4169E1", "#FFC125", "#FFC125" ],
      legend: {
        position: "nw",
        backgroundOpacity: .5,
        margin: [ 10, 0 ]
      }
    } );
    $( ".xAxis div" ).css( "color", "white" );
    $( "#graph .flot-text" ).append( "<div id='xlabelRR'></div>" );
    if ( a ) {
      var g = ( Math.ceil( parseFloat( t[ 2 ][ 1 ] ) * 100 ) / 100 ).toFixed( 2 ),
        y = parseFloat( t[ 0 ][ 1 ] ).toFixed( 2 ),
        b = parseFloat( t[ 1 ][ 1 ] ).toFixed( 2 );
      $( "#rr" ).text( "RR: " + g );
      $( "#ci" ).text( "(" + y + "-" + b + ")" )
    }
  },
  toggleChart: function( e ) {
    var t, n, r;
    if ( e === "open" ) {
      t = "60%";
      n = true;
      r = "down_arrow.png";
      $( "#figures" ).fadeIn( 700 )
    } else {
      t = "94%";
      n = false;
      r = "up_arrow.png";
      $( "#figures" ).hide()
    }
    $( "#map" ).animate( {
      height: t
    } );
    $( ".shown img" ).attr( "src", "images/" + r );
    EHA.map.chartIsOpen = n
  },
  highlight: function( e, t, n, r ) {
    this.draw( null, [ [ e, t ], [ e, n ], [ e, r ] ] )
  },
  getRiskFactor: function() {
    var e = [ "#FFDEAD", "#FFC125", "#00CD66", "#CD9B9B", "#388E8E", "#EECFA1", "#8DB6CD" ],
      t = EHA.diseases[ this.getCurrent() ].riskFactors,
      n = EHA.diseases[ this.getCurrent() ].riskFactorTitle,
      r = $( ".riskFactorsChart" ),
      i = $( ".riskFactorsChartLegend" ),
      s = [],
      o = 0,
      u = "";
    if ( typeof t === "undefined" ) {
      $( i ).empty();
      $( r ).empty();
      $( ".riskFactor" ).html( "" );
      $( r ).hide();
      $( "p.reference,#percentageLbl" ).hide();
      return
    }
    $( "p.reference,#percentageLbl" ).show();
    $( r ).show();
    var a = [];
    for ( var f in t ) {
      a.push( parseFloat( t[ f ][ 0 ][ 1 ] ) );
      s[ o++ ] = {
        data: t[ f ],
        bars: {
          show: true,
          lineWidth: 0,
          fillColor: e[ o ]
        }
      };
      u += "<div><i style='background-color:" + e[ o ] + "'></i>" + f + "</div>"
    }
    $( i ).html( u );
    $( ".riskFactor" ).html( n );
    $.plot( r, s, {
      grid: {
        labelMargin: 0,
        borderWidth: 0
      },
      yaxis: {
        min: 0,
        max: Math.max.apply( Math, a )
      },
      xaxis: {
        min: .6,
        max: a.length + 2,
        ticks: []
      }
    } )
  }
};
EHA.urls = {
  get: function( e ) {
    var t = "";
    e = this.capitaliseFirstLetter( e );
    switch ( e ) {
      case "Lung":
        t = "Lung cancer";
        break;
      case "Breast":
        t = "Breast cancer";
        break;
      case "Mesothelioma":
        t = "Mesothelioma";
        break;
      case "Leukaemia":
        t = "Leukaemia";
        break;
      case "Prostate":
        t = "Prostate cancer";
        break;
      case "Skin":
        t = "Skin cancer";
        break;
      case "Bladder":
        t = "Bladder cancer";
        break;
      case "Bladder":
        t = "Bladder cancer";
        break;
      case "Brain":
        t = "Brain cancer";
        break;
      case "Liver":
        t = "Liver cancer";
        break;
      case "Stillbirths":
        t = "Stillbirths";
        break;
      case "Lowbirth":
        t = "Low Birth Weight";
        break
    }
    if ( e.toUpperCase() === "CHD" ) {
      t = "Heart disease"
    } else if ( e.toUpperCase() === "COPD" ) {
      t = "COPD"
    } else if ( e.toUpperCase() === "KIDNEY" ) {
      t = "Kidney disease"
    }
    return t
  },
  capitaliseFirstLetter: function( e ) {
    return e.charAt( 0 ).toUpperCase() + e.slice( 1 )
  }
};
( function() {
  Opentip.styles.myStyle = {
    "extends": "glass",
    target: true,
    stem: true,
    showOn: "hover",
    hideDelay: .1,
    background: "#ffffff"
  };
  new Opentip( "#figures", "Relative risk value for the selected ward", {
    target: "#figures",
    tipJoint: "bottom",
    style: "myStyle"
  } );
  new Opentip( "#diseaselist", "Click to see a list of available maps of health outcomes.", {
    target: "#diseaselist",
    tipJoint: "left",
    style: "myStyle"
  } );
  new Opentip( "#sex", "Switch between maps for females and males", {
    target: "#sex",
    tipJoint: "left",
    style: "myStyle"
  } );
  new Opentip( "#smr", "This indicates the risk of a health outcome in a ward compared to the average risk for England & Wales  ", {
    target: "#smr",
    tipJoint: "bottom",
    style: "myStyle"
  } );
  new Opentip( "#pop", "Gender specific population  in each ward. <p> This is used to calculate the relative risk </p> ", {
    target: "#pop",
    tipJoint: "left",
    offset: [ 7, 0 ],
    style: "myStyle"
  } );
  new Opentip( "#wardSlct", "Indicates  category  of<p> relative risk for selected ward.</p>", {
    target: "#wardSlct",
    tipJoint: "left",
    offset: [ 7, 0 ],
    style: "myStyle"
  } );
  new Opentip( "#wardsName", "Selected ward.", {
    target: "#wardsName",
    tipJoint: "left",
    offset: [ 7, 0 ],
    style: "myStyle"
  } );
  new Opentip( "#districtName", "District containing <p> the selected ward. </p>", {
    target: "#districtName",
    tipJoint: "left",
    offset: [ 7, 0 ],
    style: "myStyle"
  } );
  new Opentip( "#showhide", "This chart highlights the selected  " + "<p>ward and presents where its estimated </p>" + "<p>level of risk is in comparison to other </p>" + "<p> wards in the same county. </p>", {
    target: "#showhide",
    tipJoint: "top",
    style: "myStyle"
  } );
  EHA.update = function( e ) {
    if ( u( e ) ) {
      $( ".dropdown dt a span" ).html( e );
      $( ".dropdown dd ul" ).hide();
      $( "#" + EHA.current.gender ).prop( "checked", true );
      c();
      a()
    }
  };
  $( "#showhide a" ).click( function( e ) {
    if ( EHA.map.geojson.nrequests < 1 ) {
      e.preventDefault();
      return
    }
    var t = EHA.map.chartIsOpen ? "close" : "open";
    EHA.graph.toggleChart( t );
    e.preventDefault()
  } );
  $( ".glossary ul li a" ).click( function( e ) {
    $( ".glossary ul li div" ).hide();
    $( this ).nextAll( "div:first" ).toggle();
    e.preventDefault()
  } );
  $( "#clear" ).click( function() {
    EHA.map.geojson.disableSelection( 1 )
  } );
  $( "#menu .dropdown dt a" ).click( function( e ) {
    EHA.map.geojson.setSession();
    $( ".dropdown dd ul" ).toggle();
    e.preventDefault()
  } );
  $( "#menu .dropdown dd" ).mouseleave( function() {
    $( ".dropdown dd ul" ).hide()
  } );
  $( ".gender input[name=sex]" ).click( function() {
    if ( u() ) {
      t();
      a()
    } else {
      return false
    }
  } );
  $( "#pcdBtn" ).click( function() {
    i()
  } );
  $( "input[name=postcode]" ).keydown( function( e ) {
    if ( e.which == "13" ) {
      e.preventDefault();
      i()
    }
  } );
  $( "input[name=postcode]" ).on( "focus", function() {
    if ( this.value == "Postcode search" ) {
      this.value = ""
    }
    $( "#pcdBtn" ).show();
    $( "#pcdInfo" ).hide()
  } ).on( "blur", function() {
    if ( this.value == "" ) {
      this.value = "Postcode search"
    }
  } );
  $( ".simpleTabsNavigation li a" ).click( function( e ) {
    var t = $( this ).attr( "id" );
    $( ".simpleTabsContent,.simpleTabsNavigation li a" ).removeClass( "current" );
    $( "div.simpleTabsContent." + t + ",#" + t ).addClass( "current" );
    e.preventDefault()
  } );
  var e = function() {
    return $( ".gender input[name=sex]:checked" ).val()
  };
  var t = function( t ) {
    var n = t || e();
    EHA.current.gender = n
  };
  var n = function( e ) {
    EHA.current.disease = e
  };
  var r = function( e ) {
    return EHA.current.disease
  };
  var i = function() {
    EHA.postcode.search()
  };
  var s = function( e ) {
    $( "input:radio#" + e ).attr( "checked", "checked" )
  };
  var o = function() {
    $( "#graph,#showhide" ).width( $( this ).width() )
  };
  var u = function( t ) {
    var i = r();
    if ( t === i ) {}
    var s = e(),
      t = t || i;
    $( ".showInfo .gender_na" ).hide();
    $( ".showInfo .rate,.gender_avlb,.rateCaption" ).show();
    n( t );
    return true
  };
  var a = function() {
    var e = EHA.current.gender,
      t = EHA.current.disease;
    f();
    if ( e === "male" && t === "Breast cancer" || t === "Prostate cancer" && e === "female" ) {
      $( ".showInfo .gender_na" ).show();
      $( ".showInfo .rate,.gender_avlb,.rateCaption" ).hide();
      EHA.map.geojson.removeWards();
      EHA.graph.toggleChart( "close" );
      return
    }
    l();
    EHA.graph.getRiskFactor();
    EHA.map.geojson.getGeojson();
    document.getElementById( "genderIcon" ).className = "icon" + EHA.current.gender
  };
  var f = function() {
    EHA.map.diseaseTiles.removeTile();
    EHA.map.diseaseTiles.draw()
  };
  var l = function() {
    $( ".rate" ).children().hide();
    $( ".rate ." + e() + ",.rate a,.showInfo .rateCaption" ).show()
  };
  var c = function() {
    var e = r().replace( /\s+/g, "" );
    $( ".showInfo, ." + e ).toggleClass( "showInfo" ).toggleClass( "diseases" );
    $( ".simpleTabsNavigation li:first-child a" ).text( r() )
  };
  l()
} )();
EHA.box = {
  init: function() {
    var e = L.control( {
      position: "topright"
    } );
    e.onAdd = function( e ) {
      var t = L.DomUtil.create( "div" );
      L.DomEvent.disableClickPropagation( t ).addListener( t, "click", L.DomEvent.stopPropagation ).addListener( t, "click", L.DomEvent.preventDefault );
      t.id = "wardsTooltip";
      t.innerHTML = "<div class='hoverBlock'></div>" + "<div id='wardsName'>Ward Name</div>" + "<div id='districtName'>District name</div>" + "<div id='wardSlct' class='cat6'> <span id='band'> Click on a county to begin  </span></div>" + "<div id='clear'> <a href='#'>clear selection</a></div>" + "<div id='pop'>  <span> pop : count </span> </div>" + "<div id='postcode' >" + "<input type='text'  name='postcode'  maxlength='10' value='Postcode search'  />" + "<div id='pcdBtn'>search </div>" + "<div id='pcdInfo'>  </div>" + "</div>";
      return t
    };
    e.addTo( EHA.map.lmap )
  },
  update: function( e ) {
    var t = document.getElementById( "wardSlct" ),
      n = document.getElementById( "band" );
    wardsName = document.getElementById( "wardsName" ), distName = document.getElementById( "districtName" ), popEl = $( "#pop span" ), gIcon = document.getElementById( "genderIcon" );
    this.update = function( e ) {
      var r = e.risk;
      var i = r >= 1.5 ? [ "9", "- Relative Risk above average " ] : r >= 1.34 ? [ "8", "- Relative Risk above average " ] : r >= 1.19 ? [ "7", "- Relative Risk above average " ] : r >= 1.06 ? [ "6", "- Relative Risk above average " ] : r >= .95 ? [ "5", "- Average Relative Risk " ] : r >= .85 ? [ "4", "- Relative Risk below average " ] : r >= .75 ? [ "3", "- Relative Risk below average" ] : r >= .67 ? [ "2", "- Relative Risk below average " ] : [ "1", " Relative Risk below average " ];
      $( popEl ).text( "Pop : " + e.pop );
      gIcon.className = "icon" + EHA.current.gender;
      $( ".legendrr div." + i[ 0 ] ).addClass( "highl" );
      n.innerHTML = i[ 1 ];
      t.className = "wardSlct cat" + i[ 0 ];
      wardsName.innerHTML = e.ward;
      distName.innerHTML = e.dist
    };
    this.update.call( this, e )
  }
}