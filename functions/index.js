const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const stripe = require("stripe")(
  "sk_test_51Jeo7USH8gPHIAuTF8dqJmXBEytb8dPLgOHVvZq25PlOm8xk3CuDsbfvpTTnsZ85us4O9DJtdGtCKNnEycs1MIKF00aeZWqZwY"
);

//API

//App config

const app = express();

//Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

//API routes

app.get("/", (request, response) => response.status(200).send("Hello World"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);
