// dataStore.js

let dataStore = [];
let idCounter = 1; // Initialize a counter for IDs

// Function to add a new task
export const addTask = (task) => {
  const newTask = { ...task, id: `ID-${idCounter}` };
  dataStore.push(newTask);
  idCounter += 1;
  return newTask;
};

// Function to get all tasks
export const getTasks = () => {
  return dataStore;
};

// Function to clear all tasks (optional)
export const clearTasks = () => {
  dataStore = [];
  idCounter = 1; // Reset ID counter if needed
};
