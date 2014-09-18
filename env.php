<? php session_start();
require( "backend/validate.php" ); ?>
  < !DOCTYPE html >
  < html >
  < head >
  < title > Environmental Health Atlas
for England and Wales < /title>
	<meta charset="utf-8" / >
  < meta http - equiv = "X-UA-Compatible"
content = "IE=9" / >
  < meta name = "keywords"
content = "health , environmental , epidemiology, atlas , cancer , risk , england , wales , sahsu" >
  < meta name = "description"
content = "Collection of maps representing geographic patterns of disease and environmental exposure." >
  < meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >

< base href = "http://www.envhealthatlas.co.uk/eha/" / >

<!--CSS Stylesheets-->
< link rel = "stylesheet"
href = "css/leaflet/leaflet.css" / >
  < link rel = "stylesheet"
href = "css/map_ha_env.css" / >
  < link rel = "stylesheet"
href = "css/openTips.css" / >

<!-- Libraries -->	
< script type = "text/javascript"
src = "js/libs/jquery1.7.1.js" > < /script>
	<script type="text/javascript
" src="
js / detect.js "></script>
	<script type="
text / javascript " src="
js / libs / openTips.js "></script>
	<script>L_PREFER_CANVAS = false;</script>
	<script type="
text / javascript " src="
js / libs / leaflet / leaflet.js "></script>
	<script src="
js / libs / flot / jquery.flotnew.js "></script>
	<!--[if IE]><script language="
javascript " type="
text / javascript " src="
js / flot / excanvas.min.js "></script><![endif]--> 
	
	<!-- MY JS code -->
	<script type="
text / javascript " src="
environmental / EHA / eha.js "></script>
	<script type="
text / javascript " src="
environmental / EHA / map / eha.map.js "></script>
	<script type="
text / javascript " src="
environmental / EHA / map / eha.map.geojson.js "></script>
	<script type="
text / javascript " src="
environmental / EHA / box / eha.box.js "></script>
	<script type="
text / javascript " src="
environmental / EHA / postcode / eha.postcode.js "></script>
	<script src="
js / hover / hoverbox_counties.js " ></script>
 
