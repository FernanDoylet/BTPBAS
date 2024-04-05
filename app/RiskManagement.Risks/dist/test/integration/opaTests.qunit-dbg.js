sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'RiskManagement/Risks/test/integration/FirstJourney',
		'RiskManagement/Risks/test/integration/pages/Risks1List',
		'RiskManagement/Risks/test/integration/pages/Risks1ObjectPage'
    ],
    function(JourneyRunner, opaJourney, Risks1List, Risks1ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('RiskManagement/Risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisks1List: Risks1List,
					onTheRisks1ObjectPage: Risks1ObjectPage
                }
            },
            opaJourney.run
        );
    }
);