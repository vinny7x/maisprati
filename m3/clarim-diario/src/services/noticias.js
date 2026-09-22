import axios from 'axios';
//const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:8080',
});
export async function listarNoticias() {
    //await esperar(1000);
    const { data } = await api.get('api/noticias');
    return data;
}
export async function buscarNoticia(id) {
    // await esperar(1000);
    const { data } = await api.get(`api/noticias/${id}`);
    return data;
}