import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex, axios);
const key = "c46fe44e506fa85f374fae117ed26e81";
const URL = "https://api.themoviedb.org/3/";
export default new Vuex.Store({
    state: {
        PopulerFilms: [],

    },
    getters: {
    },
    mutations: {
        setPopulerFilms(state, PopulerFilms) {
            state.PopulerFilms = PopulerFilms
        },
    },
    actions: {
         getPopulerFilms({commit}) {
           axios.get(URL+'movie/popular/', {
                params: {
                    api_key: key
                }
            }).then(res => {
                commit("setPopulerFilms", res.data.results);
            })
        },
    },
    modules: {}
})
