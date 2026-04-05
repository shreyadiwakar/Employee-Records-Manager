import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
app.use(cors());
app.use(express.json());//Whenever data comes from frontend in JSON format, convert it into a JavaScript object.

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mynameisShreya@2308",
    database: "crud_project"
});    

app.get("/", (req, res) => {
    const sql = "SELECT * FROM DummyEmployees";
    db.query(sql, (err, result) => {
    if (err) {
        return res.json({ message: "Error fetching data from database" });
    } 
    else {
        return res.json(result);
    }
});
});

app.post("/employees", (req, res) => {
    const sql = "INSERT INTO DummyEmployees (EmployeeName, MobileNumber, Department, Salary) VALUES (?)";
    const values = [
        req.body.EmployeeName,
        req.body.MobileNumber,
        req.body.Department,
        req.body.Salary
    ];
    db.query(sql, [values], (err, result) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json(result);
        }
    });
});

app.get("/employees/:id", (req, res) => {
    const sql = "SELECT * FROM DummyEmployees WHERE EmployeeID = ?";
    db.query(sql, [req.params.id], (err, result) => {
    if (err) {
        return res.json(err);
    }
    else {
        return res.json(result);
    }
});
});
app.put("/edit/:id", (req, res) => {
    const sql = "UPDATE DummyEmployees SET EmployeeName = ?, MobileNumber = ?, Department = ?, Salary = ? WHERE EmployeeID = ?";
    const id= req.params.id;
    db.query(sql, [req.body.EmployeeName, req.body.MobileNumber, req.body.Department, req.body.Salary, id], (err, result) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json(result);
        }
    });
});

app.delete("/delete/:id",(req,res)=>{
    const sql = "DELETE FROM DummyEmployees WHERE EmployeeID = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json(result);
        }
    });
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});