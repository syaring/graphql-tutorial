const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://serim:serim1234@ds115653.mlab.com:15653/gql-tutorial");
mongoose.connection.once("open", () => {
  console.log("connected to db");
})

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
