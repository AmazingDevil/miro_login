import { Serializable } from "./serializable";
import { FixtureType } from "./type";

export class Fixture implements Serializable<Fixture> {
  guid: string;
  name: string;
  active: boolean;
  planogram: string;
  photo_count_min: number;
  photo_count_max: number;
  fixture_type: FixtureType;


  deserialize(input) {
      this.guid = input.guid;
      this.name = input.name;
      this.active = input.active;
      this.planogram = input.planogram;
      this.photo_count_min = input.photo_count_min;
      this.photo_count_max = input.photo_count_max;
      this.fixture_type = new FixtureType().deserialize(input.fixture_type);

      return this;
  }

  serialize() {
      return {
          guid: this.guid,
          name: this.name,
          active: this.active,
          planogram: this.planogram,
          photo_count_min: this.photo_count_min,
          photo_count_max: this.photo_count_max,
          fixture_type: this.fixture_type.serialize()
      }
  }
}
