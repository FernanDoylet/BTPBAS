sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'RiskManagement.Risks',
            componentId: 'Risks1List',
            contextPath: '/Risks1'
        },
        CustomPageDefinitions
    );
});