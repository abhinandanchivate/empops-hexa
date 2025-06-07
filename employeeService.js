const employees = []; //
// const
// employees : var name / array name ==> to hold the list of employees
// [] : empty array

// add new employee to the list via addEmployee function
// this function must accept an employee object as a parameter
// should return employee object over the successful addition
export const addEmployee = (employee) => {
  // to add this employee object into an array
  // for that we will have built in function from array
  // called push
  // export :
  // don't allow duplicate employee names

  // it should help us to check the name is used or not

  const isDuplicate = employees.some((emp) => emp.name === employee.name);

  if (isDuplicate) {
    return null; // if duplicate, return null
  }

  // it will help us to iterate over the array
  // a callback function : its a function that is passed as an argument to another function
  // syntax for callback function : (param1, param2, param3) =>{}
  // why we should use callback function?
  // internally inside hte calling function ==> they would act as a placeholder

  employees.push(employee);

  return employee;
};
// const
// addEmployee : function name
// (employee) : parameter name
// => : arrow function syntax
// return null : return value of the function

// retrieve the emp details based on id

export const getEmployeeById = (id) => {
  // 2 aspects
  // 1. if record exists then return the employee object
  // 2. if record does not exist then return null
  // 1st expectation would be we need to traverse the array.
  return employees.find((emp) => emp.id === id) || null;
};

// retrieve the all emp details
export const getAllEmployees = () => {
  return employees; // return an array
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
