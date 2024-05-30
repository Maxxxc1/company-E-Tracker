INSERT INTO departments (id, department_name)
VALUES (id, "Accounting"),
       (id, "Human Resources"),
       (id, "Customer Retention"),
       (id, "Escalations");

INSERT INTO roles (id, title, salary, department_id)
VALUES  (id, "Manager", 60000, 004),
        (id, "CSR", 38000, 003),
        (id, "Officer", 50000, 002),
        (id, "Underwriter", 80000, 001);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Jackie", "Chan", 001, null),
        ("George", "Bush", 002, 001),
        ("Rose", "Mary", 003, 001),
        ("Billy", "Madison", 004, null);