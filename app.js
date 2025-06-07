// function : block of code that performs a specific task

import {
  addEmployee,
  deleteEmployeeById,
  getAllEmployees,
  getEmployeeById,
  updateEmployeeById,
} from "./empOps.js";

// one st or more statements ==> depending on the task / req
const main = () => {
  console.log("hello from main");
  // function call addEmployee

  let res = addEmployee({
    name: "John Doe",
    position: "Software Engineer",
    salary: 60000,
    id: 1,
  });
  console.log(JSON.stringify(res) + "1st call");
  res = addEmployee({
    name: "Jane Doe",
    position: "Software Engineer",
    salary: 60000,
  });

  const emp = getEmployeeById(10); // calling the function to get
  // employee by id
  console.log("emp details for id 1: " + JSON.stringify(emp));
  // const res : var declaration / res : variable name
  // addEmployee : name of the function
  // {}
  console.log(JSON.stringify(res) + "2nd call");

  console.log("printing all emp details from the array");
  const emps = getAllEmployees();

  if (emps.length === 0) {
    console.log("No employees found");
  } else {
    emps.forEach((emp) => {
      console.log(JSON.stringify(emp));
    });
  }

  // delete an employee by id
  const delRes = deleteEmployeeById(10);
  if (delRes) {
    console.log("Employee deleted successfully: " + JSON.stringify(delRes));
  } else {
    console.log("Employee not found for deletion");
  }

  // update an employee by id
  const updatedEmp = updateEmployeeById(1, {
    position: "Senior Software Engineer",
    salary: 80000,
  });
  if (updatedEmp) {
    console.log("Employee updated successfully: " + JSON.stringify(updatedEmp));
  } else {
    console.log("Employee not found for update");
  }
};
// const : ES stnd : variable declaration / function name
// main : function name
// =()=>{name: "John Doe",
// position: "Software Engineer",
// salary: 60000} : defines arraow function with no parameters and empty body : JSON : javascript object notation key:value
// () : invoking the function

main(); // calling the function
