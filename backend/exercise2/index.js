import mongoose from "mongoose";
import express from "express";
import { Dummy } from "./dummy.js";

await mongoose.connect("mongodb://localhost:27017/dummy");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  let name = [
    "Ayaka",
    "Raiden",
    "Keqing",
    "HuTao",
    "Nahida",
    "Furina",
    "Chiori",
    "Nilou",
    "Jean",
    "Navia",
  ];
  let lang = [
    "Python",
    "JavaScript",
    "C++",
    "Java",
    "C",
    "Go",
    "Rust",
    "HTML",
    "CSS",
  ];
  let cit = [
    "New York",
    "Washington",
    "California",
    "Las Vegas",
    "Singapore",
    "Delhi",
    "Mondstadt",
    "Liyue",
    "Inazuma",
    "Sumeru",
    "Fontaine",
  ];
  let x = 10;
  let results = [];
  while (x--) {
    let a, b, c, d, e;
    let as, bs, cs;
    as = name.length;
    bs = lang.length;
    cs = cit.length;
    a = Math.floor(Math.random() * as);
    b = Math.floor(Math.random() * bs);
    c = Math.floor(Math.random() * cs);
    d = Math.floor(Math.random() * 2); // 0 or 1 for boolean
    e = Math.floor(Math.random() * (10000000 - 100000 + 1)) + 100000;

    const dum = new Dummy({
      name: name[a],
      salary: e,
      language: lang[b],
      city: cit[c],
      isManager: !!d,
    });
    await dum.save();
    results.push(dum);
  }
  res.json(results);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
