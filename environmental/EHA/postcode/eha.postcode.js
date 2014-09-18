EHA.postcode = {

  current: false,

  init: function() {
    this.w = document.getElementById( 'wardsName' );
    this.cEl = document.getElementById( 'districtName' );
    this.wCol = document.getElementById( 'wardSlct' );
  },

  search: function( pcd ) {
    var pcd = pcd || ( $( "#postcode input" ).attr( "value" ) ).trim();
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
        data: "pcd=" + pcd + "&env=" + EHA.current.toLowerCase().replace( /\s+/g, '' ),
        url: "backend/pcdSearch_env.php",
        success: function( data, textStatus, jqXHR ) {
          EHA.postcode.showPcd( data, EHA.postcode.marker );
          EHA.currentPcd = pcd;
        },
        error: function( xhr, ajaxOptions, thrownError ) {
          alert( xhr + "xc" + ajaxOptions )
        },
        beforeSend: function() {
          console.log( "loading" );
        }
      } );

    jQuery.ajax( options );
  },

  showPcd: function( data, marker ) {

    if ( data === " " ) {
      this.highlightLegend( 0 );
      document.getElementById( 'wardSlct' ).className = EHA.current.replace( /\s+/g, '' ) + '_1';
      document.getElementById( 'band' ).innerHTML = "No Data";
      return;
    }

    var current = EHA.current.replace( /\s+/g, '' ),
      d = data.split( "," ),
      x = d[ 0 ],
      y = d[ 1 ],
      ward = d[ 2 ],
      cntyName = d[ 3 ],
      wardName = d[ 4 ].replace( /\s+/g, '' ), //County Name
      value = d[ 5 ];

    f = EHA.map.getFunct( current );
    band = f.call( null, value );

    this.w.innerHTML = wardName;
    this.cEl.innerHTML = cntyName;

    EHA.map.geojson.w_name = wardName;
    EHA.map.geojson.d_name = cntyName;
    EHA.map.geojson.slctdId = ward;

    if ( current === "NO22001" || current === "PM102001" ) {
      value = value + " μg/m<sup>3</sup>";
    } else if ( current === "Sunshine" ) {
      value = EHA.diseases[ current ].grades[ band - 1 ] + " hours";
    } else if ( current === "Herbicides2000" || current === "Fungicides2000" ) {
      value = value + " kg";
      band++;
    } else if ( current === "DBPssummer2000" || current === "DBPswinter2000" ) {
      value = value + " μg/l";
      band++;
    }

    document.getElementById( 'band' ).innerHTML = value;
    this.highlightLegend( band );
    $( this.wCol ).removeClass().addClass( current + "_" + band );

    if ( typeof marker == 'function' ) {
      EHA.pcdX = x;
      EHA.pcdY = y;
      marker( x, y );
    }
  },

  highlightLegend: function( band ) {
    $( ".legendrr div.highl" ).removeClass( 'highl' );
    $( ".legendrr div." + band ).addClass( 'highl' );
  },

  marker: function( x, y ) {
    this.markerPcd = EHA.map.addMarker( x, y );

    if ( EHA.postcode.current != false ) {
      EHA.postcode.current.clearLayers();
    }

    EHA.postcode.current = new L.layerGroup( [ this.markerPcd ] );
    EHA.map.addLayer( EHA.postcode.current );

  },

  removeMarker: function() {
    if ( typeof EHA.postcode.current === 'object' ) {
      EHA.map.lmap.removeLayer( EHA.postcode.current );
    }
  },

  //CAPITALIZE POSTCODE
  capitalize: function( str ) {
    var r = /\w/g;
    return str.replace( r, function( c ) {
      return c.toUpperCase();
    } );
  }

}