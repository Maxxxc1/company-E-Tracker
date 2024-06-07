const roleMap = {
  "Manager": 1,
  "CSR": 2,
  "Officer": 3,
  "UnderWriter": 4
};
// array or objects
const quest = [
{
  type: "list",
  name: "question1",
  message: "What would you like to do?",
  choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Exit"],
},
// ** ADD EMPLOYEE
{
  type: "input",
  name: "first",
  message: "What is the First name?",
  when: (answers) => answers.question1 === "Add Employee",
},
{
  type: "input",
  name: "last",
  message: "What is the Last name?",
  when: (answers) => answers.question1 === "Add Employee" && answers.first,
},
{
  type: "list",
  name: "title",
  message:"What is their role?",
  choices: ["Manager", "CSR", "Officer", "UnderWriter"],
  when: (answers) => answers.question1 === "Add Employee" && answers.last,
  filter: (answer) => roleMap[answer],
},
{
  type: "input",
  name: "manager",
  message: "Who is their manager?",
  when: (answers) => answers.question1 === "Add Employee" && answers.title,
},
// ** UPDATE EMPLOYEE ROLE 

{
  type: "input",
  name: "empRole",
  message: "What is the employee id?",
  when: (answers) => answers.question1 === "Update Employee Role",
},
{
  type: "list",
  name: "empRole2",
  message:"What is their new role?",
  choices: ["Manager", "CSR", "Officer", "UnderWriter"],
  when: (answers) => answers.question1 === "Update Employee Role" && answers.empRole,
  filter: (answer) => roleMap[answer],
},
// ** ADD ROLE QUESTION 

{
  type: "input",
  name: "roleTitle",
  message:"What is the new role title?",
  when: (answers) => answers.question1 === "Add Role",
},
{
  type: "input",
  name: "roleSalary",
  message:"What is the new role salary?",
  when: (answers) => answers.question1 === "Add Role" && answers.roleTitle,
},

// *** NEW DEPARTMENT QUESTION 
{

  type: "input",
  name: "deptName",
  message:"what is the new department name?",
  when: (answers) => answers.question1 === "Add Department"
},

];


module.exports = quest;