( function() {

  if ( typeof EHA === 'undefined' ) {
    var EHA = {};
  }

  EHA.diseases = {
    "Stillbirths male": {
      'field': 'stillbirth_m',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/330/{z}/{x}/{y}',
      'min': [],
      'max': []
    },

    "Stillbirths female": {
      'field': 'stillbirth_f',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/329/{z}/{x}/{y}',
      'min': [],
      'max': []
    },
    "Low Birth Weight male": {
      'field': 'lowbwght_m',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/320/{z}/{x}/{y}',
      'min': [ '00AWFY', '34', 'Greater London' ],
      'max': [ '00FNNW', '46', 'Leicester Unitary Authority' ]
    },

    "Low Birth Weight female": {
      'field': 'lowbwght_f',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/319/{z}/{x}/{y}',
      'min': [ '00AWFY,34,Greater London' ],
      'max': [ '00FNNZ,46,Leicester Unitary Authority' ]
    },

    "Lung cancer male": {
      'field': 'lung_m',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/322/{z}/{x}/{y}',
      'min': [ '00AEGX', '34', 'Greater London' ],
      'max': [ '00BYFQ', '51', 'Merseyside' ],
      'riskFactorTitle': 'The fraction of lung cancer attributable to lifestyle and environmental factors in males in the UK in 2010 ',
      'riskFactors': {
        "Tobacco smoking": [
                    [ 1, 87.3 ]
                ],
        "Occupational exposures": [
                    [ 2.1, 20.5 ]
                ],
        "Deficient intake Fruit&Veg": [
                    [ 3.2, 8.5 ]
                ],
        "Ionising radiation": [
                    [ 4.3, 4.2 ]
                ],
        "Others incl. Env. factors": [
                    [ 5.4, 8.9 ]
                ]
      }
    },

    "Lung cancer female": {
      'field': 'lung_f',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/321/{z}/{x}/{y}',
      'min': [ '00FNNW', '46', 'Leicester Unitary Authority' ],
      'max': [ '00BYFQ', '51', 'Merseyside' ],
      'riskFactorTitle': 'The fraction of lung cancer attributable to lifestyle and environmental factors in females in the UK in 2010 ',
      'riskFactors': {
        "Tobacco smoking": [
                    [ 1, 83.6 ]
                ],
        "Occupational exposures": [
                    [ 2.1, 9.3 ]
                ],
        "Deficient intake Fruit&Veg": [
                    [ 3.2, 4.3 ]
                ],
        "Ionising radiation ": [
                    [ 4.3, 5.4 ]
                ],
        "Others incl. Env. factors": [
                    [ 5.4, 13.5 ]
                ]
      }
    },

    "Leukaemia male": {
      'field': 'leukaemia_m',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/316/{z}/{x}/{y}',
      'min': [ '00CWFU', '100', 'West Midlands' ],
      'max': [ '00NSRF', '67', 'Pembrokeshire' ],
      'riskFactorTitle': 'The fraction of leukaemia attributable to lifestyle and environmental factors in males in the UK in 2010',
      'riskFactors': {
        "Tobacco smoking": [
                    [ 1, 8.4 ]
                ],
        "Ionising radiation": [
                    [ 2.1, 7.8 ]
                ],
        "Occupational exposure": [
                    [ 3.2, 0.9 ]
                ]
      }
    },

    "Leukaemia female": {
      'field': 'leukaemia_f',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/315/{z}/{x}/{y}',
      'min': [ '00CBFL', '51', 'Merseyside' ],
      'max': [ '40UCGS', '79', 'Somerset' ],
      'riskFactorTitle': 'The fraction of leukaemia attributable to lifestyle and environmental factors in females in the UK in 2010',
      'riskFactors': {
        "Tobacco smoking": [
                    [ 1, 3 ]
                ],
        "Ionising radiation": [
                    [ 2.1, 10.4 ]
                ],
        "Occupational exposure": [
                    [ 3.2, 0.5 ]
                ]
      }
    },

    "Breast cancer male": {
      'field': 'breast_m',
      'url': '',
    },

    "Breast cancer female": {
      'field': 'breast_f',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/304/{z}/{x}/{y}',
      'min': [ '00NCRP', '36', 'Gwynedd' ],
      'max': [ '35UCGD', '63', 'Northumberland' ],
      'riskFactorTitle': 'The fraction of breast cancer attributable to lifestyle and environmental factors in females in the UK in 2010',
      'riskFactors': {
        "Alcohol": [
                    [ 1, 6.4 ]
                ],
        "Overweight and Obesity": [
                    [ 2.1, 8.7 ]
                ],
        "≤30min exercise 5 times p/w": [
                    [ 3.2, 3.4 ]
                ],
        "Post-menopausal hormones": [
                    [ 4.3, 3.2 ]
                ],
        "Ionising radiation": [
                    [ 5.4, 0.9 ]
                ],
        "< 6 months breast feeding": [
                    [ 6.5, 3.1 ]
                ]
      }
    },

    "Prostate cancer male": {
      'field': 'prostate_m',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/328/{z}/{x}/{y}',
      'min': [ '00ACGE', '34', 'Greater London' ],
      'max': [ '00NCQA', '36', 'Gwynedd' ]
    },

    "Prostate cancer female": {
      'field': 'prostate_f',
      'url': ''
    },

    "Bladder cancer male": {
      'field': 'bladder_m',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/301/{z}/{x}/{y}',
      'min': [ '33UEHK', '58', 'Norfolk' ],
      'max': [ '00NENT', '18', 'Conwy' ],
      'riskFactorTitle': 'The fraction of bladder cancer attributable to lifestyle and environmental factors in males in the UK in 2010',
      'riskFactors': {
        "Tobacco smoking": [
                    [ 1, 37.5 ]
                ],
        "Ionising radiation": [
                    [ 2.1, 2.6 ]
                ],
        "Occupational exposure": [
                    [ 3.2, 7.1 ]
                ]
      }
    },

    "Bladder cancer female": {
      'field': 'bladder_f',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/300/{z}/{x}/{y}',
      'min': [ '29UEGS', '43', 'Kent' ],
      'max': [ '00PBPS', '8', 'Bridgend' ],
      'riskFactorTitle': 'The fraction of bladder cancer attributable to lifestyle and environmental factors in females in the UK in 2010',
      'riskFactors': {
        "Tobacco smoking": [
                    [ 1, 34.4 ]
                ],
        "Ionising radiation": [
                    [ 2.1, 2.3 ]
                ],
        "Occupational exposure": [
                    [ 3.2, 1.9 ]
                ]
      }
    },


    "Brain cancer male": {
      'field': 'brain_m',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/303/{z}/{x}/{y}',
      'min': [ '00HGND', '69', 'Plymouth Unitary Authority' ],
      'max': [ '29UNGR', '43', 'Kent' ]
    },

    "Brain cancer female": {
      'field': 'brain_f',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/302/{z}/{x}/{y}',
      'min': [ '00CSFR', '100', 'West Midlands' ],
      'max': [ '00NEPK', '18', 'Conwy' ]
    },

    "COPD male": {
      'field': 'copd_m',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/306/{z}/{x}/{y}',
      'min': [ '00BKGC', '34', 'Greater London' ],
      'max': [ '43UCFR', '88', 'Surrey' ]
    },

    "COPD female": {
      'field': 'copd_f',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/305/{z}/{x}/{y}',
      'min': [ '40UFGG', '79', 'Somerset' ],
      'max': [ '30UPHB', '45', 'Lancashire' ]
    },


    "Heart disease male": {
      'field': 'ihd_m',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/310/{z}/{x}/{y}',
      'min': [ '00AWGM', '34', 'Greater London' ],
      'max': [ '36UEHC', '61', 'North Yorkshire' ]
    },

    "Heart disease female": {
      'field': 'ihd_f',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/309/{z}/{x}/{y}',
      'min': [ '00AWFZ', '34', 'Greater London' ],
      'max': [ '00EHNU', '22', 'Darlington Unitary Authority' ]
    },

    "Kidney disease male": {
      'field': 'kidney_m',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/312/{z}/{x}/{y}',
      'min': [ '18UBHR', '26', 'Devon', 'kidney_m' ],
      'max': [ '09UEHB', '2', 'Bedfordshire' ]
    },

    "Kidney disease female": {
      'field': 'kidney_f',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/311/{z}/{x}/{y}',
      'min': [ '00HHMN', '94', 'Torbay Unitary Authority' ],
      'max': [ '00KAMT', '49', 'Luton Unitary Authority' ]
    },


    "Liver cancer male": {
      'field': 'liver_m',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/318/{z}/{x}/{y}',
      'min': [ '00FCNA', '59', 'North East Lincolnshire Unitary Authority' ],
      'max': [ '13UBHK', '17', 'Cheshire' ],
      'riskFactorTitle': 'The fraction of liver cancer attributable to lifestyle and environmental factors in males in the UK in 2010',
      'riskFactors': {
        "Tobacco smoking": [
                    [ 1, 27.3 ]
                ],
        "Alcohol consumption": [
                    [ 2.1, 11.4 ]
                ],
        "Infections": [
                    [ 3.2, 19.6 ]
                ],
        "Ionising radiation": [
                    [ 4.3, 0.6 ]
                ],
        "Occupational exposures": [
                    [ 5.4, 0.2 ]
                ]
      }
    },

    "Liver cancer female": {
      'field': 'liver_f',
      'url': "http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/317/{z}/{x}/{y}",
      'min': [ '22UNHL', '31', 'Essex' ],
      'max': [ '00CBFF', '51', 'Merseyside' ],
      'riskFactorTitle': 'The fraction of liver cancer attributable to lifestyle and environmental factors in females in the UK in 2010',
      'riskFactors': {
        "Tobacco smoking": [
                    [ 1, 15.3 ]
                ],
        "Alcohol consumption": [
                    [ 2.1, 5 ]
                ],
        "Infections": [
                    [ 3.2, 9.3 ]
                ],
        "Ionising radiation": [
                    [ 4.3, 1.1 ]
                ],
        "Occupational exposure": [
                    [ 5.4, 0.1 ]
                ]
      }
    },

    "Skin cancer male": {
      'field': 'melanoma_m',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/324/{z}/{x}/{y}',
      'min': [ '00BBGN', '34', 'Greater London' ],
      'max': [ '00HGNN', '69', 'Plymouth Unitary Authority' ],
      'riskFactorTitle': 'The fraction of skin cancer attributable to UV radiation in the UK in males and females in 2010',
      'riskFactors': {
        "UV Radiation Males": [
                    [ 1, 89.8 ]
                ],
        "UV Radiation Females": [
                    [ 2.1, 82.4 ]
                ],
        "UV Radiation Both": [
                    [ 3.2, 85.9 ]
                ]
      }
    },

    "Skin cancer female": {
      'field': 'melanoma_f',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/323/{z}/{x}/{y}',
      'min': [ '00ASGS', '34', 'Greater London' ],
      'max': [ '00HGNN', '69', 'Plymouth Unitary Authority' ],
      'riskFactorTitle': 'The fraction of skin cancer attributable to UV radiation in the UK in males and females in 2010',
      'riskFactors': {
        "UV Radiation Males": [
                    [ 1, 89.8 ]
                ],
        "UV Radiation Females": [
                    [ 2.1, 82.4 ]
                ],
        "UV Radiation Both": [
                    [ 3.2, 85.9 ]
                ]
      }
    },

    "Mesothelioma male": {
      'field': 'mesothelioma_m',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/326/{z}/{x}/{y}',
      'min': [ '00NCQK', '36', 'Gwynedd' ],
      'max': [ '16UCFW', '21', 'Cumbria' ],
      'riskFactorTitle': 'The fraction of mesothelioma attributable to occupational factors in males and females in the UK in 2010',
      'riskFactors': {
        "Occupation Males": [
                    [ 1, 97 ]
                ],
        "Occupation Females": [
                    [ 2.1, 82.5 ]
                ],
        "Occupation Both": [
                    [ 3.2, 94.4 ]
                ]
      }
    },

    "Mesothelioma female": {
      'field': 'mesothelioma_f',
      'url': 'http://tilesic.cloudmade.com/a332b239f24d4e2e86e806d466463f0e/tiles/325/{z}/{x}/{y}',
      'min': [ '00CNFR', '100', 'West Midlands' ],
      'max': [ '00ABGC', '34', 'Greater London' ],
      'riskFactorTitle': 'The fraction of mesothelioma attributable to occupational factors in females and males in the UK in 2010',
      'riskFactors': {
        "Occupation Males": [
                    [ 1, 97 ]
                ],
        "Occupation Females": [
                    [ 2.1, 82.5 ]
                ],
        "Occupation Both": [
                    [ 3.2, 94.4 ]
                ]
      }
    }
  };

  EHA.wardSelected = false;

  EHA.current = {
    'disease': 'Lung cancer',
    'gender': 'female'
  };

  EHA.version = "0.1";

  window.EHA = EHA;

}() );