const { createApp } = Vue;

createApp({
  data() {
    return {
      inputError: false,
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
      if (this.userInput.length < 5 && this.userInput != ' ') {
        return (this.inputError = true);
      } else {
        this.todos.unshift({ text: this.userInput, done: false });
        this.userInput = '';
        this.inputError = false;
      }
    },
    toggleDone(todo) {
      // if (todo.done === true) {
      //   todo.done = false;
      // } else {
      //   todo.done = true;
      // }
      todo.done = !todo.done;
    },
  },
  mounted() {},
}).mount('#app');
