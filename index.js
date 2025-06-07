// managing JS for our empUi
// document is the predefined global object in browsers
// which is used for accessing the DOM tree of the document/ page.

import {
  addEmployee,
  deleteEmployeeById,
  getAllEmployees,
  getEmployeeById,
} from "./employeeService.js";

// id attribute values in html must be unique , it should not be repeated
console.log("inside index.js file ");
const employeeForm = document.getElementById("employeeForm");
const empId = document.getElementById("empId");
const empName = document.getElementById("empName");
const empRole = document.getElementById("empRole");
const rowCache = new Map(); // to cache the rows this is from ES6 key value pair

// select only one or a specific element from the DOM
// it will work for only unique ids
const empTableBody = document.querySelector("#empTable tbody");
// querySelector is a method that allows you to select elements from the DOM using CSS selectors.
//

// applying the event submit to form
// (event)=>{} arrow function , responsible for handling the submit event // handler

employeeForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the default action of form submission
  const id = empId.value;
  const name = empName.value;
  const role = empRole.value;
  console.log({ id, name, role });
  deleteEmployeeById(id); // delete the employee if exists before adding a new one
  const newEmployee = addEmployee({ id, name, role }); // when we will have same reqd key and value holders with same // name
  console.log(newEmployee);

  console.log(getAllEmployees().length);

  employeeForm.reset();
  renderEmployees(); // call the function to render employees
});

// to render the data over the UI.
const renderEmployees = () => {
  // approach 2

  const empList = getAllEmployees();
  empList.forEach((e) => {
    const existingRow = rowCache.get(e.id);
    const html = `<td>${e.id}</td><td>${e.name}</td><td>${e.role}</td> <td><button onclick="handleEdit('${e.id}')" class ='btn btn-sm btn-primary me-1'>Edit</button><button onclick="handleDelete('${e.id}')" class ='btn btn-sm btn-danger'> Delete</button> </td>`;

    if (existingRow) {
      // Update if content changed
      if (existingRow.innerHTML !== html) {
        existingRow.innerHTML = html;
      }
    } else {
      // New row
      const row = document.createElement("tr");
      row.innerHTML = html;
      empTableBody.appendChild(row);
      rowCache.set(e.id, row);
    }
  });

  // key : id
  // value : tr or row content
  // efficient scalable for live updates
  // rowCache map we have to maintain it for proper deletion and updation of rows

  // // do we need the data ? ==> yes ==> where is the data ? ==> array employees==> employeeService.js
  // // how can i access that array / get it ?==> call getAllEmployees function from employeeService.js
  // const empList = getAllEmployees();
  // console.log(empList);

  // if (empList.length === 0) {
  //   // empTableBody.innerHTML = "There is no record ";
  //   const row = document.createElement("tr");
  //   row.innerHTML =
  //     "<td colspan='4' class ='text-center text-muted'>hello there is no record</td>";
  //   empTableBody.appendChild(row);
  //   return;
  // } else {
  //   // rows = no of elements from the array empList
  //   empTableBody.innerHTML = ""; // clear the table body before rendering new data
  //   empList.forEach((e) => {
  //     const row = document.createElement("tr");
  //     row.innerHTML = `<td>${e.id}</td> <td>${e.name}</td> <td>${e.role}</td>`;
  //     empTableBody.appendChild(row);
  //   });
  // }
};
window.handleEdit = (id) => {
  console.log("inside handleEdit function ", id);
  // we have to retrieve the specific employee data
  let emp = getEmployeeById(id);
  // deleteEmployeeById(id); // delete the employee from the array
  // emp = getEmployeeById(id);
  console.log(emp);
  if (emp) {
    // to load the form with actual existing data from the array.
    empId.value = emp.id;
    empName.value = emp.name;
    empRole.value = emp.role;
    // we need to disable the empId field ==> no one should change the id .
    empId.disabled = true;
  } else {
    alert(`Employee with Id '${id}' does not exist.`);
  }
};
// id along with the updated content
window.handleDelete = (id) => {
  console.log("inside handleDelete function ", id);
};
renderEmployees(); // call the function to render employees
