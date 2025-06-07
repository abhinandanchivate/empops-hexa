import { addEmployee } from "./empRestService.js";

const res = addEmployee({ name: "John Doe2", role: "Developer" });

res
  .then((result) => {
    console.log(result);
  }) // success
  .catch((error) => {
    console.error("Error adding employee:", error);
  }); // failure
