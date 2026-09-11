sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"eacm/rpdettmde/test/integration/pages/CommissionDetailList.gen",
	"eacm/rpdettmde/test/integration/pages/CommissionDetailObjectPage.gen"
], function (JourneyRunner, CommissionDetailListGenerated, CommissionDetailObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('eacm/rpdettmde') + '/test/flp.html#app-preview',
        pages: {
			onTheCommissionDetailListGenerated: CommissionDetailListGenerated,
			onTheCommissionDetailObjectPageGenerated: CommissionDetailObjectPageGenerated
        },
        async: true
    });

    return runner;
});

