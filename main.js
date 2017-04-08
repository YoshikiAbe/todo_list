var Vue = require('vue');
var TaskList = require('./model/task_list').default;
var Task = require('./model/task').default;

var task_list = global.task_list = new TaskList();

new Vue({
  el: '#app',
  data: task_list,
  components: {
    MyTaskList: require('./components/task_list.vue')
  }
});
