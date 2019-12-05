export default {
	state: {
    API_HOST: process.env.VUE_APP_API_HOST || '/api'
	},
	getters: {
    API_HOST(state) {
      return state.API_HOST
    }
	},
	mutations: {
	},
	actions: {
	}
}
