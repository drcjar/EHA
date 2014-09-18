EHA.map = {
  chartIsOpen: false,
  zoomLevel: 6,
  init: function( setView ) {
    var zoom = this.zoomLevel,
      map = new L.Map( "map", {
        zoom: zoom,
        minZoom: 6,
        maxBounds: [ [ 46.8615136861442, 5 ], [ 58, -11 ] ],
        attributionControl: false
      } );
    if ( !EHA.wardSelected ) {
      map.setView( new L.LatLng( 53, -1.8 ), zoom );
    };
    var legend = this.getLegend();
    legend.addTo( map );
    this.lmap = map;
  },
  diseaseTiles: {
    draw: function( m ) {
      var map = m || EHA.map.lmap,
        sltd = EHA.current[ 'disease' ] + " " + EHA.current[ 'gender' ];
      this.crntTiles = new L.TileLayer( EHA.diseases[ sltd ].url, {
        maxZoom: 10
      } );
      map.addLayer( this.crntTiles );
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
    } );
    var ext = this.getExtent( x, y );
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
      swy = Math.abs( y ) - 0.03;
    var southWest = new L.LatLng( swy, swx ),
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
      var div = L.DomUtil.create( 'div', 'info legendrr' ),
        grades = [ "<= 0.67", "0.68 - 0.75", "0.76 - 0.85", "0.86 - 0.95", "0.96 - 1.06", "1.07 - 1.19", "1.20 - 1.34", "1.35 - 1.50", ">=1.51" ],
        labels = [];
      div.id = "smr";
      var title = document.createElement( 'div' );
      title.id = "rrTitle";
      title.innerHTML = '<span> Relative Risk </span>' + "<div id='genderIcon' class='icon" + EHA.current.gender + "'></div>";
      div.appendChild( title );
      var arrow = document.createElement( 'div' );
      arrow.id = "arrow";
      div.appendChild( arrow ); // loop through our density intervals and generate a label with a colored square for each interval
      var l = grades.length; //console.log(grades[l--])
      while ( grades[ --l ] ) { //for (var i = 0; i < grades.length; i++) {
        div.innerHTML += '<div class=' + ( l + 1 ) + '><i class ="cat' + ( l + 1 ) + '"></i> ' + grades[ l ] + '</div>';
      }
      return div;
    };
    return legend;
  },
  setBounds: function() {
    if ( EHA.map.currentBounds && EHA.wardSelected ) {
      var bounds = EHA.map.currentBounds.split( "," ),
        l = new L.LatLng( bounds[ 0 ], bounds[ 1 ] );
      this.lmap.setView( l, parseInt( this.zoomLevel ) );
    }
  },
  getClass: function( d ) {
    return d === 9 ? 'cat9' : d === 8 ? 'cat8' : d === 1.19 ? 'cat7' : d === 1.06 ? 'cat6' : d === 0.94 ? 'cat5' : d === 0.84 ? 'cat4' : d === 0.75 ? 'cat3' : d === 0.67 ? 'cat2' : 'cat1';
  }
};