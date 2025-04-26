import express from "express";
import { createContact,getContacts } from "../controllers/contact.controller.js";

const router = express.Router();

// POST: Create a contact message
router.post("/contact", createContact);

// GET: Fetch all contact messages
router.get("/contact", getContacts);

export default router;
