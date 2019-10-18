import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  count: 3
};

const mutations = {
  add(state, n) {
    state.count += n;
  },
  reduce(state) {
    state.count--;
  }
};

const getters = {
  count: function(state) {
    return (state.count += 10);
  }
};

const actions = {
  addActions(context) {
    context.commit("add", 10);
    setTimeout(() => {
      context.commit("reduce");
    }, 3000);
    console.log("我先执行");
  },
  reduceActions(context) {
    context.commit("reduce");
  }
};

const moduleA = {
  state,
  mutations,
  getters,
  actions
};
export default new Vuex.Store({
  modules: { a: moduleA }
});
