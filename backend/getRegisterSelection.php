<? php

function getSelection() {
  if ( isset( $_SESSION[ 'ward' ] ) && isset( $_SESSION[ 'county' ] ) && isset( $_SESSION[ 'countyId' ] ) && isset( $_SESSION[ 'wardId' ] ) && isset( $_SESSION[ 'center' ] ) && isset( $_SESSION[ 'zoom' ] ) && isset( $_SESSION[ 'gender' ] ) ) {
    return $_SESSION[ 'ward' ].
    "___".$_SESSION[ 'county' ].
    "___".$_SESSION[ 'countyId' ].
    "___".$_SESSION[ 'wardId' ].
    "___".$_SESSION[ 'center' ].
    "___".$_SESSION[ 'zoom' ].
    "___".$_SESSION[ 'gender' ];
  } else {
    return "0";
  }
}

?>