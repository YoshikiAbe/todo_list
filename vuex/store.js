import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  input: '',
  todos: []
}

const actions = {
  addTodo: 'ADD_TODO'
}

const mutations = {
  ADD_TODO(state, text) {
    state.todos.push(text);
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
});
