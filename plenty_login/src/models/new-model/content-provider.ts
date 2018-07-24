import { Serializable } from "./serializable";
import { Address } from "./address";
import { ContactPerson } from "./contact-person";
import { Category } from "./category";
import { Type } from "./type";

export class ContentProvider implements Serializable<ContentProvider> {
    guid: string;
    name: string;
    active: boolean;
    logo: string;
    address: Address;
    articles: Article[];
    contactPersons: ContactPerson[];

    deserialize(input) {
        this.guid = input.guid;
        this.name = input.name;
        this.active = input.active;
        this.logo = input.logo;
        this.address = new Address().deserialize(input.address);
        this.articles = input.articles.map(a => new Article().deserialize(a));
        this.contactPersons = input.contact_persons.map(cp => new ContactPerson().deserialize(cp));
        return this;
    }

    serialize() {
        return {
            guid: this.guid,
            name: this.name,
            active: this.active,
            logo: this.logo,
            address: this.address.serialize(),
            articles: this.articles ? this.articles.map(a => a.serialize()) : '',
            contact_persons: this.contactPersons.map(cp => cp.serialize())
        }
    }
}

export class Article implements Serializable<Article> {
    guid: string;
    name: string;
    active: boolean;
    faceValue: number;
    size: string;
    articleCategory: Category;
    articleType: Type;
    articlePhotos: ArticlePhoto[];

    deserialize(input) {
        this.guid = input.guid;
        this.name = input.name;
        this.active = input.active;
        this.faceValue = input.face_value;
        this.size = input.size;
        this.articleCategory = new Category().deserialize(input.article_category);
        this.articleType = new Type().deserialize(input.article_type);
        this.articlePhotos = input.article_photos.map(ap => new ArticlePhoto().deserialize(ap));
        return this;
    }

    serialize() {
        return {
            guid: this.guid,
            name: this.name,
            active: this.active,
            face_value: this.faceValue,
            size: this.size,
            article_category: this.articleCategory.serialize(),
            article_type: this.articleType.serialize(),
            article_photos: this.articlePhotos ? this.articlePhotos.map(ap => ap.serialize()) : ''
        }
    }
}

export class ArticlePhoto implements Serializable<ArticlePhoto> {
    guid: string;
    photo: string;

    deserialize(input) {
        this.guid = input.guid;
        this.photo = input.photo;
        return this;
    }

    serialize() {
        return {
            guid: this.guid,
            photo: this.photo
        }
    }
}