using { RiskManagement as my } from '../db/schema.cds';

@path : '/service/RiskManagement'
service RiskManagement
{
    @odata.draft.enabled
    entity Risks1 as
        projection on my.Risks;

    @odata.draft.enabled
    entity Mitigations1 as
        projection on my.Mitigations;
}

annotate RiskManagement with @requires :
[
    'authenticated-user'
];
