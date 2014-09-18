<? php

function getSelection() {

  if ( isset( $_SESSION[ 'pcd' ] ) && isset( $_SESSION[ 'x' ] ) && isset( $_SESSION[ 'y' ] ) ) {
    return $_SESSION[ 'pcd' ].
    "___".$_SESSION[ 'x' ].
    "___".$_SESSION[ 'y' ];
  } else {
    return "0";
  }
}

?>