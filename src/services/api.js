import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const fetchPrograms = async () => {
    const response = await api.get('/programs');
    return response.data;
};

export const fetchOneProgram = async (id) => {
    const response = await api.get(`/programs/${id}`);
    return response.data;
};

export const createProgram = async (formData) => {
    const response = await api.post('/programs', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};

export const updateProgram = async (id, formData) => {
    const response = await api.put(`/programs/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};
export const deleteProgram = async (id) => {
    const response = await api.delete(`/programs/${id}`);
    return response.data;
};

export const fetchPlayers = async () => (await api.get('/players')).data;
export const fetchTeams = async () => (await api.get('/teams')).data;
export const fetchPlayerAverages = async (id) => (await api.get(`/stats/player/${id}/averages`)).data;

export default api;
