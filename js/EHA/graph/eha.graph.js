EHA.graph = {

  ewAvrg: {
    label: "Average",
    data: [
            [ 1, 1 ],
            [ 10, 1 ]
        ],
    lines: {
      show: true,
      lineWidth: 3,
      fillColor: "#EEC591"
    },
    shadowSize: 0
  },

  init: function() {
    this.getRiskFactor();
  },

  getCurrent: function() {
    return EHA.current.disease + " " + EHA.current.gender;
  },

  draw: function( d, highlighter /*,extent*/ ) {

    if ( d !== null && typeof highlighter === 'undefined' ) {
      this.gData = {
        rr: [],
        lower: [],
        upper: [],
        maxX: 0,
        minX: 0,
        maxRisk: -1,
        minRisk: 10
      };

      var rk = EHA.diseases[ this.getCurrent() ].field,
        gid = 0,
        countWard = d.features.length;

      for ( i = countWard; i--; ) {
        var f = d.features[ i ].properties[ rk ].split( "," ),
          gid = parseInt( f[ 3 ] ),
          risk = f[ 0 ];
        cl = f[ 1 ]
        cu = f[ 2 ];

        this.gData.maxRisk = ( cu > this.gData.maxRisk ) ? cu : Math.round( this.gData.maxRisk * 100 ) / 100;
        this.gData.minRisk = ( cl < this.gData.minRisk ) ? cl : Math.round( this.gData.minRisk * 100 ) / 100;
        this.gData.maxX = ( gid > this.gData.maxX ) ? gid : this.gData.maxX;
        this.gData.minX = ( gid < this.gData.minX ) ? gid : this.gData.minX;
        this.gData.lower[ i ] = [ gid, cl ];
        this.gData.upper[ i ] = [ gid, cu ];
        this.gData.rr[ i ] = [ gid, risk ];

      }
    }

    var check = typeof highlighter !== 'undefined',
      hBar = ( check ) ? {
        data: [ highlighter[ 0 ], highlighter[ 1 ] ],
        lines: {
          show: true,
          lineWidth: 4
        }
      } : [],
      cuPoint = ( check ) ? {
        data: [ highlighter[ 2 ] ],
        points: {
          show: true,
          fill: true,
          radius: 4,
          fillColor: "#4169E1"
        }
      } : [],
      clPoint = ( check ) ? {
        data: [ highlighter[ 1 ] ],
        points: {
          show: true,
          fill: true,
          radius: 1,
          fillColor: "#4169E1"
        }
      } : [],
      rrPoint = ( check ) ? {
        data: [ highlighter[ 0 ] ],
        points: {
          show: true,
          fill: true,
          radius: 1,
          fillColor: "#4169E1"
        }
      } : [];

    var minX = this.gData.minX - 2,
      maxX = this.gData.maxX + 1,
      minY = this.gData.minRisk - 0.30,
      maxY = this.gData.maxRisk + 0.30;

    this.plot = $.plot( $( "#graph" ), [ {
        data: [
                    [ this.gData.minX, 1 ],
                    [ this.gData.maxX, 1 ]
                ],
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
          lineWidth: 0.5,
          fillcolor: "#7D9EC0"
        },
        label: "95% uncertainty intervals",
        hoverable: false,
        clickable: false
            }, {
        data: this.gData.upper,
        lines: {
          show: true,
          lineWidth: 0.5,
          fillcolor: "#7D9EC0"
        },
        hoverable: false,
        clickable: false
            },
            hBar,
            cuPoint,
            clPoint,
            rrPoint

  ], {
      grid: {
        hoverable: true,
        clickable: true,
        borderColor: "white",
        backgroundColor: "white",
        borderWidth: 1,
        labelMargin: 0
      },
      yaxis: {
        min: minY,
        max: maxY
      },
      xaxis: {
        autoscaleMargin: 0.02,
        min: minX,
        max: maxX
      },
      colors: [ "#FFD39B", "#4169E1", "#7D9EC0", "#7D9EC0", "#7CCD7C", "#4169E1", "#FFC125", "#FFC125" ],
      legend: {
        position: "nw",
        backgroundOpacity: 0.5,
        margin: [ 10, 0 ]
      }
    } );

    $( ".xAxis div" ).css( "color", "white" ); //hide tick labels on X axis	
    $( "#graph .flot-text" ).append( "<div id='xlabelRR'></div>" );

    if ( check ) {
      var rr = ( Math.ceil( parseFloat( highlighter[ 2 ][ 1 ] ) * 100 ) / 100 ).toFixed( 2 ),
        cl = parseFloat( highlighter[ 0 ][ 1 ] ).toFixed( 2 ),
        cu = parseFloat( highlighter[ 1 ][ 1 ] ).toFixed( 2 );

      $( "#rr" ).text( "RR: " + rr );
      $( "#ci" ).text( "(" + cl + "-" + cu + ")" );
    }
  },

  toggleChart: function( t ) {
    var h, d, arrow;
    if ( t === "open" ) {
      h = "60%";
      d = true;
      arrow = "down_arrow.png";
      $( "#figures" ).fadeIn( 700 );
    } else {
      h = "94%";
      d = false;
      arrow = "up_arrow.png";
      $( "#figures" ).hide();
    }
    $( '#map' ).animate( {
      height: h
    } );

    $( '.shown img' ).attr( "src", "images/" + arrow );

    EHA.map.chartIsOpen = d;
  },

  highlight: function( gid, cl, cu, rr ) {
    this.draw( null, [
            [ gid, cl ],
            [ gid, cu ],
            [ gid, rr ]
        ] );
  },

  getRiskFactor: function() {

    var colors = [ "#FFDEAD", "#FFC125", "#00CD66", "#CD9B9B", "#388E8E", "#EECFA1", "#8DB6CD" ],
      slctDisease = EHA.diseases[ this.getCurrent() ].riskFactors,
      title = EHA.diseases[ this.getCurrent() ].riskFactorTitle,
      chartEl = $( ".riskFactorsChart" ),
      chartLegend = $( ".riskFactorsChartLegend" ),
      bars = [],
      count = 0,
      legend = "";

    if ( typeof slctDisease === 'undefined' ) {
      $( chartLegend ).empty();
      $( chartEl ).empty();
      $( ".riskFactor" ).html( "" );
      $( chartEl ).hide();
      $( "p.reference,#percentageLbl" ).hide();
      return;
    }

    $( "p.reference,#percentageLbl" ).show();
    $( chartEl ).show();

    var p = [];
    for ( var prop in slctDisease ) {
      p.push( parseFloat( slctDisease[ prop ][ 0 ][ 1 ] ) );
      bars[ count++ ] = {
        data: slctDisease[ prop ],
        bars: {
          show: true,
          lineWidth: 0,
          fillColor: colors[ count ]
        }
      };
      legend += "<div><i style='background-color:" + colors[ count ] + "'></i>" + prop + "</div>";
    }

    $( chartLegend ).html( legend );
    $( ".riskFactor" ).html( title );

    $.plot( chartEl, bars, {
      grid: {
        labelMargin: 0,
        borderWidth: 0
      },
      yaxis: {
        min: 0,
        max: Math.max.apply( Math, p )
      },
      xaxis: {
        min: 0.6,
        max: p.length + 2,
        ticks: []
      }
    } );
  }
}