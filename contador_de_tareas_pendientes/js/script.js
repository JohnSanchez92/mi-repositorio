        //carga la funcion cuando esta todos los archivos del html estan listos y obtiene la referencia de tres elementos del html
document.addEventListener("DOMContentLoaded", function() {
    var taskInput = document.getElementById("taskInput");
    var addTaskButton = document.getElementById("addTaskButton");
    var taskList = document.getElementById("taskList");
        //se agrega un evento click, se obtiene el valor de campo de entrada "taskInput" y lo alamcena en la variable "taskText" y elimina espacios vacios 
    addTaskButton.addEventListener("click", function() {
      var taskText = taskInput.value.trim();
        //verifica si el texto de tarea esta vacio, crea un nuevo elemento de li y un elemento de casilla de verificacion "checkbox"
      if (taskText !== "") {
        var newTask = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        newTask.appendChild(checkbox);
        //agrega una tarea como un hijo de la lista
        var taskLabel = document.createElement("label");
        taskLabel.innerText = taskText;
        newTask.appendChild(taskLabel);
        //marca una tarea como terminada con el checked
        checkbox.addEventListener("change", function() {
          if (this.checked) {
            taskLabel.classList.add("completed");
          } else {
            taskLabel.classList.remove("completed");
          }
        });
        //elimina el elemento de la lista con clic derecho
        newTask.addEventListener("contextmenu", function(e) {
          e.preventDefault();
          this.remove();
        });
        //cuando se elimina una tarea deja la linea vacia
        taskList.appendChild(newTask);
        taskInput.value = "";
      }
    });
  });