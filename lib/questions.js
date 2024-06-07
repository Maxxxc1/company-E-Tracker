const roleMap = {
    "Manager": 1,
    "CSR": 2,
    "Officer": 3,
    "UnderWriter": 4
  };

const quest = [
    {
        type: "list",
        name: "question1",
        message: "What would you like to do?",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Exit"],
    },

    