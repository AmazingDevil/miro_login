import { ContentProvider, IContentProvider } from './contentProvider';

export interface IContentProviderTable extends IContentProvider {
    selected: boolean;
}

export class ContentProviderTable extends ContentProvider implements IContentProviderTable {
    selected: boolean;

    constructor(element: any){
        super(element);
    }
}