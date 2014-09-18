<? php
error_reporting( E_ERROR | E_PARSE );
require( "backend/getRegisterSelectionEnv.php" );

$selection = getSelection();
$setView = 1;

if ( $selection != "0" ) {
  $setView = 0;
  echo << < EOF < script >
    EHA.map.zoomLevel = 9;
  EHA.wardSelected = true; < /script>
EOF;
} echo <<<EOF
		<script>
			EHA.map.init( $setView);
			EHA.box.init();	
			EHA.postcode.init();
		</script >
    < script type = 'text/javascript'
  src = 'environmental/EHA/events/eha.events.js' > < /script>
		<script type="text/javascript
  " src='environmental/EHA/events/eha.urls.js'></script>
EOF;

?>
			<script>
				var disease =  " <? php echo $disease; ?> ",
					updateMe = function(){EHA.update(disease)};
				
				disease = EHA.urls.get(disease);
				EHA.current = disease;				
			</script>	
<?php 
			/* Zoom to selected wards on disease change */
			if($selection!="
  0 "){ 
			  $arr = split('___', $selection);
			  $pcd = $arr[0];
?>
			  <script>
				    var pcd = " <? php echo $pcd; ?> ";
					EHA.currentPcd = pcd;							
			  </script>
<?php
		   echo <<<EOF
		      <script> updateMe = function(){EHA.update(disease);EHA.postcode.search(pcd);$("#
  clear ").show();};   </script>
EOF;
		   } 
echo <<<EOF
		<script> EHA.map.geojson.startMe(updateMe);</script>
EOF;
		
?>	