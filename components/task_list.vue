<!-- vim: set ft=html : -->
<template>
  <div class="taskList">
    <div>{{list.title}}</div>
    <ul>
      <li v-for="task in list.tasks">
        <my-task :task="task"></my-task>
      </li>
    </ul>
    <div v-on:click="addTask">タスクを追加する</div>
  </div>
</template>

<script>
var TaskList = require('../model/task_list').default
var Task = require('../model/task').default

export default {
  props: {
    list: { type: Object, default: () => { return new TaskList } }
  },
  components: {
    MyTask: require('./task.vue')
  },
  methods: {
    addTask: function() {
      this.list.add(new Task)
    }
  },
  events: {
    'task-changed': function() {
      this.list.save()
    }
  }
}
</script>
