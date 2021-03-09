import axios from 'axios';

const state = {
    photos:[]
};
 
const getters = {
    getPhotos : (state) => state.photos
};

const actions = {
    async fetchPhotos ({commit}){
        const response = await axios.get("https://my-json-server.typicode.com/mohsenMehrabanpour/details/photos");
        commit('setPhotos',response.data);
    }
};

const mutations = {
    setPhotos : (state , photos) => state.photos = photos
};

export default{
    state,
    getters,
    actions,
    mutations
}