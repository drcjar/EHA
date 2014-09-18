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
content = "Maps representing geographic patterns of disease and environmental exposure." >
  < meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >

< base href = "http://www.envhealthatlas.co.uk/eha/" / >

<!--CSS Stylesheets-->
< link rel = "stylesheet"
href = "css/leaflet/leaflet.css" / >
  < link rel = "stylesheet"
href = "css/map_ha.css" / >
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
	<script src="
js / libs / d3.js "></script>
	<script src="
js / libs / d3Topojson.js "></script>
	<!--[if IE]><script language="
javascript " type="
text / javascript " src="
js / flot / excanvas.min.js "></script><![endif]--> 
	
	<!-- MY JS code -->
	<script type="
text / javascript " src="
js / EHA / eha.js "></script>
	<script type="
text / javascript " src="
js / EHA / map / eha.map.js "></script>
	<script type="
text / javascript " src="
js / EHA / map / eha.map.geojson.js "></script>
	<script type="
text / javascript " src="
js / EHA / map / L.TopoJSON.js "></script>
	<script type="
text / javascript " src="
js / EHA / box / eha.box.js "></script>
	<script type="
text / javascript " src="
js / EHA / graph / eha.graph.js "></script>
	<script type="
text / javascript " src="
js / EHA / postcode / eha.postcode.js "></script>
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
				<div class="environmental">
					<a href='
environmental / NO2 / '>Environmental</a>
				</div>
			</div>	
			<div class="simpleTabs">
		        <ul class="simpleTabsNavigation">
					<li><a href="#" id="firstTab" class="current"><?php echo $diseaseName; ?></a></li>
		            <li><a href="#" id="secondTab">Risk factors</a></li>
					<li><a href="#" id="thirdTab">Glossary</a></li>
		        </ul>
				<div class="simpleTabsContent current firstTab"  >
					<div  class="diseases Lungcancer">
						<div class='
rate '>	
							<h2 class="male">Male lung cancer incidence</h2>
							<h2 class="female">Female lung cancer incidence</h2>
							<h3 class="male">National male lung cancer rate (2010)</h3>
							<h3 class="female">National female lung cancer rate (2010)</h3>
							<p class="male">58.0 cases per 100,000 population</p>
							<p class="female">39.7 cases per 100,000 population</p>
							<div class="rateCaption">
								European Age-Standardised Incidence Rates for Great Britain. 
								<div class="src">
								Source: <a href="http://www.cancerresearchuk.org" target='
_blank '>Cancer Research UK </a>
								</div>
							</div>
						</div>
						<ul>
							<li>
								Lung cancer is the second most common cancer in the UK among men and the third most common in women. 
							</li>
							<li>
								In England and Wales, there were approximately 35,400 cases (19,800 male, 15,600 female) of lung cancer diagnosed and 30,000 deaths (17,000 male, 13,000 female) due to lung cancer in 2009.  
							</li>
							<li>
								The median observed number of lung cancer cases in a census ward, in the 25-year period 1985–2009, was 73 (47 male cases and 26 female cases). 					
							</li>
							<li>	
								The maps show the highest risks for lung cancer in conurbations and industrial areas of England and Wales. This is likely to reflect past smoking patterns and occupational exposures (e.g. to asbestos) with a smaller potential contribution from air pollution exposures. 
							</li>
							<li>
								<p>Further information about lung cancer can be found at:</p>
								<div>
								    <a href="http://www.nhs.uk/conditions/cancer-of-the-lung/pages/introduction.aspx" target='
_blank '>NHS choices – lung cancer </a> 
								</div>
								<div>
								    <a href="http://www.cancerresearchuk.org/cancer-help/type/lung-cancer/" target='
_blank '>Cancer Research UK – lung cancer </a>
								</div>								
								<div>
								    <a href="http://www.roycastle.org/lung-cancer" target='
_blank '>The Roy Castle Lung Cancer Foundation <a>
								</div>
							</li>
						</ul>		
					</div>
					
					<div  class="diseases Breastcancer">
						<div class='
rate '>	
							<h2 class="female">Female breast cancer incidence</h2>
							<h3 class="female">National female breast cancer rate (2010)</h3>
							<p class="female">126.2 cases per 100,000 population</p>
							<div class="rateCaption">
								European Age-Standardised Incidence Rates for Great Britain. <br/>
								Source: <a href="http://www.cancerresearchuk.org" target='
_blank '>Cancer Research UK </a>
							</div>
						</div>
						<ul class="gender_na">
							<li>
								There are no maps available for male breast cancer.  While breast cancer in men is possible it is very rare.  This meant the numbers of cases available, even over the twenty-five year period, was too small to map.  Further information on breast cancer in men can be at the  <a href='
http: //www.cancerresearchuk.org/cancer-help/type/breast-cancer/about/types/breast-cancer-in-men'  target='_blank'> cancerresearchuk website </a>
< /li>
						</ul >
  < ul class = "gender_avlb" >
  < li >
  Breast cancer is the most common cancer in women in the UK. < /li>
							<li>
								In England and Wales, there were approximately 42,800 cases of breast cancer diagnosed and 10,300 deaths due to breast cancer in 2009.
							</li >
  < li >
  The median observed number of breast cancer cases in a census ward,
in the 25 - year period 1985– 2009,
was 84. < /li>
							<li>	
								The maps show very little variation in breast cancer risk across the country – sometimes described as a ‘flat map’.
							</li >
  < li >
  < p > Further information about breast cancer can be found at: < /p>
								<div>
								    <a href="http:/ / www.breastcancercare.org.uk " target='_blank'>Breast Cancer Care <a>
								</div>
								<div>
								    <a href="
http: //www.nhs.uk/Conditions/Cancer-of-the-breast-female/Pages/Introduction.aspx" target='_blank'>NHS Choices – breast cancer (female)  </a> 
< /div>	
								<div>
								    <a href="http:/ / www.cancerresearchuk.org / cancer - help / type / breast - cancer / ? script = true " target='_blank'>Cancer Research UK – breast cancer  </a>
								</div>
							</li>
						</ul>	
					</div>
					
					<div  class="
diseases Prostatecancer ">
						<div class='rate'>	
							<h2 class="
male female ">Prostate cancer mortality</h2>
							<h3 class="
male ">National prostate cancer rate (2010)</h3>
							<p class="
male ">24.1 cases per 100,000 population</p>
							<div class="
