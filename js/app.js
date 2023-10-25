const { createApp } = Vue;

createApp({
  data() {
    return {
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
      this.todos.unshift({ text: this.userInput, done: false });
      this.userInput = '';
    },
  },
  mounted() {},
}).mount('#app');
