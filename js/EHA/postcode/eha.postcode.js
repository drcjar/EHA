EHA.postcode = {

  current: false,

  search: function() {
    var pcd = ( $( "#postcode input" ).attr( "value" ) ).trim();
    if ( this.check( pcd ) ) {
      this.getCentroid( pcd );
      $( "#pcdInfo" ).text( "" );
    } else {
      $( "#pcdBtn" ).hide();
      $( "#pcdInfo" ).show().text( "Invalid postcode." );
    }
  },

  check: function( pcd ) {
    var patt = /^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {0,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)$/i;
    return patt.test( pcd );
  },

  //GET CENTROID COORDS OF POSTCODE FROM DB
  getCentroid: function( pcd ) {

    pcd = pcd.replace( /\s+/g, '' );

    var myPcd = this.capitalize( pcd ),
      options = $.extend( options || {}, {
        dataType: "text",
        cache: false,
        type: 'POST',
        data: "pcd=" + pcd,
        url: "backend/pcdSearch.php",
        success: function( data, textStatus, jqXHR ) {
          if ( data === " " ) {
            $( "#pcdBtn" ).hide();
            $( "#pcdInfo" ).show().text( "Postcode not found." );
          };
          EHA.postcode.showPcd( data );
        },
        error: function( xhr, ajaxOptions, thrownError ) {
          alert( xhr + "xc" + ajaxOptions )
        }
      } );

    jQuery.ajax( options );
  },

  showPcd: function( data, marker ) {

    var d = data.split( "," ),
      ward = d[ 2 ],
      cntId = d[ 3 ],
      cntyName = d[ 4 ].replace( /\s+/g, '' ), //County Name
      wardName = d[ 5 ].replace( /^\s\s*/, '' ).replace( /\s\s*$/, '' ),
      distName = d[ 6 ];

    this.x = d[ 0 ];
    this.y = d[ 1 ];

    EHA.map.currentBounds = null;
    EHA.map.geojson.setCnty( cntId, distName );
    EHA.map.geojson.setWardId( wardName );

    $( ".legendrr div.highl" ).removeClass( 'highl' );

    EHA.map.geojson.getGeojson( this.marker ); //pass reference to old layer

  },

  marker: function( x, y ) {
    var x = x || EHA.postcode.x,
      y = y || EHA.postcode.y;

    EHA.postcode.currentmarker = EHA.map.addMarker( x, y );

    if ( EHA.postcode.current != false ) {
      EHA.postcode.current.clearLayers();
    }

    EHA.postcode.current = new L.layerGroup( [ EHA.postcode.currentmarker ] );
    EHA.map.addLayer( EHA.postcode.current );

  },

  //CAPITALIZE POSTCODE
  capitalize: function( str ) {
    var r = /\w/g;
    return str.replace( r, function( c ) {
      return c.toUpperCase();
    } );
  }

}