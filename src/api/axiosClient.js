import axios from 'axios';
import queryString from 'query-string';

import {apiConfig, api_WatchList_Config} from './apiConfig';

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: apiConfig.apiKey})
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

const axios_WatchList_API_Client = axios.create({
    baseURL: api_WatchList_Config.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params})
});

axios_WatchList_API_Client.interceptors.request.use(async (config) => config);

axios_WatchList_API_Client.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export {axiosClient, axios_WatchList_API_Client};