import { Serializable } from "./serializable";

export class Type implements Serializable<Type>{
    id: number;
    name: string;

    constructor(id?: number, name?: string) {
        this.id = id;
        this.name = name;
    }

    deserialize(input) {
        this.id = input.id;
        this.name = input.name;
        return this;
    }

    serialize() {
        return {
            id: this.id,
            name: this.name
        }
    }
}

export class FixtureType extends Type {
  guid: string;
  active: boolean;

  constructor(id?: number, name?: string, guid?: string, active?: boolean) {
    super(id, name);
    this.guid = guid;
    this.active = active;
  }

  deserialize(input) {
    super.deserialize(input);
    this.guid = input.guid;
    this.active = input.active;
    return this;
  }

  serialize() {
    return {
      id: this.id,
      name: this.name,
      guid: this.guid,
      active: this.active
    };
  }

}