rateCaption ">
								European Age-Standardised Mortality Rates for Great Britain. 
								<div class="
src ">
								Source: <a href="
http : //www.cancerresearchuk.org" target='_blank'>Cancer Research UK </a>
< /div>
							</div >
  < /div>
						<ul class="gender_na">
							<li>There are no maps available for female prostate cancer as the prostate gland is only found in men.</li >
  < /ul>
						<ul class="gender_avlb">
							<li>
								Prostate cancer is the most common cancer in the UK among men. 
							</li >
  < li >
  Unlike most cancers in this atlas,
these maps show mortality not incidence risk,
this is due to the introduction of prostate - specific antigen( PSA ) testing in the UK.PSA testing has large geographical variations in use which in turn affects the number of new cases diagnosed( the incidence ).Geographical patterns in mortality will be less influenced by PSA testing so are a better estimate of underlying prostate cancer risk. < /li>
							<li>
								In England and Wales, there were approximately 36,900 cases of prostate cancer diagnosed and 9,400 deaths due to prostate cancer in 2009.  
							</li >
  < li >
  The median observed number of prostate cancer deaths in a census ward,
in the 25 - year period 1985– 2009,
was 20. < /li>
							<li>	
								The maps show higher mortality risks in Dorset and parts of west Wales and the South West, with areas of slightly higher risk distributed across the country and areas of lower risk in the north, the Midlands and the South East.
							</li >
  < li >
  < p > Further information about prostate cancer can be found at: < /p>
								<div>
								    <a href="http:/ / www.prostatecanceruk.org " target='_blank'>Prostate Cancer UK  <a>
								</div>
								<div>
								    <a href="
http: //www.nhs.uk/conditions/cancer-of-the-prostate/pages/introduction.aspx" target='_blank'>NHS Choices: prostate cancer  </a> 
< /div>	
								<div>
								    <a href="http:/ / www.cancerresearchuk.org / cancer - help / type / prostate - cancer / " target='_blank'>Cancer Research UK – prostate cancer  </a>
								</div>
							</li>
						</ul>
					</div>	
					
					<div class="
diseases Skincancer ">
						<div class='rate'>	
							<h2 class="
male ">Male skin cancer  (malignant melanoma)  incidence</h2>
							<h2 class="
female ">Female skin cancer  (malignant melanoma)  incidence</h2>
							<h3 class="
female ">National female  malignant melanoma  rate (2010)</h3>
							<h3 class="
male ">National male malignant melanoma  rate (2010)</h3>
							<p class="
female ">17.3  cases per 100,000 population</p>
							<p class="
male ">17.3  cases per 100,000 population</p>
							<div class="
rateCaption ">
								European Age-Standardised Incidence Rates for Great Britain.
								<div class="
src ">
								Source: <a href="
http: //www.cancerresearchuk.org" target='_blank'>Cancer Research UK </a>
< /div>
							</div >
  < /div>
						<ul>
							<li>
								Malignant melanoma is the sixth most common cancer in the UK among men and women.
							</li >
  < li >
  In England and Wales,
there were approximately 10,
400 cases( 5, 000 male, 5, 400 female ) of malignant melanoma diagnosed and 1,
800 deaths( 1, 000 male, 800 female ) in 2009. < /li>
							<li>
								The median observed number of malignant melanoma  cases in a census ward, in the 25-year period 1985–2009, was 14 (6 male cases and 8 female cases).  						
							</li >
  < li >
  The maps show highest risks
for malignant melanoma in the south west of England and Wales. < /li>
							<li>
								<p>Further information about malignant melanoma  can be found at:</p >
  < div >
  < a href = "http://www.macmillan.org.uk/Cancerinformation/Cancertypes/Melanoma/Melanoma.aspx"
target = '_blank' > Macmillan Cancer support < a >
  < /div>
								<div>
								    <a href="http:/ / www.nhs.uk / Conditions / malignant - melanoma / Pages / Introduction.aspx " target='_blank'> NHS Choices – Skin cancer (melanoma)  </a> 
								</div>	
								<div>
								    <a href="
http: //www.cancerresearchuk.org/cancer-help/type/melanoma/" target='_blank'>Cancer Research UK – melanoma skin cancer  </a>
< /div>
							</li >
  < /ul>
					</div >

< div class = "diseases Bladdercancer" >
  < div class = 'rate' >
  < h2 class = "female" > Female bladder cancer incidence < /h2>
							<h2 class="male">Male bladder cancer incidence</h2 >
  < h3 class = "male" > National male bladder cancer rate( 2010 ) < /h3>
							<h3 class="female">National female bladder cancer rate (2010)</h3 >
  < p class = "female" > 5.5 cases per 100,
000 population < /p>
							<p class="male">18  cases per 100,000 population</p >
  < div class = "rateCaption" >
  European Age - Standardised Incidence Rates
for Great Britain. < div class = "src" >
  Source: < a href = "http://www.cancerresearchuk.org"
target = '_blank' > Cancer Research UK < /a>
								</div >
  < /div>
						</div >
  < ul >
  < li >
  Bladder cancer is the fourth most common cancer in the UK among men and the thirteenth most common in women. < /li>
							<li>
								In England and Wales, there were approximately 9,600 cases (7,000 male, 2,600 female) of bladder cancer diagnosed and 4,450 deaths (3,000 male, 1,450 female) due to bladder cancer in 2009. 
							</li >
  < li >
  The median observed number of bladder cancer cases in a census ward,
in the 25 - year period 1985– 2009,
was 25( 18 male cases and 7 female cases ). < /li>
							<li>	
								The maps show the highest bladder cancer risks are found in north and south Wales, Merseyside, and in a band running north from Hampshire to Oxfordshire. The observed geographical patterns are affected by variations in coding and registration of bladder cancers in different cancer registries. 
							</li >
  < li >
  < p > Further information about bladder cancer can be found at: < /p>
								<div>
								    <a href="http:/ / www.cancerresearchuk.org / cancer - info / cancerstats / types / bladder / " target='_blank'>Cancer Research UK – bladder cancer  <a>
								</div>
								<div>
								    <a href="
http: //www.nhs.uk/conditions/Cancer-of-the-bladder/Pages/Introduction.aspx" target='_blank'> NHS Choices – bladder cancer  </a> 
< /div>	
							</li >
  < /ul>
					</div >

