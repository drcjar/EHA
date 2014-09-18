( function() {

  if ( typeof EHA === 'undefined' ) {
    var EHA = {};
  }

  EHA.diseases = {
    "NO22001": {
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/327/{z}/{x}/{y}',
      'min': [],
      'max': [],
      'title': "NO<sub>2</sub> <span>μg/m<sup>3</sup></span>",
      'grades': [ "5.00 - 16.00", "17.00 - 21.00", "22.00 - 26.00", "27.00 - 33.00", "34.00 - 40.00", "> 40.00" ]
    },
    "PM102001": {
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/334/{z}/{x}/{y}',
      'min': [],
      'max': [],
      'title': "PM<sub>10</sub> <span>μg/m<sup>3</sup></span>",
      'grades': [ "7.00 - 13.30", "13.31 - 15.96", "15.97 - 17.08", "17.09 - 19.74", "19.75 - 26.05", ">= 26.06" ]
    },
    "Sunshine": {
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/331/{z}/{x}/{y}',
      'min': [],
      'max': [],
      'title': "Daily Duration <span>(hours)</span>",
      'grades': [ "2.92 - 3.45", "3.46 - 3.74", "3.75 - 3.89", "3.90 - 4.04", "4.05 - 4.33", "4.34 - 4.86" ]
    },
    "Herbicides2000": {
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/308/{z}/{x}/{y}',
      'min': [],
      'max': [],
      'title': "Use at ward level <span>(kg)</span>",
      'grades': [ "No data", "0.00 - 0.90", "0.91 - 9.01", "9.02 - 81.77", "81.78 - 734.9", "735.00 -6598.00", "6598.00 - 59232.00" ]
    },
    "Fungicides2000": {
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/307/{z}/{x}/{y}',
      'min': [],
      'max': [],
      'title': "Use at ward level <span>(kg)</span>",
      'grades': [ "No data", "0.00 - 0.98", "0.99 - 9.82", "9.83 - 89.09", "89.10 - 800.77", "800.78 - 7189.30", "7189.40 - 64539.00" ]
    },
    "DBPswinter2000": {
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/332/{z}/{x}/{y}',
      'min': [],
      'max': [],
      'title': "Concentration <span>(μg/l) January - March</span>	",
      'grades': [ "No data", "0.00 - 15.00", "15.01 - 30.00", "30.01 - 40.00", "40.01 - 50.00", "50.01 - 60.0", ">= 60.01" ]

    },
    "DBPssummer2000": {
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/333/{z}/{x}/{y}',
      'min': [],
      'max': [],
      'title': "Concentration <span>(μg/l) July - September</span>	",
      'grades': [ "No data", "0.00 - 15.00", "15.01 - 30.00", "30.01 - 40.00", "40.01 - 50.00", "50.01 - 60.0", ">= 60.01" ]
    }


  };

  EHA.currentPcd = "";

  EHA.current = "";

  EHA.version = "0.1";

  window.EHA = EHA;

}() );