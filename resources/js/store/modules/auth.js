//resources/js/store/modules/auth.js
export default {
    namespaced: true,
    state: () => ({
        authenticated: false,
        user: {},
    }),
    mutations: {
        setAuthenticated(state, value) {
            state.authenticated = value;
        },
        setUser(state, value) {
            state.user = value;
        },
    },
    getters: {
        getAuthenticated(state) {
            return state.authenticated;
        },
        getUser(state) {
            return state.user;
        },
    },
    actions: {
        getUser({ commit }) {
            return axios
                .get("/user")
                .then(({ data }) => {
                    commit("setUser", data);
                    commit("setAuthenticated", true);
                    return data;
                })
                .catch(({ response: { data } }) => {
                    commit("setUser", {});
                    commit("setAuthenticated", false);
                    return data;
                });
        },
        logout({ commit }) {
            return axios.get("/logout").then(() => {
                commit("setUser", {});
                commit("setAuthenticated", false);
            });
        },
    },
};
