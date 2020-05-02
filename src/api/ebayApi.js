import axios from 'axios';

/**
 * Gets all orders belonging to the current user.
 * @param {string} authToken Auth token of the user
 */
export const loadOrders = async (authToken) => {
    return await axios
        .get(process.env.REACT_APP_EBAY_API_URL, {
            headers: { Authorization: 'Bearer ' + authToken },
        })
        .then((response) => response.data);
};

/**
 * Mints an OAuth user token using the provided consent token.
 * @param {string} consentToken Consent token provided by the user.
 */
export const mintToken = async (consentToken) => {
    return await axios
        .post(
            process.env.REACT_APP_EBAY_MINT_URL,

            `grant_type=authorization_code&code=${consentToken}&redirect_uri=${process.env.REACT_APP_EBAY_REDIRECT_URI}`,

            {
                headers: {
                    Authorization: 'Basic ' + process.env.REACT_APP_EBAY_OAUTH_CREDS,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        )
        .then((response) => response.data);
};
