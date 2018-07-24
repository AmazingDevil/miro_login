
export interface IProviderAddress {
    type?: string;
    name?: string;
    street?: string;
    zip?: string;
    city?: string;
    region?: string;
    country?: string;
    lat?: string;
    lng?: string;
    originalLat?: string;
    originalLng?: string;
    isPrimary?: boolean;
}

export class ProviderAddress implements IProviderAddress {
    type?: string;
    name?: string;
    street?: string;
    zip?: string;
    city?: string;
    region?: string;
    country?: string;
    lat?: string;
    lng?: string;
    originalLat?: string;
    originalLng?: string;
    isPrimary?: boolean;

    constructor(element: any) {
        this.type = element.type || '';
        this.name =  element.name || '';
        this.street = element.street || '';
        this.zip = element.zip || '';
        this.city = element.city || '';
        this.region = element.region || '';
        this.country = element.country || '';
        this.lat = element.lat || '';
        this.lng = element.lng || '';
        this.originalLat = element.original_lat || '';
        this.originalLng = element.original_lng || '';
        this.isPrimary = element.is_primary || false;
    }
}