< div class = "diseases Leukaemia" >
  < div class = 'rate' >
  < h2 class = "male" > Male leukaemia incidence < /h2>
							<h2 class="female">Female leukaemia incidence</h2 >
  < h3 class = "female" > National female leukaemia rate( 2010 ) < /h3>
							<h3 class="male">National male leukaemia rate (2010)</h3 >
  < p class = "female" > 7.9 cases per 100,
000 population < /p>
							<p class="male">13  cases per 100,000 population</p >
  < div class = "rateCaption" >
  European Age - Standardised Incidence Rates
for Great Britain. < div class = "src" >
  Source: < a href = "http://www.cancerresearchuk.org"
target = '_blank' > Cancer Research UK < /a>
								</div >
  < /div>
						</div >
  < ul >
  < li >
  Leukaemia is the tenth most common cancer in the UK among men and women. < /li>
							<li>
								In England and Wales, there were approximately 7,500 cases (4,400 male, 3,100 female) of leukaemia diagnosed and 4,000 deaths (2,300 male, 1,700 female) due to leukaemia in 2009. 
							</li >
  < li >
  The median observed number of leukaemia cases in a census ward,
in the 25 - year period 1985– 2009,
was 14( 8 male cases and 6 female cases ). < /li>
							<li>	
								The maps show generally slightly higher leukaemia risks in Wales, the South West and the North East.
							</li >
  < li >
  < p > Further information about leukaemia can be found at: < /p>
								<div>
								    <a href="http:/ / www.leukaemialymphomaresearch.org.uk / " target='_blank'> Leukaemia and Lymphoma Research  <a>
								</div>
								<div>
								    <a href="
http: //www.nhs.uk/conditions/Leukaemia-acute/Pages/Introduction.aspx" target='_blank'> NHS Choices – leukaemia   </a> 
< /div>	
								<div>
								    <a href="http:/ / www.cancerresearchuk.org / cancer - help / type / leukaemia / " target='_blank'> Cancer Research UK – leukaemia </a> 
								</div>	
							</li>
						</ul>
					</div>
							
					<div class="
diseases Braincancer ">
						<div class='rate'>	
							<h2 class="
female ">Female brain cancer incidence</h2>
							<h2 class="
male ">Male brain cancer incidence</h2>
							<h3 class="
male ">National male brain cancer rate (2010)</h3>
							<h3 class="
female ">National female brain cancer rate (2010)</h3>
							<p class="
female ">11.8  cases per 100,000 population</p>
							<p class="
male ">13.1  cases per 100,000 population</p>
							<div class="
rateCaption ">
								European Age-Standardised Incidence Rates for Great Britain.
								<div class="
src ">
								Source: <a href="
http: //www.cancerresearchuk.org" target='_blank'>Cancer Research UK Brain, * includes other CNS and Intracranial Tumours*  </a>
< /div>
							</div >
  < /div>
						<ul>
							<li>
								Brain cancer is the twelfth most common cancer in the UK among men and the fourteenth most common in women.
							</li >
  < li >
  In England and Wales,
there were approximately 4,
200 cases( 2, 400 male, 1, 800 female ) of brain cancer diagnosed and 3,
300 deaths( 1, 900 male, 1, 400 female ) due to brain cancer in 2009. < /li>
							<li>
								The median observed number of brain cancer cases in a census ward, in the 25-year period 1985–2009, was 9 (5 male cases and 4 female cases). 						
							</li >
  < li >
  The maps show that brain cancer has very little geographical variation in England and Wales– sometimes described as a‘ flat map’. < /li>
							<li>
								<p>Further information about brain cancer can be found at:</p >
  < div >
  < a href = " http://www.cancerresearchuk.org/cancer-help/type/brain-tumour/"
target = '_blank' > Cancer Research UK: brain tumours < a >
  < /div>
								<div>
								    <a href="http:/ / interphone.iarc.fr / " target='_blank'> The INTERPHONE study   </a> 
								</div>	
								<div>
								    <a href="
http: //www.ukcosmos.org/aboutus.html" target='_blank'> The cohort study of mobile phone use and health (COSMOS) </a> 
< /div>	
								<div>
								    <a href="http:/ / www.brainstrust.org.uk / " target='_blank'> Brain Trust</a> 
								</div>	
							</li>
						</ul>
					</div>

					<div  class="
diseases Livercancer ">
						<div class='rate'>	
							<h2 class="
male ">Male liver cancer incidence</h2>
							<h2 class="
female ">Female liver cancer incidence</h2>
							<h3 class="
female ">National female liver cancer rate (2010)</h3>
							<h3 class="
male ">National male liver cancer rate (2010)</h3>
							<p class="
female ">3.1  cases per 100,000 population</p>
							<p class="
male ">7  cases per 100,000 population</p>
							<div class="
rateCaption ">
								European Age-Standardised Incidence Rates for Great Britain. 
								<div class="
src ">
								Source: <a href="
http: //www.cancerresearchuk.org" target='_blank'>Cancer Research UK  </a>
< /div>
							</div >
  < /div>
						<ul>
							<li>
								Liver cancer is a relatively rare cancer in the UK among men and women but it is usually fatal.
							</li >
  < li >
  In England and Wales,
there were approximately 3,
500 cases( 2, 200 male, 1, 300 female ) of liver cancer diagnosed and 3,
200 deaths( 1, 900 male, 1, 300 female ) due to liver cancer in 2009. < /li>
							<li>
								The median observed number of liver cancer cases in a census ward, in the 14-year period 1996–2009, was 3 (2 male cases and 1 female case).						
							</li >
  < li >
  The maps show higher risk of liver cancer in the North East and parts of South Wales.For males,
higher risk is also seen in London and parts of Hampshire and Dorset.This may reflect past exposure to risk factors,
such as hepatitis C virus,
but differences in coding practices
for liver cancer by different regional cancer registries may also contribute to observed regional differences in risk. < /li>
							<li>
								<p>Further information about liver cancer can be found at:</p >
  < div >
  < a href = "http://www.britishlivertrust.org.uk"
target = '_blank' > The British Liver Trust < a >
  < /div>
								<div>
								    <a href="http:/ / www.nhs.uk / conditions / cancer - of - the - liver / Pages / Introduction.aspx " target='_blank'> NHS Choices – liver cancer   </a> 
								</div>	
								<div>
								    <a href="
