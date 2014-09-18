<? php
session_start();

$pcd = $_POST[ 'pcd' ];
$x = $_POST[ 'x' ];
$y = $_POST[ 'y' ];

$_SESSION[ "pcd" ] = $pcd;
$_SESSION[ "x" ] = $x;
$_SESSION[ "y" ] = $y;


?>