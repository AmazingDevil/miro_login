export class pltfixture {
    guid: string; // ID used for fixture
    name: string; // Name of the fixture
    planogram: string;
    type: string;
    selected: boolean;
}

export class fixturesModel{
    constructor() {
        this.fixtures= new Array <pltfixture>();
     }

    fixtures: Array <pltfixture>;
    selectedfixture: pltfixture;

    anySelected() {
        return this.fixtures.filter(r => r.selected === true).length > 0;
    }

}
