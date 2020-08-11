import api from '../utils/API.js';

const getAllChallenges = () => {
    return api.get('challenge');
}

const getChallengeByID = (id) => {
    return api.get(`challenge/${id}`);
}

const getChallengeUsers = (id) => {
    return api.get(`challenge/${id}/user`);
}

const getChallengeTotalPoints = (id) => {
    return api.get(`challenge/${id}/points`);
}

const createChallenge = (data) => {
    return api.post('challenge', data);
}

export default {
    getAllChallenges,
    getChallengeByID,
    getChallengeUsers,
    createChallenge,
    getChallengeTotalPoints
  };