export class pltRetailer {
    guid: string; // ID used for retailer
    name: string; // Name of the retailer
    active: boolean; // active retailers are displayed??
    logo: string; // logo img url
    address: {
        name: string; //retailer location name
        street: string; // retailer location street
        zip: number; //retailer location zip
        city: string; //retailer location city
        region: string; //retailer location region
        country: string; //retailer location country
        lat: number; //retailer location latitude
        long: number; //retailer location longitude
        is_primary: boolean; // primary address ??
    };
    selected: boolean;
}

export class retailersModel {
    constructor() {
        this.retailers = new Array <pltRetailer>();
        this.selectedRetailer = new pltRetailer();
     }

    retailers: Array <pltRetailer>;
    selectedRetailer: pltRetailer;

    anySelected() {
        return this.retailers.filter(r => r.selected === true).length > 0;
    }

}
