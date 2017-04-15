var Vue = require('vue');
var Vuex = require('vuex');
var TaskList = require('./model/task_list').default;
var Task = require('./model/task').default;

var task_list = global.task_list = new TaskList();
Vue.use(Vuex);


// new Vue({
//   el: '#app',
//   data: task_list,
//   components: {
//     MyTaskList: require('./components/task_list.vue')
//   }
// });

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
  	increment: state => state.count++,
    decrement: state => state.count--
  }
})

const count_data = new Vue({
  el: '#count',
  computed: {
    count() {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
    	store.commit('decrement')
    }
  }
})

global.count_data = count_data;
