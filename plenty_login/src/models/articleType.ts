export interface IArticleType {
    id: number;
    name: string;
}

export class ArticleType implements IArticleType {
    id: number;
    name: string;

    constructor(element: any) {
        this.id = element.id || null;
        this.name = element.name || '';
    }
}