import express from "express";
import { knownAddresses } from "./knownAddresses.js";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

app.get("/known-wallets", (req, res) => {
  console.log(knownAddresses);
  return res.status(200).json(Object.fromEntries(knownAddresses));
});

app.listen(process.env.PORT || 3120);
