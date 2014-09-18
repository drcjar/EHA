<? php
function getName( $name ) {
  $name = ucfirst( strtolower( $name ) );
  switch ( $name ) {
    case "Lung":
      $r = "Lung cancer";
      break;
    case "Breast":
      $r = "Breast cancer";
      break;
    case "Mesothelioma":
      $r = "Mesothelioma";
      break;
    case "Leukaemia":
      $r = "Leukaemia";
      break;
    case "Prostate":
      $r = "Prostate cancer";
      break;
    case "Skin":
      $r = "Skin cancer";
      break;
    case "Bladder":
      $r = "Bladder cancer";
      break;
    case "Bladder":
      $r = "Bladder cancer";
      break;
    case "Brain":
      $r = "Brain cancer";
      break;
    case "Liver":
      $r = "Liver cancer";
      break;
    case ( strcasecmp( $name, "chd" ) == 0 ):
      $r = "Heart disease";
      break;
    case ( strcasecmp( $name, "copd" ) == 0 ):
      $r = "COPD";
      break;
    case ( strcasecmp( $name, "kidney" ) == 0 ):
      $r = "Kidney disease";
      break;
    case "Stillbirths":
      $r = "Stillbirths";
      break;
    case "Lowbirth":
      $r = "Low Birth Weight";
      break;
    case ( strcasecmp( $name, "no2" ) == 0 ):
      $r = "NO<sub>2</sub> 2001";
      break;
    case ( strcasecmp( $name, "Dbps winter" ) == 0 ):
      $r = "Dbps winter 2000";
      break;
    case ( strcasecmp( $name, "fungicides" ) == 0 ):
      $r = "Fungicides 2000";
      break;
    case ( strcasecmp( $name, "herbicides" ) == 0 ):
      $r = "Herbicides 2000";
      break;
    case "Pm10":
      $r = "PM<sub>10</sub> 2001";
      break;
    case "Kidney":
      $r = "KD mortality";
      break;
    case "Stillbirths":
      $r = "Stillbirths";
      break;
    case "Lowbirth":
      $r = "Low Birth Weight";
      break;
  }
  return $r;
} ?>