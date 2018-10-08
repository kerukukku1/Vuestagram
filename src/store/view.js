export default {
    namespaced: true,
    state: {
        loading: false
    },
    mutations: {
        start(state) {
            state.loading = true
            console.log("start")
        },
        end(state) {
            state.loading = false
            console.log("end")
        }
    }
}