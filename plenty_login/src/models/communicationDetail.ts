export interface ICommunicationDetail {
    id: number;
    type: string;
    value: string;
}

export class CommunicationDetail implements ICommunicationDetail {
    id: number;
    type: string;
    value: string;

    constructor(element: any) {
        this.id = element.id || null;
        this.type = element.type || '';
        this.value = element.value || '';
    }
}