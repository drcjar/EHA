( function() {

  Opentip.styles.myStyle = {
    // Make it look like the alert style. If you omit this, it will default to "standard"
    extends: "glass",
    // Tells the tooltip to be fixed and be attached to the trigger, which is the default target
    target: true,
    stem: true,
    showOn: "hover",
    hideDelay: 0.1,
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
    style: "myStyle",
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

  new Opentip( "#showhide", "This chart highlights the selected  " +
    "<p>ward and presents where its estimated </p>" +
    "<p>level of risk is in comparison to other </p>" +
    "<p> wards in the same county. </p>", {
      target: "#showhide",
      tipJoint: "top",
      style: "myStyle"
    } );


  EHA.update = function( disease ) {
    if ( isAvailable( disease ) ) {
      $( ".dropdown dt a span" ).html( disease );
      $( ".dropdown dd ul" ).hide();
      $( "#" + EHA.current.gender ).prop( "checked", true )
      updateTabs();
      update();
    }
  };

  $( '#showhide a' ).click( function( e ) {
    if ( EHA.map.geojson.nrequests < 1 ) {
      e.preventDefault();
      return;
    };

    var h = ( EHA.map.chartIsOpen ) ? "close" : "open";
    EHA.graph.toggleChart( h );
    e.preventDefault();
  } );

  $( '.glossary ul li a' ).click( function( e ) {
    $( '.glossary ul li div' ).hide();
    $( this ).nextAll( "div:first" ).toggle();
    e.preventDefault();
  } );

  $( '#clear' ).click( function() {
    EHA.map.geojson.disableSelection( 1 );
  } );

  $( "#menu .dropdown dt a" ).click( function( e ) {
    EHA.map.geojson.setSession();
    $( ".dropdown dd ul" ).toggle();
    e.preventDefault();
  } );


  $( "#menu .dropdown dd" ).mouseleave( function() {
    $( ".dropdown dd ul" ).hide();
  } );


  $( ".gender input[name=sex]" ).click( function() {
    if ( isAvailable() ) {
      setGender();
      update();
    } else {
      return false;
    }

  } );

  //SEARCH BUTTON CLICK EVENT		
  $( "#pcdBtn" ).click( function() {
    getPostcode();
  } );

  //TEXT INPUT (POSTCODE)  
  $( "input[name=postcode]" ).keydown( function( e ) {
    if ( e.which == "13" ) {
      e.preventDefault();
      getPostcode();
    }
  } );

  $( "input[name=postcode]" )
    .on( 'focus', function() {
      if ( this.value == 'Postcode search' ) {
        this.value = '';
      }
      $( '#pcdBtn' ).show();
      $( "#pcdInfo" ).hide();
    } )
    .on( 'blur', function() {
      if ( this.value == '' ) {
        this.value = 'Postcode search';
      }
    } );

  $( ".simpleTabsNavigation li a" ).click( function( e ) {
    var cl = $( this ).attr( "id" );
    $( ".simpleTabsContent,.simpleTabsNavigation li a" ).removeClass( "current" );
    $( "div.simpleTabsContent." + cl + ",#" + cl ).addClass( "current" );
    e.preventDefault();
  } );

  var getGender = function() {
    return $( ".gender input[name=sex]:checked" ).val();
  };

  var setGender = function( g ) {
    var gender = g || getGender();
    EHA.current.gender = gender;
  };

  var setDisease = function( d ) {
    EHA.current.disease = d;
  };

  var getDisease = function( d ) {
    return EHA.current.disease;
  };

  var getPostcode = function() {
    EHA.postcode.search();
  };

  var setRadioBtn = function( g ) {
    $( 'input:radio#' + g ).attr( 'checked', 'checked' );
  };

  var resizechart = function() {
    $( "#graph,#showhide" ).width( $( this ).width() );
  };

  var isAvailable = function( disease ) {

    var currentD = getDisease();

    if ( disease === currentD ) {
      //return false;
    }

    var gender = getGender(),
      disease = disease || currentD;

    $( ".showInfo .gender_na" ).hide();
    $( ".showInfo .rate,.gender_avlb,.rateCaption" ).show();
    setDisease( disease );

    return true;
  };


  var update = function() {
    var gender = EHA.current.gender,
      disease = EHA.current.disease;

    getTiles();

    if ( ( gender === 'male' && disease === 'Breast cancer' ) || ( disease === "Prostate cancer" && gender === "female" ) ) {
      $( ".showInfo .gender_na" ).show();
      $( ".showInfo .rate,.gender_avlb,.rateCaption" ).hide();
      EHA.map.geojson.removeWards();
      EHA.graph.toggleChart( "close" );
      return;
    }

    updateRate();
    EHA.graph.getRiskFactor();
    EHA.map.geojson.getGeojson();
    document.getElementById( "genderIcon" ).className = "icon" + EHA.current.gender;
  };

  var getTiles = function() {
    EHA.map.diseaseTiles.removeTile();
    EHA.map.diseaseTiles.draw();
  }

  var updateRate = function() {
    $( ".rate" ).children().hide();
    $( ".rate ." + getGender() + ",.rate a,.showInfo .rateCaption" ).show();
  };

  var updateTabs = function() {
    var id = getDisease().replace( /\s+/g, '' );
    $( ".showInfo, ." + id )
      .toggleClass( "showInfo" )
      .toggleClass( "diseases" );
    $( ".simpleTabsNavigation li:first-child a" ).text( getDisease() );
  };

  updateRate();

}() );