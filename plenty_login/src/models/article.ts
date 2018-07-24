import { ArticleCategory, IArticleCategory } from './articleCategory';
import { ArticleType, IArticleType } from './articleType';
import { ArticlePhoto, IArticlePhoto } from './articlePhoto';

export interface IArticle {
    guid?: string;
    name?: string;
    active?: boolean;
    faceValue?: number;
    size?: number;
    articleCategory?: IArticleCategory;
    articleType?: IArticleType;
    articlePhotos?: IArticlePhoto[];
}

export class Article implements IArticle {
    guid?: string;
    name?: string;
    active?: boolean;
    faceValue?: number;
    size?: number;
    articleCategory?: IArticleCategory;
    articleType?: IArticleType;
    articlePhotos?: IArticlePhoto[];

    constructor(element: any) {
        this.guid = element.guid || '';
        this.name = element.name || '';
        this.active = element.active || false;
        this.faceValue = element.face_value || null;
        this.size = element.size || null;
        this.articleCategory = new ArticleCategory(element.article_category);
        this.articleType = new ArticleType(element.article_type);
        element.article_photos !== undefined && element.article_photos.length !== 0 ? this.articlePhotos = element.article_photos
        .map(photo => {
            return new ArticlePhoto(photo);
        }) : new Array<ArticlePhoto>();
    }
}