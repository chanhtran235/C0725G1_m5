import axios from "axios";
const URL_BE = "http://localhost:8080"

export async function getAll() {
    // call api;
    try {
        const res = await axios.get(`${URL_BE}/classes`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
    return [];
}
