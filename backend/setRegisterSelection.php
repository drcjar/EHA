<? php
session_start();

$ward = $_POST[ 'wardname' ];
$county = $_POST[ 'countyname' ];
$countyId = $_POST[ 'countyid' ];
$wardId = $_POST[ 'wardId' ];
$center = $_POST[ 'center' ];
$zoom = $_POST[ 'zoom' ];
$gender = $_POST[ 'gender' ];

$_SESSION[ "ward" ] = $ward;
$_SESSION[ "county" ] = $county;
$_SESSION[ "countyId" ] = $countyId;
$_SESSION[ "wardId" ] = $wardId;
$_SESSION[ "center" ] = $center;
$_SESSION[ "zoom" ] = $zoom;
$_SESSION[ "gender" ] = $gender;

?>