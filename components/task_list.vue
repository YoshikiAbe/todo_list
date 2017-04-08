<!-- vim: set ft=html : -->
<template>
  <div class="taskList">
    <div>{{list.title}}</div>
    <ul>
      <li v-for="task in list.tasks">
        <my-task :task="task"></my-task>
      </li>
    </ul>
  </div>
</template>

<script>
var TaskList = require('../model/task_list').default

export default {
  props: {
    list: { type: Object, default: () => { return new TaskList } }
  },
  components: {
    MyTask: require('./task.vue')
  }
}
</script>
