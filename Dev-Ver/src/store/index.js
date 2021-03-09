import vuex from 'vuex';
import vue from 'vue';
import descriptions from './modules/descriptions';
import photos from './modules/photos';
import comments from './modules/comments';
import rates from './modules/rates';

vue.use(vuex);

export default new vuex.Store({
    modules:{
        descriptions,
        photos,
        comments,
        rates
    }
})