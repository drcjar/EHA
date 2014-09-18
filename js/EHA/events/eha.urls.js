EHA.urls = {
  get: function( d ) {
    var r = "";
    d = this.capitaliseFirstLetter( d );
    switch ( d ) {
      case "Lung":
        r = "Lung cancer";
        break;
      case "Breast":
        r = "Breast cancer";
        break;
      case "Mesothelioma":
        r = "Mesothelioma";
        break;
      case "Leukaemia":
        r = "Leukaemia";
        break;
      case "Prostate":
        r = "Prostate cancer";
        break;
      case "Skin":
        r = "Skin cancer";
        break;
      case "Bladder":
        r = "Bladder cancer";
        break;
      case "Bladder":
        r = "Bladder cancer";
        break;
      case "Brain":
        r = "Brain cancer";
        break;
      case "Liver":
        r = "Liver cancer";
        break;
      case "Stillbirths":
        r = "Stillbirths";
        break;
      case "Lowbirth":
        r = "Low Birth Weight";
        break;
    }
    if ( d.toUpperCase() === "CHD" ) {
      r = "Heart disease";
    } else if ( d.toUpperCase() === "COPD" ) {
      r = "COPD";
    } else if ( d.toUpperCase() === "KIDNEY" ) {
      r = "Kidney disease";
    };
    return r;
  },
  capitaliseFirstLetter: function( string ) {
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
  }
};