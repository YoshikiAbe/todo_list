var Task = require('./task').default;

/**
 * タスクのリスト
 */
export default class TaskList {
  constructor(name = 'default') {
    var source = TaskList.fetch(name);

    this.title = source.title || name;
    this.tasks = [];
    if (source.tasks && source.tasks.length > 0) {
      this.tasks = source.tasks.map((task) => {
        return new Task(task);
      });
    }
  }

  add(task) {
    this.tasks.push(task);
  }

  save() {
    localStorage.setItem(TaskList.storage_key(this.title), JSON.stringify(this));
  }

  static storage_key(name) {
    return `todo-list-${name}`;
  }

  static fetch(name = 'default') {
    return JSON.parse(localStorage.getItem(TaskList.storage_key(name)) || '{}');
  }
}
