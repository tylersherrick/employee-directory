import express from "express";

const app = express();

import employees from "./db/employees.js";

app.get("/", (req, res) => {
    res.send("Hello employees!");
})

app.get("/employees", (req, res) => {
    res.send(employees);
})

app.get("/employees/random", (req, res) => {
    const randomEmployeeId = Math.floor(Math.random() * employees.length);
    const randomEmployee = employees[randomEmployeeId];
    res.send({
        "id": randomEmployee.id,
        "name": randomEmployee.name
    });
})

app.get("/employees/:id", (req, res) => {
    const employeeId = req.params.id;
    const employee = employees[employeeId -1];
    if(!employee) {return res.status(404).send("This employee does not exist.");}
    res.send(employee);
})

export default app;