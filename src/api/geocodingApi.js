import axios from 'axios';

export const getGeocodedAddress = async (street, city, country, postalcode, county) => {
    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_GEOCODING_TOKEN}&street=${street}&city=${city}&country=${country}$postalcode=${postalcode}&county=${county}&format=json`;

    return await axios.get(url).then((response) => response.data);
};
