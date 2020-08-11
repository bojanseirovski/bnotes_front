import api from '../utils/API.js';

const getAll = () => {
    return api.get('user');
}

const getProfile = (id) => {
    return api.get(`user/${id}`);
}

const getPoints = (id) => {
    return api.get(`user/${id}/points`);
}

const getChallenges = (id) => {
    return api.get(`user/${id}/challenge`);
}

const create = (data) => {
    return api.post('user', data);
}

const addPoint = (uid) => {
    return api.post(`user/${uid}/points`);
}

export default {
    getAll,
    getProfile,
    create,
    getPoints,
    getChallenges,
    addPoint
  };