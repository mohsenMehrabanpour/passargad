import axios from 'axios';

const state = {
    comments:[]
};
 
const getters = {
    getComments : (state) => state.comments
};

const actions = {
    async fetchComments ({commit}){
        const response = await axios.get("https://my-json-server.typicode.com/mohsenMehrabanpour/details/comments");
        commit('setComments',response.data);
    },
    async addComment ({commit},{txt,name,photoID}){
        const response = await axios.post("https://my-json-server.typicode.com/mohsenMehrabanpour/details/comments",{txt,name,photoID});
        commit('addComment',response.data);    
    }
};

const mutations = {
    setComments : (state , comments) => state.comments = comments,
    addComment : (state , comment ) => (state.comments.unshift(comment))

};

export default{
    state,
    getters,
    actions,
    mutations
}