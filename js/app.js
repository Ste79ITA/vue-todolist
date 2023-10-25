const { createApp } = Vue;

createApp({
  data() {
    return {
      error: false,
      userInput: '',
      todos: [
        {
          text: 'Fare i compiti',
          done: false,
        },
        {
          text: 'Fare la spesa',
          done: true,
        },
        {
          text: 'Fare il bucato',
          done: false,
        },
      ],
    };
  },
  methods: {
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    addTodo() {
      if (this.userInput.length < 5) {
        return (this.error = true);
      } else {
        this.todos.unshift({ text: this.userInput, done: false });
        this.userInput = '';
        this.error = false;
      }
    },
    toggleDone(todo) {
      if (todo.done === true) {
        todo.done = false;
      } else {
        todo.done = true;
      }
    },
  },
  mounted() {},
}).mount('#app');
