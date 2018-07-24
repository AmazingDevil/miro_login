import { Serializable } from "./serializable";

export class Address implements Serializable<Address> {
    type: string;
    name: string;
    street: string;
    zip: string;
    city: string;
    region: string;
    country: string;
    lat: string;
    lng: string;
    originalLat: string;
    originalLng: string;
    isPrimary: boolean;

    deserialize(input) {
        this.type = input.type;
        this.name = input.name;
        this.street = input.street;
        this.zip = input.zip;
        this.city = input.city;
        this.region = input.region;
        this.country = input.country;
        this.lat = input.lat;
        this.lng = input.lng;
        this.originalLat = input.original_lat;
        this.originalLng = input.original_lng;
        this.isPrimary = input.is_primary;
        return this;
    }

    serialize() {
        return {
            type: this.type,
            name: this.name,
            street: this.street,
            zip: this.zip,
            city: this.city,
            region: this.region,
            country: this.country,
            lat: this.lat,
            lng: this.lng,
            original_lat: this.originalLat,
            original_lng: this.originalLng,
            is_primary: this.isPrimary
        }
    }
}