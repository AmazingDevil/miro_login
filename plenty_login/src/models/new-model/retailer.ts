import { Serializable } from "./serializable";
import { Address } from "./address";
import { ContactPerson } from "./contact-person";
import { Category } from "./category";

export class Retailer implements Serializable<Retailer> {

    guid: string;
    name: string;
    active: boolean;
    logo: string;
    address: Address;
    contactPersons: ContactPerson[];
    retailerCategory: Category;

    deserialize(input) {
        this.guid = input.guid;
        this.name = input.name;
        this.active = input.active;
        this.logo = input.logo;
        this.address = new Address().deserialize(input.address);
        this.contactPersons = input.contact_persons.map(cp => new ContactPerson().deserialize(cp));
        this.retailerCategory = new Category().deserialize(input.retailer_category);
        return this;
    }

    serialize() {
        return {
            guid: this.guid,
            name: this.name,
            active: this.active,
            logo: this.logo,
            address: this.address.serialize(),
            contact_persons: this.contactPersons.map(cp => cp.serialize()),
            retailer_category: this.retailerCategory.serialize()
        }
    }
}