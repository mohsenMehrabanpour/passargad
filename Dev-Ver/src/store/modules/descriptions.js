import axios from 'axios';

const state = {
    descriptions : []
};

const getters = {
    getDescriptions : (state) => state.descriptions
};

const actions = {
    async fetchDescriptions ({commit}){
        const response = await axios.get("https://my-json-server.typicode.com/mohsenMehrabanpour/passargad_DB/description");
        commit('setDescriptions',response.data);
    }
};

const mutations = {
    setDescriptions : (state,descriptions) => state.descriptions = descriptions
};

export default {
    state,
    getters,
    actions,
    mutations
}