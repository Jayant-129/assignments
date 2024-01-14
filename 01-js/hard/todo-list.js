/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
   constructor(){
    this.todos = [];
   }
   add(todo){
    this.todos.push(todo);
   }
   remove(i){
    this.todos = this.todos.filter((data , element) => {
        if(element != i){
            return true;
        }
    });
   }
   update(i , updatedTodo){
    this.todos = this.todos.map((data, element) => {
      if(element == i){
        data = updatedTodo;
        return data;
      }
      else{
        return data;
      }
    });
   }
   getAll(){
     return this.todo;
   }
   get(i){
    this.todo = this.todo.find((data , element) => {
        if(i == element){
          return data
        }
    });
   }
   clear(){
     this.todo.length = 0;
   }
}

module.exports = Todo;