http: //www.cancerresearchuk.org/cancer-help/type/liver-cancer/" target='_blank'> Cancer Research UK – liver cancer   </a> 
< /div>	
							</li >
  < /ul>
					</div >

< div class = "diseases Mesothelioma" >
  < div class = 'rate' >
  < h2 class = "male" > Male Mesothelioma incidence < /h2>
							<h2 class="female">Female Mesothelioma incidence</h2 >
  < h3 class = "male" > National male mesothelioma rate( 2010 ) < /h3>
							<h3 class="female">National female mesothelioma rate (2010)</h3 >
  < p class = "female" > 0.9 cases per 100,
000 population < /p>
							<p class="male">5.2  cases per 100,000 population</p >
  < div class = "rateCaption" >
  European Age - Standardised Incidence Rates
for Great Britain. < div class = "src" >
  Source: < a href = "http://www.cancerresearchuk.org"
target = '_blank' > Cancer Research UK < /a>
								</div >
  < /div>
						</div >
  < ul >
  < li >
  Mesothelioma is a rare cancer affecting the lung or abdominal cavity in the UK among men and women. < /li>
							<li>
								In England and Wales, there were approximately 2,290 cases (1,900 male and 390 female) of mesothelioma diagnosed and 2,030 deaths (1,700 male and 330 female) due to mesothelioma in 2009.
							</li >
  < li >
  The median observed number of mesothelioma cases in a census ward,
in the 25 - year period 1985– 2009,
was 2( both male cases ). < /li>
							<li>	
								The maps show the highest risks for mesothelioma incidence are in industrial regions of England and Wales, especially areas with previous and current shipbuilding industries.
							</li >
  < li >
  < p > Further information about mesothelioma can be found at: < /p>
								<div>
								    <a href="http:/ / www.mesothelioma.uk.com / " target='_blank'>Mesothelioma UK  <a>
								</div>
								<div>
								    <a href="
http: //www.hse.gov.uk/statistics/causdis/mesothelioma/index.htm  " target='_blank'> The Health and Safety Executive (HSE) – mesothelioma    </a> 
< /div>	
								<div>
								    <a href="http:/ / www.nhs.uk / conditions / mesothelioma / Pages / Definition.aspx " target='_blank'> NHS Choices – mesothelioma     </a> 
								</div>	
							</li>
						</ul>
					</div>	
					
					<div  class="
diseases Heartdisease ">
						<div class='rate'>	
							<h2 class="
female ">Female Coronary Heart Disease mortality</h2>
							<h2 class="
male ">Male Coronary Heart Disease mortality</h2>
							<h3 class="
female ">National female coronary heart disease  rate (2010)</h3>
							<h3 class="
male ">National male coronary heart disease  rate (2010)</h3>
							<p class="
female ">16.0  cases per 100,000 population</p>
							<p class="
male ">55.0  cases per 100,000 population</p>
							<div class="
rateCaption ">
								Age-Standardised Mortality Rates for Great Britain. 
								<div class="
src ">
								Source: <a href="
http: //www.bhf.org.uk" target='_blank'> British Heart Foundation </a>
< /div>
							</div >
  < /div>
						<ul>
							<li>
								Coronary heart disease (CHD) is the single largest cause of death in the world and the most common cause of death in England and Wales.
							</li >
  < li >
  In England and Wales,
there were approximately 71,
500 deaths( 41, 000 male, 30, 500 female ) from CHD in 2009. < /li>
							<li>
								The median observed number of CHD deaths in a census ward, in the 25-year period 1985–2009, was 268 (149 males and 119 females).							
							</li >
  < li >
  The maps show that the highest risks
for CHD in both males and females are in the north of England and the south of Wales. < /li>
							<li>
								<p>Further information about coronary heart disease  can be found at:</p >
  < div >
  < a href = "http://www.nhs.uk/Conditions/Coronary-heart-disease/Pages/Introduction.aspx"
target = '_blank' > NHS choices: coronary heart disease < /a> 
								</div >
  < div >
  < a href = "http://www.bhf.org.uk"
target = '_blank' > British Heart Foundation < /a> 
								</div >
  < /li>
						</ul >
  < /div>
					
					<div  class="diseases COPD">
						<div class='rate'>	
							<h2 class="female">Female chronic Obstructive Pulmonary Disease mortality</h2 >
  < h2 class = "male" > Male chronic Obstructive Pulmonary Disease mortality < /h2>
							<h3 class="female">National female COPD rate (2008)</h3 >
  < h3 class = "male" > National male COPD rate( 2008 ) < /h3>
							<p class="female">27  cases per 100,000 population</p >
  < p class = "male" > 39 cases per 100,
000 population < /p>
							<div class="rateCaption">
								Age-Standardised Mortality Rates for Great Britain.
								<div class="src">
								Source: <a href="http:/ / www.who.int / healthinfo / statistics / mortality / en / index.html " target='_blank'>World Health Organization </a>
								</div>
							</div>
						</div>
						<ul>
							<li>
								Chronic Obstructive Pulmonary Disease (COPD), which includes chronic bronchitis and emphysema, is the most common cause of death after cardiovascular disease and cancer.
							</li>
							<li>
								In England and Wales, there were approximately 24,100 deaths (12,700 male, 11,400 female) from COPD in 2009.
							</li>
							<li>
								The median observed number of COPD deaths in a census ward, in the 25-year period 1985–2009, was 53 (32 males and 21 females).	  						
							</li>
							<li>	
								The maps show that mortality from COPD is highest in cities and conurbations, which is likely to reflect past smoking patterns and occupational exposures, with a smaller potential contribution from air pollution exposures.
							</li>
							<li>
								<p>Further information about COPD can be found at:</p>
								<div>
								    <a href="
http: //www.blf.org.uk/Home" target='_blank'> British Lung Foundation -  </a> 
< /div>	
								<div>
								    <a href="http:/ / www.nhs.uk / conditions / chronic - obstructive - pulmonary - disease / Pages / Introduction.aspx " target='_blank'> NHS Choices: COPD    </a> 
								</div>	
								<div>
								    <a href="
http: //www.hse.gov.uk/copd/index.htm" target='_blank'> Health and Safety Executive – COPD  </a> 
< /div>	
							</li >
  < /ul>
					</div >

