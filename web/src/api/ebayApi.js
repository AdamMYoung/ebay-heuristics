import axios from 'axios';

/**
 * Gets all orders belonging to the current user.
 * @param {string} authToken Auth token of the user
 */
export const loadOrders = async (authToken) => {
    return await axios
        .get(process.env.REACT_APP_EBAY_API_URL, { headers: { bearer: authToken } })
        .then((response) => response.data);
};
