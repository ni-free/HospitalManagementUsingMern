import express  from "express";
import { postAppointment } from "../controller/appointment.controller.js";
import { isPatientAuthenticated } from "../middleware/auth.middleware.js";

const router =express.Router()

router.post("/post",isPatientAuthenticated,postAppointment)

export default router