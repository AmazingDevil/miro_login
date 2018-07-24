export interface IArticlePhoto {
    guid: string;
    photo: string;
}

export class ArticlePhoto implements IArticlePhoto {
    guid: string;
    photo: string;

    constructor (element: any){
        this.guid = element.guid || '';
        this.photo = element.photo || '';
    }
}