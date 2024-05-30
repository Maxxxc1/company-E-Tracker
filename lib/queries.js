const queries = {
    getAllEmployees: `
    SELECT employees.id, employees.first_name, employees.last_name, departments.department_name, roles.title, roles.salary, employees.manager_id
    FROM employees
    JOIN roles ON employees.role_id = roles.id
    JOIN departments ON roles.department_id = departments.id`,
    addEmployee: `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
    updateEmployeeRole: `UPDATE employees SET role_id = ? WHERE id = ?`,
    getAllRoles: `SELECT * FROM roles`,
    addRole: `INSERT INTO roles (title, salary) VALUES (?, ?)`,
    getAllDepartments: `SELECT * FROM departments`,
    addDepartment: `INSERT INTO departments (name) VALUES (?)`,
  };
  
  module.exports = queries;