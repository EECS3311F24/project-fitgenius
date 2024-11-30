import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get list of all plans
router.get("/plans", async (req, res) => {
  let collection = await db.collection("plans");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// Get a single plan by id
router.get("/plans/:id", async (req, res) => {
  let collection = await db.collection("plans");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Post a new plan
router.post("/plans", async (req, res) => {
  try {
    let newDocument = {
      leg: req.body.leg,
      arm: req.body.arm,
      chest: req.body.chest,
      back: req.body.back,
    };
    let collection = await db.collection("plans");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding record");
  }
});

// Update an existing plan
router.patch("/plans/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        leg: req.body.leg,
        arm: req.body.arm,
        chest: req.body.chest,
        back: req.body.back,
      },
    };

    let collection = await db.collection("plans");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating record");
  }
});

// Delete a plan
router.delete("/plans/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("plans");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
});

// Post a new comment
router.post("/comments", async (req, res) => {
  try {
    let newDocument = {
      exercise: req.body.exercise,
      text: req.body.text,
    };
    let collection = await db.collection("comments");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding comment");
  }
});

// Get all comments for a specific exercise
router.get("/comments/:exercise", async (req, res) => {
  try {
    let collection = await db.collection("comments");
    let results = await collection.find({ exercise: req.params.exercise }).toArray();
    res.send(results).status(200);
  } catch(err) {
    console.error(err);
    res.status(500).send("Error retrieving comments");
  }
});

// Delete most recent comment
router.delete("/comments/:exercise", async (req, res) => {
  try {
    const collection = db.collection("comments");

    const mostRecentComment = await collection
      .find({ exercise: req.params.exercise })
      .sort({ _id: -1 })
      .limit(1)
      .toArray();

    let result = await collection.deleteOne({ _id: mostRecentComment[0]._id });

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting most recent comment");
  }
});

export default router;