< div class = "diseases Kidneydisease" >
  < div class = 'rate' >
  < h2 class = "male" > Male Kidney Disease mortality < /h2>
							<h2 class="female">Female Kidney Disease mortality</h2 >
  < h3 class = "male" > National male kidney disease rate( 2008 ) < /h3>
							<h3 class="female">National female kidney disease rate (2008)</h3 >
  < p class = "female" > 2.9 cases per 100,
000 population < /p>
							<p class="male">3.8  cases per 100,000 population</p >
  < div class = "rateCaption" >
  Age - Standardised Mortality Rates
for Great Britain. < div class = "src" >
  Source: < a href = "http://www.who.int/topics/global_burden_of_disease/en/"
target = '_blank' > Global Burden of Disease < /a>
								</div >
  < /div>
						</div >
  < ul >
  < li >
  In England and Wales,
there were approximately 11,
800 deaths( 4, 800 male and 7, 000 female ) due to kidney disease in 2009. < /li>
							<li>
								The median observed number of kidney disease deaths in a census ward, in the 25-year period 1985–2009, was 17 (7 males and 10 females).
							</li >
  < li >
  The maps show that the highest risks
for kidney disease mortality are in the East and West Midlands,
the east of England and London. < /li>
							<li>
								<p>Further information about kidney disease can be found at:</p >
  < div >
  < a href = "http://www.renalreg.com/"
target = '_blank' > The UK Renal Registry < /a> 
								</div >
  < div >
  < a href = "http://www.kidneyresearchuk.org/home.php "
target = '_blank' > Kidney Research UK < /a> 
								</div >
  < div >
  < a href = "http://www.kidneycare.nhs.uk/"
target = '_blank' > NHS Kidney Care < /a> 
								</div >
  < div >
  < a href = "http://www.nhs.uk/conditions/Kidney-disease-chronic/Pages/Introduction.aspx "
target = '_blank' > NHS Choices: kidney disease( chronic ) < /a> 
								</div >
  < /li>
						</ul >
  < /div>

					<div  class="diseases Stillbirths">
						<div class='rate'>	
							<h2 class="female male">National stillbirths rate (2009)</h2 >
  < p class = "female male" > 400 cases per 100,
000 births < /p>
							<div class="rateCaption">
								<div class="src">Source: <a href="http:/ / www.sciencedirect.com / science / article / pii / S0140673610623100 " target='_blank'> Cousens, S., Blencowe, H., Stanton, C.et al. National, regional, and worldwide estimates of stillbirth rates in 2009 with trends since 1995: a systematic analysis. The Lancet 377[9774], 1319-1330. 2011. </a>
								</div>
							</div>
						</div>
						<ul>
							<li>
								Stillbirths are an uncommon reproductive outcome. 
							</li>
							<li>
								In England and Wales, there were approximately 3,600 stillbirths (1,900 male and 1,700 female) in 2009.
							</li>
							<li>
								The median observed number of stillbirths in a census ward, in the 25-year period 1985–2009, was 4 (2 males and 2 females).						
							</li>
							<li>
								The maps show little geographical variation in stillbirth risk – sometimes described as a ‘flat map’					
							</li>
							<li>
								<p>Further information about stillbirth  can be found at:</p>
								<div>
								    <a href="
http: //www.nhs.uk/conditions/Stillbirth/Pages/Definition.aspx " target='_blank'> NHS Choices – stillbirths </a> 
< /div>	
								<div>
								    <a href="http:/ / www.uk - sands.org / home.html " target='_blank'> SANDS – stillbirth and neonatal death charity   </a> 
								</div>	
								<div>
								    <a href="
http: //www.tommys.org/page.aspx?pid=361 " target='_blank'> TOMMYS – stillbirth research  </a> 
< /div>	
								<div>
								    <a href="http:/ / www.europeristat.com / " target='_blank'> EURO-PERISTAT – Europe-wide health information and knowledge systems for evaluation and monitoring of health in pregnancy and during and just after childbirth  </a> 
								</div>
							</li>
						</ul>
					</div>

					<div  class="
diseases LowBirthWeight ">
						<div class='rate'>	
							<h2 class="
female male ">National low birth weight rate (2000)</h2>
							<p class="
female male ">8000  cases per 100,000 births</p>
							<div class="
rateCaption ">
								<div class="
src ">
								Source:  <a href="
http: //www.who.int/reproductivehealth/publications/monitoring/9280638327/en/" target='_blank'>World Health Organization </a>
< /div>
							</div >
  < /div>
						<ul>
							<li>
								Low birth weight (LBW) is defined as birth weight of less than 2,500 g/
5 lbs 8 oz. < /li>
							<li>
								In England and Wales, there were approximately 37,700 newborns (17,700 male, 20,000 female) with LBW in 2009.
							</li >
  < li >
  The median observed number of LBW babies in a census ward,
in the 25 - year period 1985– 2009,
was 61( 29 male babies and 32 female babies ). < /li>
							<li>
								The maps show greater risk of a newborn having low birth weight in central regions of England and Wales.						
							</li >
  < li >
  < p > Further information about on low birth weight can be found at: < /p>
								<div>
								    <a href="http:/ / www.unicef.org / publications / files / low_birthweight_from_EY.pdf " target='_blank'> UNICEF – factsheet: low birth weight   </a> 
								</div>	
								<div>
								    <a href="
http: //www.who.int/nutrition/topics/feto_maternal/en/index.html" target='_blank'> World Health Organization – feto-maternal nutrition and low birth weight </a> 
< /div>	
							</li >
  < /ul>
					</div >
  < p class = "disclaimer" >
  Contains National Statistics and Ordnance Survey data© Crown copyright and database right 2013.Cancer incidence
for Wales was supplied by WCISU. < /p>
				</div >

< div class = "simpleTabsContent secondTab" >
  < div class = "info" >
  < h2 style = 'margin:10px 0 0 20px;' > Risk factors < /h2>
					<ul class='Lungcancer diseases'>	
						<li>
							The major risk factor for lung cancer is cigarette smoking, which causes around nine in every ten cases of lung cancer. </li >
  < li > Lung cancer is commoner in men than in women reflecting differences in past smoking rates. < /li> 
							<li>Deprivation is strongly linked to lung cancer, but this may reflect higher smoking rates in more deprived groups.</li >
  < li > Occupational exposures are an important risk factor
