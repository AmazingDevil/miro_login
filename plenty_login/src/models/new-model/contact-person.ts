import { Serializable } from "./serializable";

export class ContactPerson implements Serializable<ContactPerson> {
    guid: string;
    salutation: string;
    firstName: string;
    lastName: string;
    position: string;
    department: string;
    communicationDetails: CommunicationDetail[];

    deserialize(input) {
        this.guid = input.guid;
        this.salutation = input.salutation;
        this.firstName = input.first_name;
        this.lastName = input.last_name;
        this.position = input.position;
        this.department = input.department;
        this.communicationDetails = input.communication_details.map(cd => new CommunicationDetail().deserialize(cd))
        return this;
    }

    serialize() {
        return {
            guid: this.guid,
            salutation: this.salutation,
            first_name: this.firstName,
            last_name: this.lastName,
            position: this.position,
            department: this.department,
            communication_details: this.communicationDetails.map(cd => cd.serialize())
        }
    }
}

export class CommunicationDetail implements Serializable<CommunicationDetail> {
    id: number;
    type: string;
    value: string;

    deserialize(input) {
        this.id = input.id;
        this.type = input.type;
        this.value = input.value;
        return this;
    }

    serialize() {
        return {
            id: this.id,
            type: this.type,
            value: this.value
        }
    }
}