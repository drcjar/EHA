<? php
error_reporting( E_ERROR | E_PARSE );
if ( count( $_GET ) > 1 ) {
  exit();
}
$disease = "Lung";
$isValid = preg_match( "/^Lung|Breast|Prostate|Skin|Bladder|Leukaemia|Brain|Liver|Mesothelioma|CHD|COPD|Kidney|Stillbirths|Lowbirth|NO2|PM10|Sunshine|Herbicides|Fungicides|DBPs winter|DBPs summer$/i", $_GET[ 'map' ] );

if ( isset( $_GET[ 'map' ] ) && $isValid ) {
  $disease = ucfirst( strtolower( $_GET[ 'map' ] ) );
} else {
  header( 'Location: http://www.envhealthatlas.co.uk/homepage/' );
}

require( "backend/getName.php" );
$diseaseName = getName( $disease );

?>