for lung cancer,
particularly
for men. < /li>		
							<li>There are some environmental risk factors for lung cancer but they are a minor cause of lung cancer when compared to smoking but include radon, outdoor and indoor air pollution.</li >
  < /ul>
					<ul class='Breastcancer diseases'>	
						<li>
							Most breast cancer risk factors are associated with hormonal factors; risks increase with onset of menstruation at younger age and later, at menopause, while childbearing (particularly an early first birth) reduces risk. 
						</li >
  < li >
  Reproductive history( childbearing, breastfeeding, oral contraceptive use and hormone replacement therapy - HRT ) can influence breast cancer risk through effects on individual hormone levels. < /li> 
						<li>
							Family history of the disease is important and around 5% of breast cancer cases can be attributed to high-risk genetic mutations.
						</li >
  < li > Lifestyle factors such as diet,
exercise and alcohol intake are likely to affect the breast cancer risk. < /li>		
						<li> Occupational factors have been associated with approximately 5% of breast cancers in the UK,  particularly shift/night
work. < /li> 
						<li> Breast cancer incidence is higher in more affluent social classes.</li >
  < li > An environmental risk factor
for breast cancer that has been identified is ionising radiation. < /li> 		
					</ul >
  < ul class = 'Prostatecancer diseases' >
  < li >
  The strongest risk factor
for prostate cancer is age,
with 85 % of cases occurring in men over 65 years of age and less than 0.1 % of all patients diagnosed being younger than 50 years old. < /li>
						<li>
							Risk is also relatively high in men with a family history of prostate cancer and in men of African or Afro-Caribbean origin.
						</li >
  < li >
  Other risk factors are not well understood.Several causal factors have been proposed including hormonal and dietary factors,
but the evidence is limited and inconclusive. < /li>
						<li> Socio-economic differences in prostate cancer incidence rates are likely to be due to differences in uptake of testing.
						</li >
  < li > Environmental exposures that have been linked with prostate cancer include endocrine disruptors,
polychlorinated biphenyls( PCBs ),
heavy metals and sunlight / vitamin D,
but the evidence is limited and inconclusive. < /li> 
						
					</ul >
  < ul class = 'Skincancer diseases' >
  < li >
  An individual’ s risk of developing malignant melanoma will be based on a combination of factors,
especially number of moles,
skin colour and extent of UV radiation exposure. < /li>
						<li>
							Most cases of malignant melanoma are caused by solar UV radiation exposure. This will be influenced by a range of lifestyle factors including time spent outdoors, vacation choices, the use of sun protection such as sunscreen, the timing and the level of UV exposure (especially in childhood), intermittent exposure and history of sunburn.
						</li >
  < li >
  In the last four decades,
the use of tanning beds has additionally exposed individuals to UV radiation( mostly UVA ). < /li>
						<li> 
							Individuals with a family history of malignant melanoma  are at increased risk.
						</li >
  < li >
  Unlike many cancers the incidence of malignant melanoma is higher in more affluent areas in the UK. < /li> 
					</ul >
  < ul class = 'Bladdercancer diseases' >
  < li >
  Smoking is the major risk factor
for bladder cancer. < /li>
						<li>
							Other factors such as heavy coffee or alcohol consumption may increase an individual’s risk of bladder cancer, and fruit and vegetable consumption may decrease risk.
						</li >
  < li >
  An estimated 7 % of male and 2 % of female bladder cancer cases in the UK are attributable to occupational exposures. < /li>
						<li> 
							Ionising radiation can contribute to the development of bladder cancer.
						</li >
  < li >
  High levels of arsenic are an established cause of bladder cancer,
but arsenic exposure levels in England and Wales are extremely low. < /li>
						<li> 
							There is limited evidence for an association between exposure to chlorination disinfection by-products (DBPs) in drinking water and bladder cancer in men; the evidence in women is conflicting.
						</li >
  < /ul>
					<ul class='Leukaemia diseases'>	
						<li>
							The known causes of leukaemia vary between subtypes of the disease
						</li >
  < li >
  Ionising radiation is a known risk factor. < /li> 
						<li>
							There is conflicting evidence for an association with socio-economic status.
						</li >
  < li >
  Occupational exposure to chemicals such as benzene is associated with leukaemia. < /li>		
						<li> 
							Despite a known association with ionising radiation, there is no strong evidence for increases in leukaemia risk related to home radon exposures.
						</li >
  < li >
  Smoking has been associated with certain subtypes of leukaemia. < /li>
					</ul >
  < ul class = 'Braincancer diseases' >
  < li >
  The only two established causes
for primary brain cancer are high - dose ionising radiation and rare inherited conditions such as Li - Fraumeni syndrome. < /li>
						<li>
							There is recent evidence suggestive of reduced risk of brain cancer among those with allergic disease.
						</li >
  < li >
  Unlike most cancers the incidence of brain cancer is higher in more affluent groups. < /li>
						<li> 
							There is no conclusive evidence that lifestyle factors (such as tobacco and alcohol consumption) and occupational exposures affect risk of brain cancer.
						</li >
  < li >
  There is limited and inconclusive evidence
for a role
for environmental risk factors in brain cancer,
it has been suggested that mobile phone use may lead to the development of brain tumours,
but the evidence to date is inconclusive. < /li>
					</ul >
  < ul class = 'Livercancer diseases' >
  < li >
  There are various subtypes of liver cancer with the two most common forms of primary liver cancer being hepatocellular carcinoma( HCC ) and intrahepatic cholangiocarcinoma( IHCC ).These have several risk factors in common,
such as cirrhosis,
chronic hepatitis B or C,
obesity and diabetes. < /li>
						<li>
							Alcohol consumption and smoking are major risk factors in the development of liver cancer.
						</li >
  < li >
  There is some limited evidence that fruit,
vegetable and coffee intake may be protective against liver cancer. < /li>
						<li> 
							Increased deprivation is associated with an increased risk of developing liver cancer.
						</li >
  < li >
  Occupational exposure to vinyl chloride and arsenic has been associated with liver cancer. < /li>
						<li> 
							Other potential risk factors include iron overload and past exposure to Thorotrast (used in X-rays until the 1960s).
						</li >
  < li >
  The insecticide,
DDT( dichlorodiphenyltrichloroethane ),
has been linked to liver cancer but has been banned in the UK since the 1980s. < /li>
					</ul >
  < ul class = 'Mesothelioma  diseases' >
  < li >
  Occupational and para - occupational exposure to asbestos is the major cause of mesothelioma in the UK,
