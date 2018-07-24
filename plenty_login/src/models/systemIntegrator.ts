export class pltSystemItegrator {
    guid: string;
    name: string;
    active: boolean;
    logo: string;
    selected: boolean;
    address: {
        name: string;
        street: string;
        zip: number;
        city: string;
        region: string;
        country: string;
        lat: number;
        long: number;
        is_primary: boolean;
    };

}

export class pltSystemItegratorModel {
    constructor() {
        this.integrators = new Array<pltSystemItegrator>();
    }

    integrators: Array<pltSystemItegrator>;
    selectedIntegrators: pltSystemItegrator;

    anySelected() {
        return this.integrators.filter(r => r.selected === true).length > 0;
    }

}
