var express = require("express");
var router = express.Router();
const db = require("../model/helper");

//localhost:4000/api/students

// GET student list
router.get("/", async function (req, res, next) {
  try {
    let results = await db("SELECT * FROM students;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
  // db("SELECT * FROM students;")
  //   .then((results) => {
  //     res.send(results.data);
  //   })
  //   .catch((err) => res.status(500).send(err));
});

// GET one student
router.get("/:id", async function (req, res, next) {
  //any variable in the url of the request, is available in req.params
  //SELECT * FROM students WHERE id = 6;
  const { id } = req.params;
  try {
    const results = await db(`SELECT * FROM students WHERE id = ${id};`);
    if (!results.data.length) {
      res.status(404).send({
        message: "Student not found",
        error: true,
      });
    } else {
      res.send(results.data[0]);
    }
  } catch (err) {
    res.status(500).send(err);
  }

  /* 
  db(`SELECT * FROM students WHERE id = ${id};`)
  .then((results) => {
    if (!results.data.length) {
      res.status(404).send({ message: "Student not found", error: true });
    } else {
      res.send(results.data[0]);
    }
  }).catch((err) => res.status(500).send(err));
  
  */
});

// INSERT a new student into the DB
router.post("/", async function (req, res, next) {
  //the info of the student is available in req.body
  const { firstname, lastname } = req.body;
  if (!firstname || !lastname) {
    res.status(400).send({
      message: "Please include both first and last name",
    });
    return;
  }
  try {
    await db(
      `INSERT INTO students (firstname, lastname) VALUES ('${firstname}', '${lastname}');`
    );
    const results = await db("SELECT * FROM students;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
  /* 

    if (!firstname || !lastname) {
    res
      .status(400)
      .send({ message: "Please include both first and last name" });
    return;
  }
  db(
    `INSERT INTO students (firstname, lastname) VALUES ('${firstname}', '${lastname}');`
  )
    .then(() => {
      db("SELECT * FROM students;")
      .then((results) => {
        res.send(results.data);
      });
    })
    .catch((err) => res.status(500).send(err));
  
  */
});

// DELETE a student from the DB
router.delete("/:id", async function (req, res, next) {
  const { id } = req.params;
  try {
    await db(` DELETE FROM students WHERE id = ${id};`);
    let results = await db("SELECT * FROM students;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }

  /* 
db(`DELETE FROM students WHERE id = ${id};`)
  .then(() => {
    db("SELECT * FROM students;")
    .then((results) => {
      res.send(results.data);
    });
  })
  .catch((err) => res.status(500).send(err));
*/
});

module.exports = router;
