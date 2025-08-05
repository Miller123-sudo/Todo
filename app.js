const express = require("express");
const cors = require("cors");

const AppError = require("./utility/appError");
const globalErrorHandler = require("./utility/errorController");

const todoRouter = require("./modules/todo/todoRouter");

const port = process.env.PORT || 8000;
const app = express();

app.use(cors({ origin: "*" }));

app.use("/api/v1/todo", todoRouter);

// /* DEFAULT ROUTE IF ANY ROUTES DO NOT MATCH ABOVE ROUTES
//  *  EXP: corret route is /api/v1/users. If we send a request for route "/api/users", then this
//  *  middleware will trigger.
//  */
// app.all("*", (req, res, next) => {
//   /**
//    * If next function get any argument then no matter what it will assume that there is an error and
//    * pass all middleware and go to the error handleing middleware.
//    */
//   next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
// });

// GLOBAL ERROR HANDLEING MIDDLEWARE
app.use(globalErrorHandler);

module.exports = app;
