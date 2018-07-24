import { CommunicationDetail, ICommunicationDetail } from './communicationDetail';

export interface IContactPerson {
    id?: number;
    salutation?: string;
    firstName?: string;
    lastName?: string;
    position?: string;
    department?: string;
    communicationDetails?: ICommunicationDetail[];
}

export class ContactPerson implements IContactPerson {
    id?: number;
    salutation?: string;
    firstName?: string;
    lastName?: string;
    position?: string;
    department?: string;
    communicationDetails?: CommunicationDetail[];

    constructor(element: any) {
        this.id = element.id || null;
        this.salutation = element.salutation || '';
        this.firstName = element.first_name || '';
        this.lastName = element.last_name || '';
        this.position = element.position || '';
        this.department = element.department || '';
        element.communication_details !== undefined && element.communication_details.length !== 0 ? this.communicationDetails = element.communication_details
        .map(detail => {
            return new CommunicationDetail(detail);
        }) : new Array<CommunicationDetail>();
    }
}