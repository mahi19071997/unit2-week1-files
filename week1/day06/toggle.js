//this is a constructor function and we have to pass an argument "title" and with defailt values of status and task creation date//
//this.title is working for a functional execution for making new similar type of objects for various tasks//
function Task( title ) {
    this.title = title
    this.status = false
    this.created_date = new Date()
    this.toggle_task= function(){
      this.status = true
      return this.status;
    }
  }
  //mention below are the new objects which are formed with the help of blueprint from constructor function//
  var task = new Task( "buy milk")
  var task1 = new Task( "buy veges")
  var task2 = new Task( "buy chocolates")
  var task3 = new Task( "buy pizza")
  var task4 = new Task( "buy alexa")
  var task5 = new Task( "buy tickets")
  var task6 = new Task( "buy deepak")
  var task7 = new Task( "buy clothes")
console.log(task)

 task.toggle_task()
  
  
  
  //calling the varibles formed above, here we are consoling them to print the values//
  console.log(task)