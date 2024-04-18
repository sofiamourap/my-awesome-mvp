var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
let messagesRouter = require("./routes/messages");
var studentsRouter = require("./routes/students");
let sessionsRouter = require("./routes/sessions");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/students", studentsRouter);
app.use("/api/sessions", sessionsRouter);

module.exports = app;
