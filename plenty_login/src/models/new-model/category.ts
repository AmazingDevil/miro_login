import { Serializable } from "./serializable";

export class Category implements Serializable<Category> {
    id: number;
    name: string;

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