import axios from 'axios';

const state = {
    rates: []
};
const getters = {
    getRates: (state) => state.rates
};

const actions = {
    async fetchRates({ commit }) {
        const response = await axios.get('https://my-json-server.typicode.com/mohsenMehrabanpour/details/rates')
        commit('setRates', response.data)
    },
    async upRate({ commit }, upRate) {
        await axios.put(`https://my-json-server.typicode.com/mohsenMehrabanpour/details/rates/${upRate.id}`)
        commit('updateRate', upRate)
    }
};

const mutations = {
    setRates: (state, rates) => state.rates = rates,
    updateRate: (state, upRate) => {
        const index = state.rates.findIndex(rate => rate.id === upRate.id)
        if (index !== -1) {
            state.rates.splice(index, 1, upRate)
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations

}