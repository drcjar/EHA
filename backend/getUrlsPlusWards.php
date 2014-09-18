<? php
error_reporting( E_ERROR | E_PARSE );
require( "backend/getRegisterSelection.php" );

$selection = getSelection();

if ( $selection != "0" ) {
  echo << < EOF < script >
    EHA.map.zoomLevel = 9;
  EHA.wardSelected = true; < /script>
EOF;
} echo <<<EOF
		<script>
			EHA.map.init(true);
			EHA.box.init();
			EHA.graph.init();	
		</script >
    < script type = 'text/javascript'
  src = 'js/EHA/events/eha.events.js' > < /script>
		<script type="text/javascript
  " src='js/EHA/events/eha.urls.js'></script>
EOF;

?>
			<script>
				var disease =  " <? php echo $disease; ?> ",
					gender = " <? php echo $_SESSION[ 'gender' ]; ?> " || "
  female ",
					updateMe = function(){EHA.update(disease)};
				
				EHA.current.gender = gender;
				disease = EHA.urls.get(disease);
								
			</script>	
<?php 
			/* Zoom to selected wards on disease change */
			if($selection!="
  0 "){ 
			  $arr = split('___', $selection);
			  $ward = $arr[0];
			  $cnty = $arr[1];
			  $cntyId = $arr[2];
			  $wardId = $arr[3];
			  $center = $arr[4];
			  $zoom = $arr[5];

?>
			  <script>
				    var ward = " <? php echo $ward; ?> ",
					    cnty = " <? php echo $cnty; ?> ",
					    cntyId = " <? php echo $cntyId; ?> ",
					    wardId = " <? php echo $wardId; ?> ",
						center = " <? php echo $center; ?> ",
						zoom = " <? php echo $zoom; ?> ";
					
					EHA.map.zoomLevel = parseInt(zoom);
					EHA.map.currentBounds = center;
					EHA.map.geojson.w_name = ward;
					EHA.map.geojson.d_name = cnty
					EHA.map.geojson.setCnty(cntyId,cnty);
					EHA.map.geojson.setWardId(ward);
									
			</script>
<?php
		   echo <<<EOF
		      <script> updateMe = function(){EHA.update(disease)};</script>
EOF;
		   } 
		echo <<<EOF
		      <script> EHA.map.geojson.startMe(updateMe);</script>
EOF;
		
?>	