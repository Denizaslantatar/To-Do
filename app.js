const app = Vue.createApp({
 data() {
   return {
     todoList: [
       { id: 1, text: "HTML Eğitimi", completed: true },
       { id: 2, text: "CSS Eğitimi", completed: true },
       { id: 3, text: "Javascript Eğitimi", completed: true },
       { id: 4, text: "Database Eğitimi", completed: false },
       { id: 5, text: "Vue Eğitimi", completed: true },
       { id: 6, text: "C# Eğitimi", completed: false },
       { id: 7, text: "Asp .Net Eğitimi", completed: false },
     ],
   };
 },
 methods: {
   addTodo(event) {
     this.todoList.push({
       id: new Date().getTime(),
       text: event.target.value,
       completed: false,
     });
     event.target.value = "";
   },
   removeItem(todoItem) {
     this.todoList = this.todoList.filter((todo) => todo !== todoItem);
   },
 },
 computed: {
   completedItemCount() {
     return this.todoList.filter((t) => t.completed).length;
   },
   unCompletedItemCount() {
     return this.todoList.filter((t) => !t.completed).length;
   },
 },
}).mount("#app");
