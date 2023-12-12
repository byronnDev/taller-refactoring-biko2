// Aplicación de lista de tareas
function TaskManager() {
  const tasks = [];

  function addTask(task) {
    tasks.push(task);
  }

  function completeTask(task) {
    task.completed = true;
  }

  function deleteTask(task) {
    const taskIndex = tasks.indexOf(task);
    tasks.splice(taskIndex, 1);
  }

  function displayTasks() {
    console.log("Tasks:");
    tasks.forEach((task) => {
      console.log(task.description);
    });
  }

  return {
    addTask,
    completeTask,
    deleteTask,
    displayTasks,
  };
}

const taskManager = TaskManager();
const task1 = { description: "Buy groceries", completed: false };
taskManager.addTask(task1);
taskManager.completeTask(task1);
taskManager.displayTasks();
