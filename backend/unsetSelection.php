<? php
session_start();

unset( $_SESSION[ 'pcd' ] );
session_destroy();


?>