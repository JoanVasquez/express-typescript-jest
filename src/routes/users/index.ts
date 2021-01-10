import express, { Router } from "express";
import list from "./list";
import remove from "./remove";
import save from "./save";
import update from "./update";

const router: Router = express.Router();
router.get("/", list);
router.post("/", save);
router.put("/", update);
router.get("/:userId", remove);

export default router;
