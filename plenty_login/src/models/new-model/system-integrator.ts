import { Serializable } from "./serializable";
import { Address } from "./address";
import { ContactPerson } from "./contact-person";

export class SystemIntegrator implements Serializable<SystemIntegrator> {

    guid: string;
    name: string;
    active: boolean;
    logo: string;
    selected: boolean;
    address: Address;
    contactPersons: ContactPerson[];

    deserialize(input) {
        this.guid = input.guid;
        this.name = input.name;
        this.active = input.active;
        this.logo = input.logo;
        this.address = new Address().deserialize(input.address);
        this.contactPersons = input.contact_persons.map(cp => new ContactPerson().deserialize(cp));
        return this;
    }

    serialize() {
        return {
            guid: this.guid,
            name: this.name,
            active: this.active,
            logo: this.logo,
            selected: this.selected,
            address: this.address.serialize(),
            contact_persons: this.contactPersons.map(cp => cp.serialize())
        }
    }
}