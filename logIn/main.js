// Rental class (with attributes)
function Rental(country, city, type, title, price, imageUrl){
    this.country = country;
    this.city = city;
    this.type = type;
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
}

// object containing all possible countries
var countries = {
    France: "France",
    Australia: "Australia",
    Dubai: "Dubai",
    Netherlands: "Netherlands"
}

// object containing all possible rental types
var rentalTypes = {
    Castle: "Castle",
    Houseboat: "Houseboat",
    Apartment: "Apartment",
    Villa: "Villa",
}

// Harcoded data (rentals):
// france
var france1 = new Rental(countries.France, "Carlux", rentalTypes.Castle, "Chateau De Ruffiac", 715, "https://www.oliverstravels.com/uploads/herder_image/crop_9999_1000_Chateau-de-Ruffiac-Dordogne-Fr-Olivers-Travels-1.jpg");
var france2 = new Rental(countries.France, "Carlux", rentalTypes.Castle, "Domaine Du Pont", 5500, "https://www.oliverstravels.com/uploads/herder_image/crop_720_440_La-Maison-des-Fleurs-Atlantic-Coast-Olivers-Travels-1.jpg");
var france3 = new Rental(countries.France, "Atlantic Coast", rentalTypes.Villa, "La Maison Des Fleurs ", 1300, "https://www.oliverstravels.com/uploads/herder_image/crop_720_440_Chateau-Du-Chevalier-Only-Brittany-Olivers-Travels__1_.jpg");

// Australia
var australia1 = new Rental(countries.Australia, "Sydney", rentalTypes.Apartment, "Absolute Waterfront", 650, "https://pictures.luxuryretreats.com/122208/Sydney_AbsoluteWaterfront-1.jpg");
var australia2 = new Rental(countries.Australia, "Sydney", rentalTypes.Villa, "Vaucluse Luxury", 750, "https://pictures.luxuryretreats.com/121296/Sydney_VaucluseHopetoun_01.jpg");
var australia3 = new Rental(countries.Australia, "Melbourne", rentalTypes.Villa, "Bronte Sands", 425, "https://pictures.luxuryretreats.com/121850/Sydney_BronteSands-1.jpg");

// Dubai
var dubai1 = new Rental(countries.Dubai, "Downtown", rentalTypes.Apartment, "Unique Luxury Apartment Downtown", 860, "https://pictures.luxuryretreats.com/120330/Dubai_UniqueLuxuryApartmentDowntown_01.jpg");
var dubai2 = new Rental(countries.Dubai, "Downtown", rentalTypes.Villa, "Jumeirah Villa", 1000, "https://pictures.luxuryretreats.com/119472/Dubai_Private4BedVilla_01.jpg");
var dubai3 = new Rental(countries.Dubai, "The Palm Jumeirah", rentalTypes.Villa, "Signature Villa", 920, "https://pictures.luxuryretreats.com/121444/Dubai_SignatureVilla_50.jpg");

// Netherlands
var netherlands1 = new Rental(countries.Netherlands, "Amsterdamn", rentalTypes.Houseboat, "Experience a houseboat in Amsterdam", 370, "https://a0.muscache.com/im/pictures/95957379/b725845f_original.jpg?aki_policy=xx_large");
var netherlands2 = new Rental(countries.Netherlands, "Amsterdam", rentalTypes.Apartment, "Lovely hideout in the middle of AMS", 450, "https://a0.muscache.com/im/pictures/8cbb08e8-257c-45c9-895f-0607a126fe19.jpg?aki_policy=xx_large");
var netherlands3 = new Rental(countries.Netherlands, "Lijnden", rentalTypes.Villa, "Private Luxurious house gardenview", 550, "https://a0.muscache.com/im/pictures/3d6b10f7-f07b-4d07-88a2-ec748b26c894.jpg?aki_policy=xx_large");

// allRentals is a list of all rentals in the system (created above)
var allRentals = [];
allRentals.push(france1);
allRentals.push(france2);
allRentals.push(france3);

allRentals.push(australia1);
allRentals.push(australia2);
allRentals.push(australia3);

allRentals.push(dubai1);
allRentals.push(dubai2);
allRentals.push(dubai3);

allRentals.push(netherlands1);
allRentals.push(netherlands2);
allRentals.push(netherlands3);

// function for generating html from hardcoded rentals
function generateAndShowRentalHtml(rental) {
    $("#content").append(`
    <div class="col-lg-3 item">
    <img src='${rental.imageUrl}' />
        <p class='location'>${rental.type} &bull; ${rental.city}, ${rental.country}</p>
        <p class='title'>${rental.title}</p>
        <p class='price'>${rental.price} GBP per night</p>
    </div>
    `)
}

// function for filtering rentals based on country & rental type (and showing them afterwards)
function filterRentals(country, rentalType, price){ 
    
    // we create a variable to store the filtered items, based on all our rentals
    var filteredRentals = allRentals;

    // if the country parameter has been supplied, we filter on it
    if(country !== undefined && country != "Default"){
        filteredRentals = filteredRentals.filter(rental => rental.country === country);
    }

    // if the rental type parameter has been supplied, we filter on it
    if(rentalType !== undefined && rentalType != "Default"){
        filteredRentals = filteredRentals.filter(rental => rental.type === rentalType);
    }

    // if the rental type parameter has been supplied, we filter on it
    if(price !== undefined && price !== ""){
        filteredRentals = filteredRentals.filter(rental => rental.price <= price);
    }


    // we clear the content of previous results
    $("#content").html("");

    // we render each rental as HTML
    for(var rental of filteredRentals){
        generateAndShowRentalHtml(rental);
    }
}

// triggered when a filter is changed
function filterChanged(){

    // first we get the value from our filters
    var country = $("#destinationDdl").val(); // destinationDdl is the ID of the dropdown element in the HTML
    var rentalType = $("#rentalTypesDdl").val(); // rentalTypeDdl is the ID of the dropdown element in the HTML
    var price = $("#max-price-input").val(); // rentalTypeDdl is the ID of the dropdown element in the HTML
    
    // we iniate the filtering, based on the selected destination
    filterRentals(country, rentalType, price);
}

// document load function is executed when the HTML document has loaded in the browser
$(document).ready(function(){

    // loop through all rentals and show them
    for(var rental of allRentals){

        // call function for generating html and showing it for rental
        generateAndShowRentalHtml(rental);
    }
});
