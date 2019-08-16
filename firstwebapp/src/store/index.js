import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海';
defaultCity = localStorage.city
const state = {
	city:defaultCity
}
const mutations = {
	changeCity(state,cityNmae){
		state.city = cityNmae;
		localStorage.city = cityNmae;
	}
}
export default new Vuex.Store({
	state,
	mutations
})


