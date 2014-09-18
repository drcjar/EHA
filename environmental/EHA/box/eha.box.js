EHA.box = {

  init: function() {

    var info = L.control( {
      position: 'topright'
    } );
    info.onAdd = function( map ) {
      var div = L.DomUtil.create( 'div' );
      L.DomEvent
        .disableClickPropagation( div )
        .addListener( div, 'click', L.DomEvent.stopPropagation )
        .addListener( div, 'click', L.DomEvent.preventDefault )
      div.id = 'wardsTooltip';
      div.innerHTML =
        "<div class='hoverBlock'></div>" +
        "<div id='wardsName'>Ward name</div>" +
        "<div id='districtName'>County name</div>" +
        "<div id='wardSlct' class='" + EHA.current + "_1'> <span id='band' > Concentration </span></div>" +
        "<div id='clear'> <a href='#'>clear selection</a></div>" +
        "<div id='postcode' >" +
        "<input type='text'  name='postcode'  maxlength='10' value='Postcode search'  />" +
        "<div id='pcdBtn'>search </div>" +
        "<div id='pcdInfo'>  </div>" +
        "</div>";
      return div;
    };

    info.addTo( EHA.map.lmap );


  },

  update: function( data ) {

    var w = document.getElementById( 'wardSlct' ),
      band = document.getElementById( 'band' );
    wardsName = document.getElementById( 'wardsName' ),
    distName = document.getElementById( 'districtName' ),
    popEl = document.getElementById( 'pop' );

    this.update = function( d ) {

      var r = d.risk;
      var cat = r >= 1.50 ? [ '9', '- Relative Risk above average ' ] :
        r >= 1.340 ? [ '8', '- Relative Risk above average ' ] :
        r >= 1.190 ? [ '7', '- Relative Risk above average ' ] :
        r >= 1.060 ? [ '6', '- Relative Risk above average ' ] :
        r >= 0.950 ? [ '5', '- Average Relative Risk ' ] :
        r >= 0.850 ? [ '4', '- Relative Risk below average ' ] :
        r >= 0.750 ? [ '3', '- Relative Risk below average' ] :
        r >= 0.670 ? [ '2', '- Relative Risk below average ' ] : [ '1', ' Relative Risk below average ' ];

      popEl.innerHTML = "Pop : " + d.pop;
      $( ".legendrr div." + cat[ 0 ] ).addClass( 'highl' );
      band.innerHTML = cat[ 1 ];
      w.className = 'wardSlct cat' + cat[ 0 ];
      wardsName.innerHTML = d.ward;
      distName.innerHTML = d.dist;

    };

    this.update.call( this, data );

  }

};