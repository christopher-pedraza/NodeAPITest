var swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });
var outputFile = "./swagger.json";
var endpointsFiles = ["./index.js"];
var config = {};

swaggerAutogen(outputFile, endpointsFiles, config);
