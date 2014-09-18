EHA.map = {
  init: function() {
    var map = new L.Map( "map", {
      zoom: 7,
      minZoom: 6,
      maxZoom: 11,
      maxBounds: [ [ 46.8615136861442, 6 ], [ 58, -11 ] ],
      attributionControl: false
    } );
    if ( !EHA.wardSelected ) {
      map.setView( new L.LatLng( 53, -1.8 ), 7 );
    };
    this.lmap = map;
  },
  diseaseTiles: {
    draw: function( m ) {
      var map = m || EHA.map.lmap,
        sltd = EHA.current.replace( /\s+/g, '' );
      console.log( EHA.current ) this.crntTiles = new L.TileLayer( EHA.diseases[ sltd ].url, {
        maxZoom: 14
      } );
      map.addLayer( this.crntTiles );
      var legend = EHA.map.getLegend();
      legend.addTo( map );
    },
    removeTile: function( m ) {
      if ( typeof this.crntTiles !== 'undefined' ) {
        EHA.map.lmap.removeLayer( this.crntTiles )
      }
    }
  },
  addLayer: function( lyr ) {
    this.lmap.addLayer( lyr );
  },
  addMarker: function( x, y ) {
    var arrowIcon = L.icon( {
        iconUrl: 'images/marker-icon.png',
        iconSize: [ 25, 41 ], // size of the icon
        iconAnchor: [ 12, 40 ], // point of the icon which will correspond to marker's location
        shadowUrl: 'images/marker-shadow.png',
        shadowSize: [ 41, 41 ],
        shadowAnchor: [ 15, 40 ]
      } ),
      ext = this.getExtent( x, y );
    this.zoomTo( ext );
    return L.marker( [ y, x ], {
      icon: arrowIcon,
      zIndexOffset: -99999
    } );
  },
  getExtent: function getExtent( x, y ) {
    var nex = ( x > 0 ) ? x + 0.03 : ( Math.abs( x ) - 0.03 ) * -1, // JS seem to struggle adding positive number to negative.
      ney = Math.abs( y ) + 0.03, // Assume Latitudes >0
      swx = ( x > 0 ) ? x - 0.03 : ( Math.abs( x ) + 0.03 ) * -1,
      swy = Math.abs( y ) - 0.03,
      southWest = new L.LatLng( swy, swx ),
      northEast = new L.LatLng( ney, nex ),
      bounds = new L.LatLngBounds( southWest, northEast );
    return bounds;
  },
  zoomTo: function( ext ) {
    this.lmap.fitBounds( ext );
  },
  getLegend: function() {
    var legend = L.control( {
        position: 'bottomleft'
      } ),
      self = this;
    legend.onAdd = function( map ) {
      var curr = EHA.current.replace( /\s+/g, '' ),
        div = L.DomUtil.create( 'div', 'info legendrr' ),
        grades = EHA.diseases[ curr ].grades,
        labels = [],
        title = document.createElement( 'div' );
      div.id = "smr";
      title.id = "rrTitle";
      title.innerHTML = EHA.current + " <span>μg/m3</span>";
      div.appendChild( title );
      var l = grades.length,
        count = 0;
      while ( grades[ --l ] ) {
        div.innerHTML += '<div class="comp ' + ( l + 1 ) + '"><i class ="' + EHA.current + "_" + ( l + 1 ) + '"></i> ' + grades[ l ] + '</div>';
      }
      return div;
    };
    return legend;
  },
  updateLegend: function( current ) {
    var current = EHA.current.replace( /\s+/g, '' ),
      div = document.getElementById( 'smr' ),
      title = document.getElementById( 'rrTitle' ),
      grades = EHA.diseases[ current ].grades,
      l = grades.length,
      count = 0;
    div.innerHTML = "";
    while ( grades[ --l ] ) {
      div.innerHTML += '<div class="comp ' + ( l + 1 ) + '"><i class ="' + current + "_" + ( l + 1 ) + '"></i> ' + grades[ l ] + '</div>';
    }
    title.innerHTML = EHA.diseases[ current ].title;
    $( div ).prepend( title );
  },
  getFunct: function( d ) {
    return ( d.match( /no22001/i ) ) ? this.getNO22001 : ( d === 'PM102001' ) ? this.getPM102001 : ( d === 'Sunshine' ) ? this.getSunshine : ( d === 'Herbicides2000' ) ? this.getHerbicides : ( d === 'Fungicides2000' ) ? this.getFungicides : ( d === 'DBPswinter2000' || d === 'DBPssummer2000' ) ? this.getdbps : false;
  },
  getNO22001: function( value ) {
    return value > 40 ? 6 : value > 34 ? 5 : value > 27 ? 4 : value > 22 ? 3 : value > 16 ? 2 : 1;
  },
  getPM102001: function( value ) {
    return value >= 26.05 ? 6 : value > 19.74 ? 5 : value > 17.08 ? 4 : value > 15.96 ? 3 : value > 13.30 ? 2 : 1;
  },
  getSunshine: function( value ) {
    value = value.replace( /\s+/g, '' );
    return ( value === "#95bc9e" ) ? 1 : ( value === "#bed389" ) ? 2 : ( value === "#e6ed71" ) ? 3 : ( value === "#fce45a" ) ? 4 : ( value === "#fcb244" ) ? 5 : 6;
  },
  getHerbicides: function( value ) {
    return value >= 6598 ? 6 : value > 735 ? 5 : value > 81.78 ? 4 : value > 9.02 ? 3 : value > 0.91 ? 2 : 1;
  },
  getFungicides: function( value ) {
    return value >= 7189.4 ? 6 : value > 800.78 ? 5 : value > 89.10 ? 4 : value > 9.83 ? 3 : value > 0.99 ? 2 : 1;
  },
  getdbps: function( value ) {
    return value >= 60.1 ? 6 : value >= 50.01 ? 5 : value >= 40.01 ? 4 : value >= 30.01 ? 3 : value >= 15.01 ? 2 : 1;
  }
};