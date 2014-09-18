jQuery.fn.hoverbox_counties = function( name ) {

  $( '#countiesTooltip div' ).text( name );
  var $this = $( this );
  $this.mousemove( function( e ) {
    var xPos = e.pageX - 5,
      yPos = e.pageY - 40;
    $( '#countiesTooltip' ).css( {
      'top': yPos,
      'left': xPos,
      'display': 'block'
    } );
  } );
  $this.mouseout( function() {
    $( '.leaflet-overlay-pane svg g' ).unbind();
    $( '#countiesTooltip' ).hide()
  } );
};