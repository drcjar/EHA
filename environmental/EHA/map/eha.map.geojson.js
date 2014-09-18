( function() {

  var that = EHA.map.geojson = {

    selection: false,
    slctdId: null,
    nrequests: 0,
    currentBounds: null,

    jsonobj: {
      'name': 'counties', // Starting by
      'level': 'counties', // Default 
      'obj': null, // Counties layer
    },

    styles: {
      counties: {
        style: {
          weight: 0.5,
          color: '#575757',
          fillOpacity: 0,
          fillColor: '#FFFFFF'
        },
        hover: {
          weight: 8,
          color: '#7CCD7C',
          fillOpacity: 0,
        }
      },
      wards: {
        style: {
          weight: 1,
          color: '#575757',
          fillOpacity: 0,
          fillColor: '#7CCD7C'
        },
        hover: {
          weight: 5,
          color: '#7CCD7C',
          fillOpacity: 0.3,
        }
      }
    },

    cnty: {
      name: "",
      gid: ""
    },

    init: function( sett, callback ) {

      var jsonSett = sett || this.jsonobj,
        stle = this.styles[ jsonSett.level ].style,
        map = EHA.map.lmap,
        name = jsonSett.name;

      if ( typeof sett == 'object' ) {
        this.jsonobj = sett;
      }


      var lyrOpts = {
          style: stle,
          onEachFeature: this.evHandl
        },

        jsonlyr = L.geoJson( jsonSett.obj, lyrOpts );

      jsonlyr.addTo( map );

      $( "<div id='" + name + "'></div>" ).prependTo( $( "#myLayers" ) );

      if ( typeof callback == 'function' ) {
        callback( this.jsonlyr ); //pass reference to old layer
      }

      this.jsonlyr = jsonlyr;

      if ( this.jsonobj.level === 'counties' ) {
        return;
      }

      if ( this.slctdId !== null ) {
        this.slctWardByName( this.slctdId, this.cnty.name );
        EHA.map.setBounds();
      } else {
        map.fitBounds( jsonlyr.getBounds() );
      }
    },

    evHandl: function( feature, layer ) {

      var level = getLevel(),
        style = getStyles()[ level ],
        yrName = that.jsonobj.name,
        rr, cl, cu, gid, pop, wname, dname;

      hover = function( e ) {
        layer.setStyle( style.hover );

        if ( !L.Browser.ie && !L.Browser.opera && $( "#myLayers" ).children().size() == 1 ) {
          layer.bringToFront();
        }

        $( ".leaflet-overlay-pane svg g" ).hoverbox_counties( layer.feature.properties.county );

      },

      out = function( e ) {
        if ( that.slctdId === layer.feature.properties.w ) {
          return;
        }
        that.clear( layer, style );
      },

      clickme = function( e ) {
        $( ".hoverCaption" ).html( "Ward level data not <p>available. Please enter a</p> postcode." )
      };

      return layer.on( {
        mouseover: hover,
        mouseout: out,
        click: clickme
      } );
    },

    slctWardByName: function( name, dist_cnt ) {
      $( ".legendrr div.highl" ).removeClass( 'highl' );
      var st = this.styles.wards;
      for ( each in this.jsonlyr._layers ) {
        var n = this.jsonlyr._layers[ each ].feature.properties.w,
          d = this.jsonlyr._layers[ each ].feature.properties.d;
        if ( n == name && ( d == dist_cnt || this.cnty.name == dist_cnt ) ) {
          this.jsonlyr._layers[ each ].setStyle( st.hover )
          that.update( this.jsonlyr._layers[ each ] );
          this.enableSelection( name );
        } else {
          this.jsonlyr._layers[ each ].setStyle( st.style )
        }
      }
      that.w_name = name;
      that.d_name = dist_cnt;
    },

    clear: function( lyr, style ) {
      var s = style || getStyles()[ getLevel() ],
        l = lyr || this.jsonlyr;
      l.setStyle( s.style );

    },

    enableSelection: function( name ) {
      that.slctdId = name;
      that.selection = true;
      $( '#clear' ).show();
    },

    disableSelection: function( flag ) {
      that.selection = false;
      EHA.currentPcd = false;
      EHA.postcode.removeMarker();
      $( '#clear' ).hide();
      $( '.hoverBlock' ).removeClass( 'wardsClicked' );
      if ( flag ) {
        clearSessionSelection();
      }
    },

    update: function( layer ) {

      var prop = layer.feature.properties,
        data = prop[ getField() ].split( "," );
      rr = data[ 0 ],
      cl = data[ 1 ],
      cu = data[ 2 ],
      gid = data[ 3 ],
      pop = prop[ "pop" ],
      wname = prop[ "w" ],
      dname = prop[ "d" ];

      EHA.graph.highlight( gid, cl, cu, rr );
      EHA.box.update( {
        risk: rr,
        pop: pop,
        ward: wname,
        dist: dname
      } );
    },

    getGeojson: function() {
      var gender = EHA.current.gender,
        disease = EHA.current.disease;
      if ( that.cnty.name != "" ) {
        if ( ( gender === 'male' && disease === 'Breast cancer' ) || ( disease === "Prostate cancer" && gender === "female" ) ) {
          return;
        }
        loadJS( gender.charAt( 0 ) + "/" + getField() + "/" + that.cnty.gid + ".json", that.cnty, 'wards' );
        if ( this.nrequests++ === 0 ) {
          EHA.graph.toggleChart( "open" );
        }
      }
    },

    setCnty: function( id, name ) {
      that.cnty.gid = id;
      that.cnty.name = name;
    },

    setWardId: function( id ) {
      that.slctdId = id;
    },

    startMe: function( flag ) {
      loadJS( '../counties/counties_2.js', 'counties', 'counties', flag );
    },


    removeWards: function() {
      if ( $( "#myLayers" ).children().size() > 1 ) {
        removeLyr( that.jsonlyr );
      }
    },

    setSession: function() {
      setSessionSelection();
    }
  }; //end of EHA.map.geojson

  var getLevel = function() {
    return that.jsonobj.level;
  }

  var getCurrent = function() {
    return EHA.current.disease + " " + EHA.current.gender;
  }

  var getField = function() {
    return EHA.diseases[ getCurrent() ].field;
  }

  var getStyles = function() {
    return that.styles;
  }

  var clearSessionSelection = function( ward, cnty ) {
    var options = {
      url: "backend/unsetSelection.php",
      error: function( xhr, ajaxOptions, thrownError ) {
        alert( "An Error occured" + xhr.status );
      },
      success: function( data, textStatus, jqXHR ) {
        console.log( data );
      }
    };
    jQuery.ajax( options );
  }

  var setSessionSelection = function() {

    if ( !EHA.currentPcd ) {
      return;
    };

    var options = {
      url: "backend/setRegisterSelectionEnv.php",
      data: "pcd=" + EHA.currentPcd + "&x=" + EHA.pcdX + "&y=" + EHA.pcdY,
      type: "POST",
      error: function( xhr, ajaxOptions, thrownError ) {
        alert( "An Error occured" + xhr.status );
      }
    };

    jQuery.ajax( options );
  };

  var loadJS = function( url, nm, lvl, flag ) {
    var options = $.extend( options || {}, {
      dataType: "json",
      cache: true,
      url: "GEOJSONS/wards/" + url,
      success: function( data, textStatus, jqXHR ) {
        that.jsonobj = {};
        if ( lvl === 'wards' ) {
          EHA.graph.draw( data );
        }
        that.init( {
          'name': nm,
          'level': lvl,
          'obj': data
        }, callback );

        if ( flag ) {
          flag.call();
        };
      },
      error: function( xhr, ajaxOptions, thrownError ) {
        alert( "An Error occured" + xhr.status );
        console.log( xhr )
      },
      complete: function() {
        $( "#loader" ).fadeOut();
      }
    } );
    jQuery.ajax( options );
  }


  var callback = function( oldlyr ) {
    if ( $( "#myLayers" ).children().size() > 2 ) {
      removeLyr( oldlyr );
    }
  };

  var removeLyr = function( lyr ) {
    var oldWards = $( "#myLayers" ).children()[ 1 ];
    EHA.map.lmap.removeLayer( lyr );
    $( oldWards ).remove();
  }

}() );