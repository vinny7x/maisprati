//const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

import api from './api';
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