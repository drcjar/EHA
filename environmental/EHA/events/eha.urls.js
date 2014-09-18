EHA.urls = {
  get: function( d ) {
    if ( d.match( /no2/i ) ) {
      return "NO22001";
    } else if ( d.match( /pm10/i ) ) {
      return "PM102001";
    } else if ( d.match( /sunshine/i ) ) {
      return "Sunshine";
    } else if ( d.match( /herbicides/i ) ) {
      return "Herbicides 2000";
    } else if ( d.match( /dbps winter/i ) ) {
      return "DBPs winter 2000";
    } else if ( d.match( /dbps summer/i ) ) {
      return "DBPs summer 2000";
    } else if ( d.match( /fungicides/i ) ) {
      return "Fungicides 2000";
    }
    return "NO22001";
  }
};