</head>
<body>

	<noscript>
			
			<p>Your browser does not have JavaScript enabled!
			This platform heavily relies on Javascript, please enable it (<a href="
http: //www.enable-javascript.com/">http://www.enable-javascript.com/</a>).</p>

< /noscript>

	<div id="mainWrap">	 
		
		<div id='rightCol'>	
			<div id='navigationMenu'>
				<div class="home">
					<a href='../homepage / ' target="_blank">Home</a>
				</div>
				<div class="health">
					<a href='
Lung / '>Health conditions</a>
				</div>
			</div>	
			<div class="simpleTabs">
		        <ul class="simpleTabsNavigation">
					<li><a href="#" id="firstTab" class="current">NO<sub>2</sub></a></li>
		            <li><a href="#" id="secondTab">Health Outcomes</a></li>
					<li><a href="#" id="thirdTab">Glossary</a></li>
		        </ul>
				<div class="simpleTabsContent current firstTab"  >
					<div  class="environmental NO22001">
						<div class='
rate '>	
							<h2 style="line-height:10px">Nitrogen Dioxide (NO<sub>2</sub>)</h2>	
							<p >Annual average 2001 (µg/m<sup>3</sup>)</p>
						</div>
						<ul>
							<li>
								NO<sub>2</sub> is a gaseous pollutant and exposure to outdoor NO<sub>2</sub> is mainly related to road traffic emissions.  
							</li>
							<li>
								Indoor sources of NO<sub>2</sub> exposure include gas cookers, burning of wood, and cigarette smoke.
							</li>
							<li>	
								Concentration levels of NO<sub>2</sub> have declined over the last 25 years but the spatial distributions are likely to have remained relatively similar over this time period.
							</li>
							<li>	
								The NO<sub>2</sub> data used here derive from 100 m × 100 m annual average concentration maps for 2001 developed using land use regression  (LUR).
							</li>
							<li>	
								The maps show highest concentrations of NO<sub>2</sub> in cities and conurbation areas, consistent with transport sources being an important determinant of outdoor air pollution concentrations.
							</li>
							<li>
								<h2>Further information:</h2>
							</li>
							<li>	
						        There are hourly and annual air quality limit values for NO<sub>2</sub> in the UK ( <a href='
http: //www.legislation.gov.uk/uksi/2010/1001/contents/made' target="_blank">The Air Quality Standards Regulations 2010</a>):
< ul class = 'indented' >
  < li >
  The 1 - hour mean limit value is 200 µg / m < sup > 3 < /sup> , not to be exceeded more than 18 times a year.
									</li >
  < li >
  The annual mean limit value is 40 µg / m < sup > 3 < /sup>.
									</li >
  < /ul>
							</li >
  < li >
  Maps of background air pollution concentrations
for the UK at 1 km× 1 km scale,
as well as maps of roadside concentrations,
are produced each year
for the English Department
for Environment,
Food and Rural Affairs( Defra ) and the Welsh Government Assembly:
  < a href = 'http://uk-air.defra.gov.uk/data/pcm-data'
target = "_blank" > uk - air.defra.gov.uk / data / pcm - data < /a>
							</li >
  < /ul>
						<p class='disclaimer'>
						  SAHSU data. Contains Ordnance Survey data © Crown copyright and database right 2013.
						</p >
  < /div>
	                
					<div  class="environmental Sunshine">
						<div class='rate'>	
							<h2 >Sunshine duration</h2 >
  < p > Average daily sunshine in hours( 1980– 2005 ) < /p>
							<div class="rateCaption">
								This map shows average daily duration of sunshine in hours.  It was produced using measurements made at point locations from 1980–2005 on 1km x 1km grids using a technique called empirical Bayesian kriging.
							</div >
< /div>
						<ul>
							<li>
								Sunshine is a major source of ultraviolet (UV) exposure, which is of major importance to human health.
							</li >
< li >
The amount of solar radiation individuals are exposed to is influenced by the amount of radiation that reaches the earth’ s surface as well as individual behaviour. < /li>
							<li>	
								Stratospheric ozone (O<sup>3</sup > ),
also known as the ozone layer,
is particularly effective at absorbing UV radiation. < /li>
							<li>	
								Behavioural factors such as time spent outdoors, sunbathing and use of sun protection are important in determining exposure at an individual level.
							</li >
  < li >
  The map shows a clear north / south gradient in the daily sunshine duration in England and Wales. < /li>
							<li>	
								The map cannot be used to predict exposure at an individual level reliably, as this will depend on individual behaviour.
							</li >
  < li >
  < h2 > Further information: < /h2>
							</li >
  < li >
  Public Health England( PHE ) provide further information regarding UV exposure on their < a href = '	http://www.hpa.org.uk/Topics/Radiation/UnderstandingRadiation/InformationSheets/info_SunsensePoster/'
target = "_blank" > website:
< /a>
							</li >
< li >
Information on sun safety can also be found on the < a href = 'http://www.nhs.uk/Livewell/travelhealth/Pages/SunsafetyQA.aspx'
target = "_blank" > NHS website < /a>
							</li >
< /ul>
						<p class='disclaimer'>
						  UK Meteorological Office. MIDAS land surface stations data (1853–current). British Atmospheric Data Centre, 2006, 26/06 / 2013.Available from: < a href = 'http://badc.nerc.ac.uk/data/ukmo-midas'
target = "_blank" > badc.nerc.ac.uk / data / ukmo - midas < /a>  Adapted from Crown copyright data supplied by the Met Office. Contains Ordnance Survey data © Crown copyright and database right 2013.
						</p >
< /div>
					
					<div  class="environmental PM102001">
						<div class='rate'>	
							<h2 style="line-height:10px">Particulate Matter <10µg/m < sup > 3 < /sup> (PM<sub>10</sub > ) < /h2>	
							<p >Annual average 2001 (µg/m < sup > 3 < /sup>)</p >
  < div class = "rateCaption" >
  The PM10 data used here derive from 100 m× 100 m annual average concentration maps
for 2001 developed using land use regression( LUR ). < /div>
						</div >
  < ul >
  < li >
  Particulate matter can be natural or man - made and is a complex mixture of liquid and solid,
organic and inorganic substances in the atmosphere. < /li>
							<li>
								Particulate matter can be natural or man-made and is a complex mixture of liquid and solid, organic and inorganic substances in the atmosphere. 
							</li >
  < li >
  Particulate matter varies in size and PM < sub > 10 < /sub> is smaller than 10 micrometres (μm).
							</li >
  < li >
  Since smaller particulate matter can be difficult to measure,
most routine air quality has monitored PM < sub > 10 < /sub>.
							</li >
  < li >
  The route of exposure to particulate matter air pollution is inhalation and the size and shape of the particle affects whether it is filtered out by the nose or reaches the airways and lung. < /li>
							<li>	
								The maps show highest concentrations of PM<sub>10</sub > in cities and conurbation areas,
consistent with transport sources being an important determinant of outdoor air pollution concentrations. < /li>
							<li>
								<h2>Further information:</h2 >
  < /li>
							<li>	
						        There is a daily and an annual air quality limit value for PM<sub>10</sub > the UK( < a href = 'http://www.legislation.gov.uk/uksi/2010/1001/contents/made'
    target = "_blank" > The Air Quality Standards Regulations 2010 < /a>):
								<ul class='indented'>
									<li>
									   The daily mean limit value is 50 μg/m < sup > 3 < /sup>, not to be exceeded more than 35 times a year.
									</li >
    < li >
    The annual mean limit value is 40 μg / m < sup > 3 < /sup>.
									</li >
    < /ul>
							</li >
    < li >
    Maps of background air pollution concentrations
    for the UK at 1 km× 1 km scale, as well as maps of roadside concentrations, are produced each year
    for the English Department
    for Environment, Food and Rural Affairs( Defra ) and the Welsh Government Assembly: < a href = 'http://uk-air.defra.gov.uk/data/pcm-data'
    target = "_blank" > uk - air.defra.gov.uk / data / pcm - data < /a>
							</li >
    < /ul>
						<p class='disclaimer'>
						  SAHSU data. Contains Ordnance Survey data © Crown copyright and database right 2013.
						</p >
    < /div>	
					
					<div  class="environmental Herbicides2000">
						<div class='rate'>	
							<h2 >Agricultural pesticides - Herbicides </h2 >
    < p > Herbcide usage per census ward( kg ) in 2000 < /p>
							<div class="rateCaption">
								The maps shows census-ward level estimates of the usage of herbicides (kg per census ward) for England for the year 2000.  It is based on data from the <a href='http:/ / www.fera.defra.gov.uk / landUseSustainability / surveys / ' title="Pesticides Usage Survey" target="_blank">Pesticides Usage Survey (PUS)</a>.
							</div>
						</div>
						<ul>
							<li>
								Herbicides are some of the most commonly used pesticides that are used to protect plants from harmful organisms and pests and prevent contamination of foods.
							</li>
							<li>	
								Highest usage (by weight) of herbicides is seen in most of the eastern section of England, lowest usage in built-up areas of Greater London and in the North East and North West, with a more mixed pattern in other areas.
							</li>
							<li>
								Exposure to pesticides can occur through inhalation, ingestion and contact with skin or eyes. 
							</li>
							<li>	
								Highest and most frequent exposure can occur through the handling and application of pesticides however agricultural spraying may result in low levels of exposure to residents or bystanders.
							</li>
							
							<li>
							    Farmers in the UK now use half the weight (kg) of pesticides than 20 years ago and treat twice the area (hectares).
							</li>
							<li>
								<h2>Further information:</h2>
							</li>
							<li>	
						        The Chemicals Regulations Directorate (pesticides), which regulates pesticides in the UK, can be found on the <a href='
    http: //www.pesticides.gov.uk/guidance/industries/pesticides' target="_blank">Pesticides Safety Directorate website</a> 
    < /li>
							<li>		
						        The Advisory Committee on Pesticides has a section of frequently asked questions about pesticides on the <a href='http:/ / www.pesticides.gov.uk / guidance / industries / pesticides / topics / website / appendices / frequently - asked - questions / ' target="_blank">Pesticides Safety Directorate FAQs website</a> 
							</li>
						</ul>
						<p class='
    disclaimer '>
						  Countryside Survey 2000 data are used with the permission of the Centre for Ecology and Hydrology, Copyright NERC (National Environment Research Council). The production of the maps was funded by the EU 6th Framework Programme INTARESE project number 018385-2. Contains Ordnance Survey data © Crown copyright and database right 2013.
						</p>
					</div>
					
					<div  class="environmental Fungicides2000">
						<div class='
    rate '>	
							<h2 >Agricultural pesticides - Fungicides </h2>	
							<p>Fungicides usage per census ward (kg) in 2000</p>
							<div class="rateCaption">
								The maps shows census-ward level estimates of the usage of fungicides (kg per census ward) for England for the year 2000.  It is based on data from the <a href='
    http: //www.fera.defra.gov.uk/landUseSustainability/surveys/' title="Pesticides Usage Survey" target="_blank">Pesticides Usage Survey (PUS)</a>.
    < /div>
						</div >
    < ul >
    < li >
    Fungicides are some of the most commonly used pesticides that are used to protect plants from harmful organisms and pests and prevent contamination of foods. < /li>
							<li>	
								Highest usage (by weight) of fungicides is seen in most of the eastern section of England, lowest usage in built-up areas of Greater London and in the North East and North West, with a more mixed pattern in other areas.
							</li >
    < li >
    Exposure to pesticides can occur through inhalation, ingestion and contact with skin or eyes. < /li>
							<li>	
								Highest and most frequent exposure can occur through the handling and application of pesticides however agricultural spraying may result in low levels of exposure to residents or bystanders.
							</li >

    < li >
    Farmers in the UK now use half the weight( kg ) of pesticides than 20 years ago and treat twice the area( hectares ). < /li>
							<li>
								<h2>Further information:</h2 >
    < /li>
							<li>	
						        The Chemicals Regulations Directorate (pesticides), which regulates pesticides in the UK, can be found on the <a href='http:/ / www.pesticides.gov.uk / guidance / industries / pesticides ' target="_blank">Pesticides Safety Directorate website</a> 
							</li>
							<li>		
						        The Advisory Committee on Pesticides has a section of frequently asked questions about pesticides on the <a href='
    http: //www.pesticides.gov.uk/guidance/industries/pesticides/topics/website/appendices/frequently-asked-questions/' target="_blank">Pesticides Safety Directorate FAQs website</a> 
    < /li>
						</ul >
    < p class = 'disclaimer' >
    Countryside Survey 2000 data are used with the permission of the Centre
    for Ecology and Hydrology, Copyright NERC( National Environment Research Council ).The production of the maps was funded by the EU 6th Framework Programme INTARESE project number 018385 - 2.Contains Ordnance Survey data© Crown copyright and database right 2013. < /p>
					</div >

    < div class = "environmental DBPs2000" >
    < div class = 'rate' >
    < h2 > Chlorination disinfection by - products( DBPs ) in public water supplies– Trihalomethanes( THMs ) < /h2>	
							<p class="DBPswinter2000">Total THM concentrations for winter 2001</p >
    < p class = "DBPssummer2000" > Total THM concentrations
    for summer 2001 < /p>
							<div class="rateCaption">
								The maps show modelled variations in total THMs concentrations for 2001 and for two quarters of that year for each water supply zone.  The maps were created using modelling of routinely collected THM data supplied by water companies for regulatory and operational water quality monitoring purposes.
							</div >
    < /div>
						<ul>
							<li>
								Disinfection by chlorination is one of the principal barriers to microbial contamination of drinking water and swimming pools, but there may be remaining low levels of disinfection by-products (DBPs) such as trihalomethanes (THM), the only chlorination DBP for which a numerical standard is prescribed in regulations.
							</li >
    < li >
    The levels of DBPs in drinking water in England and Wales are monitored by the water companies and the results checked by Drinking Water Inspectorate( DWI ) to ensure they are below the legal standards set by the European Union, which are lower than World Health Organization guidelines. < /li>
							<li>	
								Humans can be exposed to DBPs in drinking water by ingestion by mouth, inhalation or by absorption through the skin during activities such as showering and swimming. 
							</li >
    < li >
    The maps cannot be used to reliably predict THM concentrations in individual homes or personal exposure, which will be affected by a range of factors including individual water use < /li>
							<li>
								THMs levels have fallen overall since 2001 so these maps cannot be used to predict current exposure levels.
							</li >
    < li >
    < h2 > Further information: < /h2>
							</li >
    < li >
    < a href = 'http://dwi.defra.gov.uk/'
    target = "_blank" > The Drinking Water Inspectorate( DWI ) website < /a> for information and advice on the quality of drinking water.	
							<p>	
						      The <a href='http:/ / www.cdc.gov / safewater / publications_pages / thm.pdf ' target="_blank">  U.S. Centers for Disease Control </a> has further information on their website. </a> 	
							</p>
							<p>	
						      <a href='
    http: //www.who.int/water_sanitation_health/publications/2011/dwq_guidelines/en/' target="_blank"> World Health Organization guidelines </a> for drinking-water quality, fourth edition (2011) </a> 	
    < /p>
							</li >
    < /ul>
						<p class='disclaimer'>
						  The THM data and water supply zone boundaries for the maps were supplied by the following water companies: United Utilities (formerly North West), Severn Trent, Northumbrian Water, Essex and Suffolk, Anglian Water, Bristol, Dwr Cymru Cyfyngedig, Southern, South West, Thames Water, Affinity Water and Yorkshire Water. Contains Ordnance Survey data © Crown copyright and database right 2013.
						</p >
    < /div>						
					
					
				</div >

    < div class = "simpleTabsContent secondTab" >
    < div class = "info" >
    < ul class = 'NO22001 environmental' >
    < li >
    < h2 > Health Outcomes < /h2>
						</li >
    < li >
    NO < sub > 2 < /sub> is a gas that is readily inhaled and can cause health effects, particularly in the lungs. 
						</li >
    < li >
    There is good evidence
    for health effects at exposure to high concentrations. < /li>
						<li>
							The evidence for health effects at the lower concentrations of NO<sub>2</sub > currently experienced in outdoor air is less clear. < /li>
						<li>
							The Committee on the Medical Effects of Air Pollutants (COMEAP) is a government expert committee providing advice to the government on health effects of air pollution have produced an introduction to the air pollution designed for non-specialists and the general public: 
							<a href='http:/ / www.comeap.org.uk / introduction - to - air - pollution / 100.html ' target="_blank">www.comeap.org.uk/introduction-to-air-pollution/100.html 
							</a>
						</li>
					</ul>
					<ul class='
    PM102001 environmental '>	
						<li>
							<h2>Health Outcomes</h2>
						</li>
						<li>
							Health effects are seen on both the cardiovascular and respiratory system and both short-term and long-term PM<sub>10</sub> exposure is associated with increased risk of heart and lung disease.  
						</li>
						<li>
							Long-term exposure to a 10 μg/m3 increase in PM<sub>2.5</sub> (the finer particles within PM<sub>10</sub>) is associated with a 6% increase in risk of death from all causes.
						</li>
						<li>
							There is suggestive evidence of a link between particulate air pollution and child health, especially low birth weight.
						</li>
						<li>
						The Committee on the Medical Effects of Air Pollutants (COMEAP) is a government expert committee providing advice to the government on health effects of air pollution have produced an introduction to the air pollution designed for non-specialists and the general public: 
							<a href='
    http: //www.comeap.org.uk/introduction-to-air-pollution/100.html' target="_blank">www.comeap.org.uk/introduction-to-air-pollution/100.html 
    < /a>
						</li >
    < /ul>
					<ul class='Sunshine environmental'>	
						<li>
							<h2>Health Outcomes</h2 >
    < /li>
						<li>
							Health benefits from sunshine exposure include vitamin D production in the skin that may promote immune system functioning and which promotes bone and general health. 
						</li >
    < li >
    However, too much sunshine exposure, particularly over long periods, can have negative effects on health including increased risk of cancers of the skin through radiation caused DNA damage. < /li>
						<li>
							The eye is sensitive to UV radiation and long-term exposure can cause damage to the eye.
						</li >
    < li >
    There is some evidence that‘ seasonal affective disorder’, a form of depression, may be related to reduced exposure to sunshine. < /li>
					</ul >
    < ul class = 'Herbicides2000 Fungicides2000 environmental' >
    < li >
    < h2 > Health Outcomes < /h2>
						</li >
    < li >
    There are many different types of pesticides, with different regulations and farming practices over time and in different countries, so generalisation is difficult. < /li>
						<li>
							There is evidence that occupational exposure to pesticides (particularly among agricultural workers) may be associated with health effects, ranging from minor irritation to a small increased risk for some cancers.  
						</li >
    < li >
    The evidence base
    for long - term health effects from pesticide exposure from crop spraying in residents and bystanders is limited and inconclusive < /li>
						<li>
						    Reported health effects from pesticides have mainly come from studies of individuals with occupational exposure; these health effects tend to be associated with more frequent exposure.
						</li >
    < li >
    Parental pesticide exposure has been associated with a number of health effects in children in some studies, but evidence
    for a relationship with environmental exposure is generally weak. < /li>
						<li>
						    Evidence for non-reproductive health effects in the general population from crop spraying or other widespread agricultural use is inconclusive.
						</li >
    < /ul>
					
					<ul class='DBPs2000  environmental'>	
						<li>
							<h2>Health Outcomes</h2 >
    < /li>
						<li>
							Any health risks associated with DBPs that have been suggested to date are small and the evidence is limited.
						</li >
    < li >
    DBPs have been associated with small increases in the risk of bladder cancer in males( but not females ) and reduced fetal growth, but there are few epidemiological studies and some findings are inconsistent. < /li>
						<li>
							There is limited evidence from epidemiological studies and meta-analyses for an association between exposure to chlorination disinfection by-products (DBPs) in drinking water and bladder cancer in men; the evidence in women is conflicting.
						</li >
    < li >
    Epidemiological studies and meta - analyses to date have not provided strong evidence of a relationship between concentrations of DBPs or chlorinated drinking water and adverse birth outcomes. < /li>
						<li>
						    DBPs concentrations in drinking water are monitored regularly against standards set by the European Union which, in turn, are influenced by World Health Organization  guidelines.
						</li >
    < /ul>
					
					</div >
    < /div>
				<div class="simpleTabsContent thirdTab" >
					<div class="glossary" >
						<ul>
							<li>
								<a href='#'> Census-ward (ward) </a >
    < div style = 'display:block' >
    These are areas defined by the Office of National Statistics
    for the collection of census data.On average these contain around 6, 000 people < /div>
							</li >
    < li >
    < a href = '#' > COMEAP < /a>
								<div>
									The Committee on the Medical Effects of Air Pollutants  
								</div >
    < /li>
							<li>
								<a href='#'> DBPs </a >
    < div >
    Disinfection by - products < /div>
							</li >
    < li >
    < a href = '#' > DEFRA < /a>
								<div>
									Department for Environment, Food and Rural Affairs
								</div >
    < /li>
							<li>
								<a href='#'> DWI </a >
    < div >
    Drinking Water Inspectorate < /div>
							</li >
    < li >
    < a href = '#' > Empirical Bayesian kriging < /a>
								<div>
									 Kriging is a geostatistical technique which creates a map based on a set of sampling points. It is based on the principal that things that are close together are more related than things that are further apart. Kriging works by predicting values at unmeasured locations using the spatial characteristics of the sampling data (known as a variogram) to build a model. Empirical Bayesian kriging is an additional method to automatically calculate  this model which makes it more accurate in predictions than other methods.
								</div >
    < /li>
							<li>
								<a href='#'> LUR </a >
    < div >
    Land Use Regression( LUR ) is based on the principle that pollutant concentrations depend on the environmental characteristics of the surrounding area that influence or reflect emission intensity and dispersion efficiency.Multiple regression equations describing the relationship between measured concentrations at monitoring locations and relevant environmental variables are computed using Geographic Information Systems( GIS ).The resulting equation is then used to predict concentrations at unmeasured locations( i.e.on a fine grid ) on the basis of these predictor variables < /div>
							</li >
    < li >
    < a href = '#' > NO < sub > 2 < sub > < /a>
								<div>
									Nitrogen Dioxide
								</div >
    < /li>
							<li>
								<a href='#'> O<sub>3</sub > < /a>
								<div>
									Ozone
								</div >
    < /li>
							<li>
								<a href='#'>Pesticides Usage Survey (PUS) </a >
    < div >
    The PUS is conducted by the Food and Environment Research Agency( FERA ).The PUS collects data on regional and national pesticide usage in agriculture, horticulture and food storage in terms of the range and amount of chemicals used, the size of the area treated and the proportion of crops treated. < /div>
							</li >
    < li >
    < a href = '#' > PM < sub > 10 < /sub> </a >
    < div >
    Particulate matter smaller than 10 micrometres < /div>
							</li >
    < li >
    < a href = '#' > PM < sub > 2.5 < /sub> </a >
    < div >
    Particulate matter smaller than 2.5 micrometres < /div>
							</li >
    < li >
    < a href = '#' > THM < /a>
								<div>
									Trihalomethane
								</div >
    < /li>
							<li>
								<a href='#'> Water Supply Zone </a >
    < div >
    An area where the water supplied is from one particular water treatment works or service reservoir < /div>
							</li >
    < li >
    < a href = '#' > WHO < /a>
								<div>
									World Health Organization
								</div >
    < /li>
							<li>
								<a href='#'> UV </a >
    < div >
    Ultraviolet < /div>
							</li >
    < li >
    < a href = '#' > μg / m < sup > 3 < /sup> </a >
    < div >
    microgram per metre cubed. < /div>
							</li >
    < li >
    < a href = '#' > μm < /a>
								<div>
									 micrometre, equivalent to 0.000001 metre.
								</div >
    < /li>	
						</ul >
    < /div>
				</div >
    < /div>
		</div >
    < div id = 'menu' >

    < dl id = 'sample'
    class = 'dropdown' >
    < dt id = "agentselection" >
    < a href = '#' >
    < span > <? php echo $diseaseName; ?> < /span>
							<div></div >
    < /a>
					</dt >
    < dd >
    < ul >
    < li > < a href = 'environmental/NO2/' > NO < sub > 2 < /sub> 2001<span class='value'></span > < /a></li >
    < li > < a href = 'environmental/PM10/' > PM < sub > 10 < /sub> 2001<span class='value'></span > < /a></li >
    < li > < a href = 'environmental/Sunshine/' > Sunshine < span class = 'value' > < /span></a > < /li>
							<li><a href='environmental/Herbicides / '>Herbicides 2000<span class='
    value '></span></a></li>
							<li><a href='
    environmental / Fungicides / '>Fungicides 2000<span class='
    value '></span></a></li>
                            <li><a href='
    environmental / DBPs winter / '>DBPs winter 2000<span class='
    value '></span></a></li>
							<li><a href='
    environmental / DBPs summer / '>DBPs summer 2000<span class='
    value '></span></a></li>		
					    </ul>
					</dd>
			    </dl>	
			</div>
		<div id='
    leftCol '>
			<div id="map"></div>
		</div>
		<div id='
    countiesTooltip ' class='
    hoverBox '>
			<div class='
    hoverCaption ' ></div>
		</div>
	</div>	

<?php require("backend/getUrlsPlusWardsEnv.php"); ?>
	
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['
    _setAccount ', '
    UA - 49857279 - 1 ']);
  _gaq.push(['
    _trackPageview ']);

  (function() {
    var ga = document.createElement('
    script '); ga.type = '
    text / javascript '; ga.async = true;
    ga.src = ('
    https: ' == document.location.protocol ? '
    https: //ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName( 'script' )[ 0 ]; s.parentNode.insertBefore( ga, s );
} )(); < /script>	
</body >
  < /html>