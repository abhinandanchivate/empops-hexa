const BASE_URL = "http://localhost:3000/employees";
const employees = [];
export const addEmployee = async (employee) => {
  try {
    const response = await fetch(BASE_URL);
    const existingEmployees = await response.json();
    const isDuplicate = existingEmployees.some(
      (emp) => emp.name === employee.name
    );
    if (isDuplicate) {
      return null; // if duplicate, return null
    } else {
      // we have to add the employee into our db via a rest call.
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee), // convert the employee object to JSON string
      });
      return "hello";
    }

    // print the existing employees
    console.log(existingEmployees);

    // it s going to work with get method and
    // used url : base URL
    // trying to retrieve the data to verify the duplicate name in the list.
    // asyn promises ==> are used to handle asynchronous operations in JavaScript
    // to manage the promise objects.
    // promise : eventually is mean for completion or failure of any asynchronous operation
    // promises will carry 2 (resolve , reject) ==> resolve and reject are 2 callback functions .
    // // resolve : is used to handle the successful completion of the operation
    // // reject : is used to handle the failure of the operation
  } catch (error) {}

  return employee;
};

export const getEmployeeById = (id) => {
  return employees.find((emp) => emp.id === id) || null;
};

// retrieve the all emp details
export const getAllEmployees = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(data);
    return data; // return an array of employees
  } catch (error) {
    console.error(error);
    return [];
  }
};

// to delete an employee by id
export const deleteEmployeeById = (id) => {
  // to delete an employee by id

  const index = employees.findIndex((emp) => emp.id === id);

  // remove the empl entry on the basis of index

  if (index === -1) {
    return null; // if not found, return null
  } else return employees.splice(index, 1);
};

// update an employee by id based on employee object (updated info)

export const updateEmployeeById = (id, updatedEmpDetails) => {
  const index = employees.findIndex((emp) => emp.id === id);
  if (index === -1) {
    return null; // if not found, return null
  } else {
    // update the employee details
    employees[index] = { ...employees[index], ...updatedEmpDetails };
    return employees[index]; // return the updated employee object
  }
};
