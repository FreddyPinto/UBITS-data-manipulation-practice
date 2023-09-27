import "./styles.css";
import db from "./database";

// GET /hospitales
// console.log(db);

// GET /hospitales/:id
// input: Number
// output: {...}
const getHospital = (id) => {
  const solution = db.find((hospital) => {
    return hospital.id === id;
  });

  return solution;
};
// console.log("getHospital", getHospital(8)); // me reotrna el hospital 8

// POST /hospitales
// input: {}
// ouput: []

const newHospital = {
  id: 21,
  name: "New Hospital",
  departments: []
};

const createHospital = (hospital) => {
  db.push(hospital);
  return db;
};

// console.log("createHospital", createHospital(newHospital));

// PUT /hospitales/:ID
// input: String
// ouput: []

const updateHospital = (id, newName) => {
  const oldHospital = getHospital(id);
  const newHospital = { ...oldHospital, name: newName };
  // oldHospital.name = newName
  const newDB = db.filter((hospital) => hospital.id !== id);
  newDB.push(newHospital);
  console.log("updateHospital", newDB);
};
// updateHospital(7, "Hospital Santo algo");

// DELETE /hospitales/:ID
// input: Number
// output: []

const deleteHospital = (id) => {
  return db.filter((hospital) => hospital.id !== id);
};

// console.log("deleteHospital", deleteHospital(6));

// GET /departments
// input: NA
// output: [{},{},{},..]

const getDepartments = () => {
  const deparments = db.map((hospital) => {
    return hospital.departments; //[{},{}]
  });
  return deparments.flat();
};

// console.log("getDepartments", getDepartments());

// GET /departments/:id
// input: Number
// output: {}

const getDeparment = (id) => {
  // return getDepartments().find((deparment) => deparment.id === id);
  let solution;
  db.forEach((hospital) => {
    const departments = hospital.departments;
    departments.forEach((department) => {
      if (department.id === id) {
        solution = department;
      }
    });
  });
  return solution;
};

// console.log("getDeparment", getDeparment(105));

// POST /departments/:id
// input: idHospital, {}
// output: []

const newDeparment = { id: 222, name: "nuevo departamento", doctors: [] };

const createDeparment = (idHospital, newDeparment) => {
  const oldHospital = getHospital(idHospital);
  // const { departments } = oldHospital;
  const newDepartments = oldHospital.departments;
  newDepartments.push(newDeparment);
  console.log("createDeparment", db);
};

// createDeparment(3, newDeparment);

// POST /departments/:id?hospital=idHospital
// input: idHospital, idDeparment, newName
// output: []

const updateDeparment = (idHospital, idDeparment, newName) => {
  // ....
};
