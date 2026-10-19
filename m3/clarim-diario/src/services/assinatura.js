import { api } from './api';

export async function listarPlanos() {
    const { data } = await api.get('/api/planos');
    return data;
}

export async function iniciarCheckout(planoId) {
    const { data } = await api.post('/api/assinaturas/checkout', { planoId });
    return data.url;
}