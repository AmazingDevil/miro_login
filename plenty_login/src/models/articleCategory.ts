export interface IArticleCategory {
    id: number;
    name: string;
}

export class ArticleCategory implements IArticleCategory {
    id: number;
    name: string;

    constructor(element: any) {
        this.id = element.id || null;
        this.name = element.name || '';
    }
}