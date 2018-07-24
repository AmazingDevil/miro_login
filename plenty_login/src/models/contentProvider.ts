import { ProviderAddress, IProviderAddress } from "./providerAddress";
import { Article, IArticle } from "./article";
import { ContactPerson, IContactPerson } from "./contactPerson";

export interface IContentProvider {
    guid?: string;
    name?: string;
    active?: boolean;
    logo?: string;
    address?: IProviderAddress;
    articles?: IArticle[];
    contactPersons?: IContactPerson[];
}

export class ContentProvider implements IContentProvider {
    guid?: string;
    name?: string;
    active?: boolean;
    logo?: string;
    address?: ProviderAddress;
    articles?: Article[];
    contactPersons?: ContactPerson[];

    constructor(element: any = {}) {
        this.guid = element.guid || '';
        this.name = element.name || '';
        this.active = element.active || false;
        this.logo = element.logo || '';
        this.address = new ProviderAddress(element.address || {});
        element.articles !== undefined && element.articles.length !== 0 ? this.articles = element.articles.map(article => {
            return new Article(article);
        }) : new Array<Article>();
        element.contact_person !== undefined && element.contact_person.length !== 0 ? this.contactPersons = element.contact_person
        .map(contact => {
            return new ContactPerson(contact);
        }) : new Array<ContactPerson>();
    }
}