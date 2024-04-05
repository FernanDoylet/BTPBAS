//@ui5-bundle RiskManagement/Risks/Component-preload.js
sap.ui.require.preload({
	"RiskManagement/Risks/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("RiskManagement.Risks.Component",{metadata:{manifest:"json"}})});
},
	"RiskManagement/Risks/i18n/i18n.properties":'# This is the resource bundle for RiskManagement.Risks\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Risks\n\n#YDES: Application description\nappDescription=RisksApplication\n\n#XFLD,25\nflpTitle=Risks\n',
	"RiskManagement/Risks/manifest.json":'{"_version":"1.48.0","sap.app":{"id":"RiskManagement.Risks","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.13.1","toolsId":"65cd63c3-a9d6-4386-965f-7e51cd9d2032"},"dataSources":{"mainService":{"uri":"service/RiskManagement/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"RiskManagementRisks-display":{"semanticObject":"RiskManagementRisks","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.108.7","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"RiskManagement.Risks.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"Risks1List","target":"Risks1List"},{"pattern":"Risks1({key}):?query:","name":"Risks1ObjectPage","target":"Risks1ObjectPage"}],"targets":{"Risks1List":{"type":"Component","id":"Risks1List","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Risks1","variantManagement":"Page","navigation":{"Risks1":{"detail":{"route":"Risks1ObjectPage"}}}}}},"Risks1ObjectPage":{"type":"Component","id":"Risks1ObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Risks1"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"lcap.RiskManagement"}}'
});
//# sourceMappingURL=Component-preload.js.map
