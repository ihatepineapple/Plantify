import client from "./client";

const endpoint = "/plantlist";

const getPlants = () => client.get(endpoint);


export default {
    getPlants,
}