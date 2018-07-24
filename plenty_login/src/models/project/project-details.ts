export class pltPojectDetailItem {
    guid: string; // ID used for calling this project
    name: string; // Name of the project
    start: Date; // Start date of the project
    end: Date; // End date of the project
    done_visits: number; // % calculation of done Visits
    retailer:  {  // Retailer object
        name: string, // Retailer name
        partners: [{  // System integrators as array
            system_integrators: string, // System integrator name . ex SP1
            cotent_providers: Array<string>, // Content providers array. Ex CP1
        }]
    };
    selected: boolean;
    states;
}