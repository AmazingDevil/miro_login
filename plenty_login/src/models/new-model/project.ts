import { Serializable } from "../new-model/serializable";
import { Retailer } from "../new-model/retailer";
import { SystemIntegrator } from "../new-model/system-integrator";
import { ContentProvider } from "../new-model/content-provider";
import { Status } from "./status";
import { Type } from "./type";

export class Project implements Serializable<Project>{
    guid: string;
    name: string;
    active: boolean;
    start: ProjectDate;
    end: ProjectDate;
    hasQualityControl: boolean;
    projectType: Type;
    projectStatus: Status;
    projectAccounts: Map<string, ProjectAccountDetails[]>;
    doneVisits: string;
    states: any[]; // TODO !!!
    businessPartners: BusinessPartners;

    deserialize(input) {
        this.guid = input.guid;
        this.name = input.name;
        this.active = input.active;
        this.start = new ProjectDate().deserialize(input.start);
        this.end = new ProjectDate().deserialize(input.end);
        this.hasQualityControl = input.has_quality_control;
        this.projectType = new Type().deserialize(input.project_type);
        this.projectStatus = new Status().deserialize(input.project_status);

        this.projectAccounts = new Map<string, ProjectAccountDetails[]>();
        for (var prop in input.project_accounts) {
            if (input.project_accounts.hasOwnProperty(prop)) {
                this.projectAccounts.set(prop, input.project_accounts[prop].map(json => new ProjectAccountDetails().deserialize(json)));
            }
        }

        this.doneVisits = input.done_visits;

        console.log('Deserialized Project: ', this);
        return this;
    }

    serialize() {
        return {
            guid: this.guid,
            name: this.name,
            active: this.active,
            start: this.start.serialize(),
            end: this.end.serialize(),
            has_quality_control: this.hasQualityControl,
            project_type: this.projectType.serialize(),
            project_status: this.projectStatus.serialize(),
            team_members: {  // TODO - unify field names coming from BackEnd (once it's project_accounts, and some other time it's team_members)
                projectmanager: this.projectAccounts.get(ProjectAccountRoles.projectManager).map(pa => pa.serialize()),
                projectagent: this.projectAccounts.get(ProjectAccountRoles.projectAgent).map(pa => pa.serialize()),
                fieldmanager: this.projectAccounts.get(ProjectAccountRoles.fieldManager).map(pa => pa.serialize()),
                qualitymanager: this.projectAccounts.get(ProjectAccountRoles.qualityManager).map(pa => pa.serialize()),
                qualityagent: this.projectAccounts.get(ProjectAccountRoles.qualityAgent).map(pa => pa.serialize())
            },
            done_visits: this.doneVisits,
            states: this.states,
            business_partners: this.businessPartners.serialize()
        }
    }
}

export class ProjectDate implements Serializable<ProjectDate>{
    date: string;
    timezoneType: number;
    timezone: string;

    deserialize(input) {
        this.date = input.date;
        this.timezoneType = input.timezone_type;
        this.timezone = input.timezone;
        return this;
    }

    serialize() {
        return {
            date: this.date,
            timezone_type: this.timezoneType,
            timezone: this.timezone
        }
    }
}

export class ProjectAccountDetails implements Serializable<ProjectAccountDetails>{
    accountTypesId: number;
    guid: string;
    username: string;
    email: string;
    name: string;

    constructor(jsonObject?: any) {
        if (jsonObject != undefined) {
            this.accountTypesId = jsonObject.account_types_id;
            this.guid = jsonObject.guid;
            this.username = jsonObject.username;
            this.email = jsonObject.email;
            this.name = jsonObject.name;
        }
        else {
            this.accountTypesId = undefined;
            this.guid = undefined;
            this.username = undefined;
            this.email = undefined;
            this.name = undefined;
        }
    }

    deserialize(input) {
        this.accountTypesId = input.account_types_id;
        this.email = input.email;
        this.guid = input.guid;
        this.name = input.name;
        this.username = input.username;
        return this;
    }

    serialize() {
        return {
            account_types_id: this.accountTypesId,
            guid: this.guid,
            username: this.username,
            email: this.email,
            name: this.name
        }
    }
}

export const enum ProjectAccountRoles {
    master = "master", admin = "admin", projectLeader = "projectleader", projectManager = "projectmanager", projectAgent = "projectagent", fieldManager = "fieldmanager",
    regionManager = "regionmanager", qualityManager = "qualitymanager", qualityAgent = "qualityagent", checkerManager = "checkermanager", checker = "checker",
    merchandiser = "merchandiser", customer = "customer"
}

export class BusinessPartners implements Serializable<BusinessPartners> {
    retailer: Retailer;
    systemIntegrators: SystemIntegrator[];
    contentProviders: ContentProvider[];

    deserialize(input) {
        this.retailer = new Retailer().deserialize(input.retailer);
        this.systemIntegrators = input.system_integrators.map(si => new SystemIntegrator().deserialize(si));
        this.contentProviders = input.content_providers.map(cp => new ContentProvider().deserialize(cp));
        return this;
    }

    serialize() {
        return {
            retailer: this.retailer.serialize(),
            system_integrators: this.systemIntegrators.map(si => si.serialize()),
            content_providers: this.contentProviders.map(cp => cp.serialize())
        }
    }
}