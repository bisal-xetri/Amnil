// A generator is a special type of function that allows you to pause and resume execution.
function* myGenerator() {
  yield "Hello";
  yield "World";
  yield "!";
}

const gen = myGenerator(); // Create generator instance

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done);

function* infiniteCounter() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

const counter = infiniteCounter();
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

// Controlling Execution Flow
function* taskManager() {
  console.log("Start Task 1");
  yield;
  console.log("Start Task 2");
  yield;
  console.log("Start Task 3");
}

const task = taskManager();
task.next();
task.next();
task.next();
