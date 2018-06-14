export class Restaurant {
    city;
    created;
    created_by;
    id;
    lat;
    lng;
    name;
    phone;
    state;
    street_one;
    street_two;
    zip_code;

    constructor(private newRestaurant: any) {
        this.setProperties(newRestaurant);        
    }

    private setProperties(newRestaurant) {
        this.city = newRestaurant.city;
        this.created = newRestaurant.created;
        this.created_by = newRestaurant.created_by;
        this.id = newRestaurant.id;
        this.lat = parseFloat(newRestaurant.lat);
        this.lng = parseFloat(newRestaurant.lng);
        this.name = newRestaurant.name;
        this.phone = newRestaurant.phone;
        this.state = newRestaurant.state;
        this.street_one = newRestaurant.street_one;
        this.street_two = newRestaurant.street_two;
        this.zip_code = newRestaurant.zip_code;
    }
}


