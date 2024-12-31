import express, { json } from "express";
import cors from 'cors';
import { getCPULoadAverage } from "./getLoadAvg.js";

const app = express();
app.use(json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get("/cpuLoadAverage", async (request, response) => {
  const average = await getCPULoadAverage();
  response.send({average, time: new Date()});
});
