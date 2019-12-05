export default {
	state: {
    ping: ""
	},
	getters: {
    ping(state) {
      return state.ping
    }
	},
	mutations: {
    ping(state, payload) {
      state.ping = payload
    }
	},
	actions: {
    async ping(ctx) {
      const res = await fetch(`${ctx.rootGetters.API_HOST}/ping`)
      ctx.commit("ping", await res.text())
      setTimeout(() => {
        ctx.commit("ping", "")
      }, 1000)
    }
	}
}
