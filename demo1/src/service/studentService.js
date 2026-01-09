import axios from "axios";
const URL_BE = "http://localhost:8080"

export async function getAll() {
    // call api;
    try {
        const res = await axios.get(`${URL_BE}/students`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
    return [];
}

export async function deleteById(id) {
    try {
        const res = await axios.delete(`${URL_BE}/students/${id}`);
        return res.status == 200;
    } catch (e) {
        console.log(e);
    }
    return false;
}

export async function findById(id) {
    try {
        const res = await axios.get(`${URL_BE}/students/${id}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
    return null;
}

export async function add(student) {
    try {
        const res = await axios.post(`${URL_BE}/students`,student);
        return res.status == 201;

    } catch (e) {
        console.log(e);
    }
    return false;
}