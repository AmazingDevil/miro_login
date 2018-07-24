import { contactDetail } from './contactDetailModel'
export class contactForm {
    salutation: 'string';
    first_name: 'string';
    last_name: 'string';
    position: 'string';
    department: 'string';
    communication_details: contactDetail[];

    constructor () {
        this.communication_details = [];
    }
}

