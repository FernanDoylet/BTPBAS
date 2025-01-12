sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'RiskManagement.Risks',
            componentId: 'Risks1ObjectPage',
            contextPath: '/Risks1'
        },
        CustomPageDefinitions
    );
});