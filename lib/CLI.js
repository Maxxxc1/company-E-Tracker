const inq = require('inquirer')
const quest = require('./questions');
const { error } = require('console');
const queries = require('./queries');
const consoleTable = require('console.table');


function run(connection) {


  console.log('Succesfully Connected!')
   inq.prompt(quest).then(answers => {
      switch (answers.question1) {

        case "View All Employees":
    
        connection.query(queries.getAllEmployees, function(error, results, fields) {
          if (error) throw error;
          console.table(results);
          backToMenu(connection);
        });
        break;

        case "Add Employee":
          var params = [answers.first, answers.last, answers.title, answers.manager];
          connection.query(queries.addEmployee, params, function (error, results, fields) {
            console.log(`employee ${answers.first} ${answers.last} was added!`);
            backToMenu(connection)
          });
          break; 

        case "Update Employee Role":
          var params = [answers.empRole, answers.empRole2];
          connection.query(queries.updateEmployeeRole, params, function (error, results, fields) {
            console.log(`employee id ${answers.empRole}'s role has been updated to Role id ${answers.empRole2}`);
            backToMenu(connection)
          });  
        break;

        case "View All Roles":
        connection.query(queries.getAllRoles, function(error, results, fields) {
          if (error) throw error;
          console.table(results);
          backToMenu(connection)
        });

        break;

        case "Add Role":
        var params = [answers.roleTitle, answers.roleSalary];
        connection.query(queries.addRole, params, function(error, results, fields) {
          console.log(`New role ${answers.roleTitle} added!`)
          backToMenu(connection)
        });
        break;

        case "View All Departments":
          connection.query(queries.getAllDepartments, function(error, results, fields) {
            if (error) throw error;
            console.table(results);
            backToMenu(connection)
          });
        break;

        case "Add Department":
          var params = [answers.deptName];
          connection.query(queries.addDepartment, params, function(error, results, fields) {
            backToMenu(connection)
          });
        break;

        case "Exit":
          exit(connection)

        break;

        default:
          console.log("Invalid choice");
          break;
      }
    });
  }


module.exports = run;


function backToMenu(connection) {
  inq.prompt([
    {
      type: "confirm",
      name: "backToMenu",
      message: "Would you like to go back to the main menu?",
      default: true
    }
  ]).then(answer => {
    if (answer.backToMenu) {
      run(connection);
    } else {
      console.log("Goodbye!");
      connection.end();
    }
  });
}


function exit(connection) {
  inq.prompt([
    {
      type: "confirm",
      name: "exit",
      message: "Are you sure you would like to exit?",
      default: true
    }
  ]).then(answer => {
    if (answer.exit === true) {
      console.log("GoodBye!");
      connection.end();
    } else {
      backToMenu(connection)
    }
  })
}

