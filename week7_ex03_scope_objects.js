// TODO: Create a global variable called globalCount
let globalCount = 10;

// TODO: Create a function that demonstrates local scope
function demonstrateLocalScope() {
  let localCount = 5;
  console.log("Inside function - localCount:", localCount);
  console.log("Inside function - globalCount:", globalCount);
}

// TODO: Create a function that tries to modify both variables
function modifyVariables() {
  globalCount = globalCount + 1; // modifies global variable
  
  let localCount = 20; // new local variable, doesn't affect outside
  localCount = localCount + 5;
  
  console.log("Inside modifyVariables - globalCount:", globalCount);
  console.log("Inside modifyVariables - localCount:", localCount);
}

// TODO: Create a Student constructor function
function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}

// TODO: Create several student instances
let student1 = new Student("Simamkele", 20, "A");
let student2 = new Student("Lerato", 19, "B");
let student3 = new Student("Thabo", 21, "A+");

// TODO: Create an object literal with nested properties
let school = {
  name: "Life Choices Academy",
  address: {
    street: "123 Main Rd",
    city: "Cape Town",
    province: "Western Cape"
  },
  courses: ["Frontend", "Backend", "UI/UX"]
};

// Optional: test your code
demonstrateLocalScope();
modifyVariables();
console.log(student1);
console.log(school);
