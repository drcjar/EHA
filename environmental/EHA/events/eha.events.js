( function() {

  var chartIsOpen = false;
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
  /*
	new Opentip("#smr", "This indicates the risk of a health outcome in a ward compared to the average risk for England & Wales  ", 
				{  target: "#smr", tipJoint: "bottom",style: "myStyle" });
				
	new Opentip("#pop", "Gender specific population  in each ward. <p> This is used to calculate the relative risk </p> ", 
				{ target: "#pop", tipJoint: "left",  offset : [ 7, 0 ],style: "myStyle" });
					
	new Opentip("#wardSlct", "Indicates  category  of<p> relative risk for selected ward.</p>", 
				{ target: "#wardSlct", tipJoint: "left",  offset : [ 7, 0 ],style: "myStyle" });	

	new Opentip("#wardsName", "Selected ward.", 
				{ target: "#wardsName", tipJoint: "left",  offset : [ 7, 0 ],style: "myStyle" });

	new Opentip("#districtName", "District containing <p> the selected ward.", 
				{ target: "#districtName", tipJoint: "left",  offset : [ 7, 0 ],style: "myStyle" });
	
	new Opentip("#showhide", "This chart highlights the selected ward "+
							"<p>and presents where its level of risk</p>"+
							"<p>falls in comparison with the other </p>"+
							"<p> wards in the same region. </p>", 
				{ target: "#showhide", tipJoint: "top",style: "myStyle" });	*/


  new Opentip( "#agentselection", "Click to choose from a list of available environmental agents' maps.", {
    target: "#agentselection",
    tipJoint: "left",
    offset: [ 7, 0 ],
    style: "myStyle"
  } );

  EHA.update = function( disease ) {
    if ( isAvailable( disease ) ) {
      if ( disease === 'NO22001' ) {
        $( ".dropdown dt a span" ).html( "NO<sub>2</sub> 2001" );
      } else if ( disease === 'PM102001' ) {
        $( ".dropdown dt a span" ).html( "PM<sub>10</sub> 2001" );
      } else {
        $( ".dropdown dt a span" ).html( disease );
      }
      $( ".dropdown dd ul" ).hide();

      updateTabs();
      update();
      EHA.map.updateLegend();
    }
  };

  $( '.glossary ul li a' ).click( function( e ) {
    $( '.glossary ul li div' ).hide();
    $( this ).nextAll( "div:first" ).toggle();
    e.preventDefault();
  } );


  $( "#menu .dropdown dt a" ).click( function( e ) {
    $( ".dropdown dd ul" ).toggle();
    e.preventDefault();
    EHA.map.geojson.setSession();

  } );

  $( "#menu .dropdown dd" ).mouseleave( function() {
    $( ".dropdown dd ul" ).hide();
  } );

  $( "#menu .dropdown dd ul li a" ).click( function() {
    /*var disease = $(this).text();
		if(isAvailable(disease)){
			EHA.update(disease);
		}*/
  } );

  $( '#clear' ).click( function() {
    EHA.map.geojson.disableSelection( 1 );
  } );

  var isAvailable = function( disease ) {
    var disease = disease || getDisease();
    setDisease( disease );
    return true;
  };


  $( ".gender input[name=sex]" ).click( function() {
    if ( isAvailable() ) {
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


  var setDisease = function( d ) {
    EHA.current = d;
  };

  var getDisease = function( d ) {
    return EHA.current;
  };

  var getPostcode = function() {
    EHA.postcode.search();
  };

  var setRadioBtn = function( g ) {
    $( 'input:radio#' + g ).attr( 'checked', 'checked' );
  };

  var update = function() {
    EHA.map.diseaseTiles.removeTile();
    EHA.map.diseaseTiles.draw();
  };


  var updateTabs = function() {
    var disease = getDisease(),
      classs = disease.replace( /\s+/g, '' );

    if ( classs === 'Herbicides' || classs === 'Fungicides' ) {
      if ( $( "." + classs ).hasClass( "showInfo" ) ) {
        toggle( classs );
      }
    } else if ( classs === 'DBPssummer2000' || classs === 'DBPswinter2000' ) {
      $( ".DBPssummer2000, .DBPswinter2000" ).hide();
      $( "." + classs ).show();
      classs = 'DBPs2000';
      if ( $( "." + classs ).hasClass( "showInfo" ) ) {
        toggle( classs );
      }
    }

    disease = ( disease === "NO22001" ) ? 'NO<sub>2</sub> 2001' :
      ( disease === 'PM102001' ) ? 'PM<sub>10</sub> 2001' : disease;

    toggle( classs );
    $( ".simpleTabsNavigation li:first-child a" ).html( disease );
  };

  var toggle = function( classs ) {
    $( ".showInfo, ." + classs )
      .toggleClass( "showInfo" )
      .toggleClass( "environmental" );
  };

}() );