with the occupation at highest risk being construction work. < /li>
						<li>
							Para-occupational exposures are exposures of household members who live with an occupationally exposed worker, through mechanisms such as contact with clothing contaminated with asbestos.
						</li >
  < li >
  Asbestos exposure can also be environmental as asbestos and asbestos - like fibres are found naturally in the environment in some areas of the world,
although not in the UK.Any environmental exposure to asbestos in the UK is due to past use of asbestos in buildings and industry. < /li>
						<li> 
							Other potential risk factors for mesothelioma include the virus SV40 (or ‘simian’ virus) which was known to have contaminated polio vaccines in the 1950s and 1960s.
						</li >
  < li >
  Smoking is not considered to be a risk factor
for mesothelioma,
but asbestos exposure in smokers greatly increases the risk of lung cancer. < /li>
					</ul >
  < ul class = 'Heartdisease diseases' >
  < li >
  Age,
gender,
heredity and ethnicity are the major non - modifiable risk factors
for coronary heart disease( CHD ). < /li>
						<li>
							Key modifiable risk factors include high total blood cholesterol levels, high LDL (low-density lipoprotein) cholesterol, low HDL (high-density lipoprotein) cholesterol, high blood pressure, current cigarette smoking and diabetes.
						</li >
  < li >
  Lower socio - economic status is strongly associated with a higher incidence of CHD and a higher mortality rate after a myocardial infarction( heart attack ). < /li>
						<li> 
							Life and work stress is associated with CHD risk.
						</li >
  < li >
  Life - style factors,
such as physical inactivity and obesity,
are associated with CHD. < /li>
						<li>
							Physical activity also has a beneficial modifying effect on many of the established risk factors for CHD.
						</li >
  < li >
  Dietary factors have been associated with the development of CHD,
including diets high in calories,
certain fats and salt and low in vegetables and fruit. < /li>		
						<li> 
							Short- and long-term exposure to air pollution increase the risk of cardiovascular events, including CHD.
						</li >
  < li >
  There is evidence of an association between environmental tobacco smoke and cardiovascular diseases. < /li>
					</ul >
  < ul class = 'COPD  diseases' >
  < li >
  The main risk factor
for COPD in England and Wales is tobacco smoking;
between 70 - 90 % of all COPD deaths can be attributed to smoking. < /li>
						<li>
							Occupational exposure may cause up to 15% of COPD cases.
						</li >
  < li >
  Deprivation is a strong risk factor
for COPD, but is likely to be a marker
for other risk factors such as higher smoking rates and early life factors. < /li>
						<li> 
							There is some evidence that a healthy diet may be protective against COPD, even in smokers.
						</li >
  < li >
  Outdoor air pollution has been estimated to cause 1 % of COPD cases in high - income countries and indoor air pollution from biomass fuels is a major risk factor
for COPD in low - and middle - income countries.. < /li>
					</ul >
  < ul class = 'Kidneydisease  diseases' >
  < li >
  Having diabetes and / or hypertension are major risk factors
for kidney disease. < /li>
						<li>
							Kidney disease occurs at higher rates among socio-economically deprived groups and those of African Caribbean and South Asian descent.
						</li >
  < li >
  Genetic factors, smoking, obesity, and diet are associated with kidney disease risk. < /li>
						<li> 
							Some infections also contribute to kidney disease, particularly in developing regions.
						</li >
  < li >
  Heavy metals such as cadmium, lead, and mercury are toxic to the kidney, and prolonged or high - level exposure may result in or contribute to renal disease.Exposures to heavy metals may occur through industrial contamination, but also via the diet and cigarette smoking. < /li>
						<li> 
							There is some evidence that heavy exposure to hydrocarbons (organic solvents), most likely to occur in occupational settings, may increase the risk of end-stage kidney disease.
						</li >
  < /ul>
					<ul class='Stillbirths  diseases'>	
						<li>
							The majority of stillbirths are unexplained.
						</li >
  < li >
  The main identified risk factors
for stillbirth in high - income countries are socio - economic deprivation, maternal conditions such as diabetes, hypertension, overweight and obesity, maternal smoking, primiparity( first pregnancy ), infections, maternal age over 35 years, and pregnancy disorders such as small
for gestational age and placental abruption( where the placenta separates from the inner wall of the uterus before delivery ). < /li> 
						<li>
							Women of lower socio-economic status have greater risk of stillbirth. 
						</li >
  < li >
  Higher rates of stillbirth are seen in women in minority ethnic groups, but this is probably because of the higher prevalence of other established risk factors including lower socio - economic status. < /li>		
						<li> 
							Suboptimal fetal growth and placental abruption are strongly associated with stillbirth.
						</li >
  < /ul>
					<ul class='LowBirthWeight  diseases'>	
						<li>
							Maternal characteristics such as height, weight and age influence birth weight.
						</li >
  < li >
  Risk factors include poor maternal health and nutrition, maternal illness and medical conditions such as hypertension or diabetes, socio - economic deprivation and lifestyle factors such as smoking and excessive alcohol consumption. < /li> 
						<li>
							Lower socio-economic status is associated with increased risk of a LBW baby. 
						</li >
  < li >
  Certain occupational factors, such as shift work, are associated with LBW risk. < /li>		
						<li> 
							Exposure to outdoor air pollution during pregnancy is associated with increased risk of LBW.
						</li >
  < li >
  Higher maternal lead levels may increase the risk of LBW. < /li>
						<li> 
							Evidence for increased risk of LBW from other environmental exposures, including DDT (dichlorodiphenyltrichloroethane) and disinfection by-products (DBPs) in drinking water, is inconsistent and limited.
						</li >
  < li >
  Current evidence does not support an association between living near waste facilities( landfill sites and incinerators ) and LBW. < /li>
					</ul >
  < h3 class = 'riskFactor' > < /h3>
					<div class='riskFactorsChartLegend'></div >
  < div id = "percentageLbl" > < /div>
					<div class='riskFactorsChart'></div >
  < p class = 'reference' >
  Due to the way the PAF is calculated the risk factors combined can add up to more than 100 % . < span > Source < /span>:<a href=' http:/ / www.nature.com / bjc / journal / v105 / n2s / full / bjc2011489a.html ' target='
