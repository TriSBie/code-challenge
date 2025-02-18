import { Router } from "express";
import {
  createResource,
  getAllResources,
  getResource,
  updateResource,
  deleteResource,
} from "../controllers/resourceController";

const router = Router();

router.post("/", createResource);
router.get("/", getAllResources);
router.get("/:id", getResource);
router.put("/:id", updateResource);
router.delete("/:id", deleteResource);

export default router;
