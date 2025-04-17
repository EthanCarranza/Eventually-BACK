const express = require("express");
const { isAuth } = require("../../middlewares/auth");
const {
  getEvents,
  getEventById,
  getEventByTitle,
  createEvent,
  deleteEvent,
  addAttendee,
  removeAttendee,
} = require("../controllers/eventsController");
const { upload } = require("../../middlewares/fileStorage");
const router = express.Router();

router.post("/", upload.single("img"), isAuth, createEvent);
router.get("/", getEvents);
router.get("/:id", getEventById);
router.get("/get/:title", getEventByTitle);
router.delete("/:id", isAuth, deleteEvent);
router.post("/attendees/:id", isAuth, addAttendee);
router.delete("/attendees/:id", isAuth, removeAttendee);

module.exports = router;