_blank '> Parkin DM, Boyd L and Walker LC. The fraction of cancer attributable to lifestyle and environmental factors in the UK in 2010. Brit J Cancer (2011) 105, S77-S81</a>
					</p>
					</div>
				</div>
				<div class="simpleTabsContent thirdTab" >
					<div class="glossary" >
						<ul>
						    <li>
								<a href='#
'> 95% uncertainty intervals </a>
								<div>
								These provide a measure of the statistical uncertainty around the estimated relative risk. In statistical terms, it means that there is a 95% chance that the true relative risk lies between the uncertainty intervals. 

								</div>
							</li>
							<li>
								<a href='#
'> Absolute Risk </a>
								<div style='
display: block '>
								The actual risk of developing a health outcome, i.e. a 5% chance of developing cancer during a lifetime. 
								</div>
							</li>
							<li>
								<a href='#
'> Census ward (ward)</a>
								<div >
								These are areas defined by the Office of National Statistics for the collection of census data.  On average these contain around 6,000 people.
								</div>
							</li>
							<li>
								<a href='#
'> District	 </a>
								<div >
								  A local government area that can be sub-divided into wards and aggregated into counties (in urban areas districts are replaced by unitary authorities). 
								</div>
							</li>
							<li>
								<a href='#
'> Incidence </a>
								<div>
									The number of new cases of the health outcome in a fixed time period.
								</div>
							</li>
							<li>
								<a href='#
'> Ionising radiation </a>
								<div>
									Ionising radiation includes solar radiation and radon from certain types of rock as well as man-made sources such as nuclear reactions, X-rays, and CT scans. This type of radiation has greater potential to react with living tissue - potentially causing damage such as mutation and cancer - than non-ionising radiation such as electromagnetic field (EMF) radiation from mobile phones and overhead power lines.  In technical terms, ionising radiation is radiation that is capable of causing an electron to break away from an atom, causing the atom to become charged (it becomes an ion). 
								</div>
							</li>
							<li>
								<a href='#
'> Median </a>
								<div >
								The average (or median), the middle value separating the higher half of a data from the lower half.
								</div>
							</li>
							<li>
								<a href='#
'> Mortality </a>
								<div >
								The number of deaths of the health outcome in a fixed time period. 
								</div>
							</li>
							<li>
								<a href='#
'> Population Attributable Fraction (PAF) </a>
								<div >
									Amount or proportion of the health outcome  that could be prevented if the specific risk factor was reduced or eliminated.  The PAF is calculated separately for each risk factor but due to the fact that people are rarely ever exposed to only one risk factor this can add up to more than 100%. 
								</div>
							</li>
							<li>
								<a href='#
'> Prevalence  </a>
								<div >
									The number of people with the health outcome at a given time.
								</div>
							</li>
							
							<li>
								<a href='#
'> Rate</a>
								<div>The number of people developing the disease as a proportion of the number of people in the population, usually a number per 100,000 people. 
								</div>
							</li>
							
							<li>
								<a href='#
'> Relative Risk </a>
								<div>
								A comparison of the risk of an area (census ward) relative to average  risk of a health outcome in England and Wales.  The average risk for England and Wales is represented by 1 and a number higher than this indicates an area with a risk higher than the average, while a number smaller than 1 indicates a reduced risk compared to the average.
								</div>
							</li>
							<li>
								<a href='#
'> Risk factor </a>
								<div>
								A variable associated with an increased risk  of a health outcome.
								</div>
							</li>
							
						</ul>
					</div>
				</div>	        
		    </div>
		</div>
		<div id='
menu '>
				<div class='
gender ' id="sex">
					<div>
						<label for='
female '><img src='
images / female_m.png ' alt='
female ' /></label>
						<input id='
female ' type='
radio ' name='
sex ' value='
female ' style='
margin - left: 8px ' checked />
					</div>
					<div>
						<label for='
male ' ><img src='
images / male_m.png ' alt='
male ' /></label>
						<input id='
male ' type='
radio ' name='
sex ' value='
male '  />
					</div>
				</div>
				<dl id='
sample ' class='
dropdown '>
					<dt id="diseaselist">
						<a href='#
' >
							<span><?php echo $diseaseName;?></span>
							<div></div>
						</a>
					</dt>
					<dd>
					    <ul>
							<li><a href='
Lung / '>Lung cancer<span class='
value '></span></a></li>
							<li><a href='
Breast / '>Breast cancer<span class='
value '></span></a></li>
							<li><a href='
Prostate / '>Prostate cancer<span class='
value '></span></a></li>
							<li><a href='
Skin / '>Skin cancer<span class='
value '></span></a></li>
							<li><a href='
Bladder / '>Bladder cancer<span class='
value '></span></a></li>
							<li><a href='
Leukaemia / '>Leukaemia<span class='
value '></span></a></li>
							<li><a href='
Brain / '>Brain cancer<span class='
value '></span></a></li>
							<li><a href='
Liver / '>Liver cancer<span class='
value '></span></a></li>
							<li><a href='
Mesothelioma / '>Mesothelioma<span class='
value '></span></a></li>
							<li><a href='
CHD / '>Heart disease<span class='
value '></span></a></li>
							<li><a href='
COPD / '>COPD<span class='
value '></span></a></li>
							<li><a href='
Kidney / '>Kidney disease<span class='
value '></span></a></li>
							<li><a  href='
Stillbirths / '>Stillbirths<span class='
value '></span></a></li>
							<li><a  href='
Lowbirth / '>Low Birth Weight<span class='
value '></span></a></li>
							
					    </ul>
					</dd>
			    </dl>
			</div>
		<div id='
leftCol '>
			<div id="map"></div>
			<div id="graphLegend"></div>
			<div id='
figures '>
					<span id='
rr '>RR(na)</span><span id='
ci '></span>
			</div>
			<div id="showhide">
				<a href="#" class="shown"> Risk comparison within county <img src='
images / up_arrow.png ' id="arrow_chart" alt="arrow up"/></a>
			</div>
			<div id="ylbl_rr"></div>
			<div id="graph"></div>
		</div>
		<div id='
countiesTooltip ' class='
hoverBox '>
			<div class='
hoverCaption ' ></div>
		</div>
		
		<div id="myLayers"></div>
	
	</div>


<?php require("backend/getUrlsPlusWards.php"); ?>	

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
var s = document.getElementsByTagName( 'script' )[ 0 ];
s.parentNode.insertBefore( ga, s );
} )(); < /script>	

</body >
  < /html>