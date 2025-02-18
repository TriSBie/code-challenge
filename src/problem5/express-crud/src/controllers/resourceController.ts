import { Request, Response } from "express";
import Resource from "../models/resource";

export const createResource = async (req: Request, res: Response) => {
  try {
    const resource = await Resource.create(req.body);
    res.status(201).json(resource);
  } catch (error) {
    res.status(500).json({ message: "Error creating resource" });
  }
};

export const getAllResources = async (req: Request, res: Response) => {
  try {
    const where: any = {};
    if (req.query.name) where.name = req.query.name;

    const resources = await Resource.findAll({ where });
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: "Error fetching resources" });
  }
};

export const getResource = async (req: Request, res: Response) => {
  try {
    const resource = await Resource.findByPk(req.params.id);
    resource
      ? res.json(resource)
      : res.status(404).json({ message: "Resource not found" });
  } catch (error) {
    res.status(500).json({ message: "Error fetching resource" });
  }
};

export const updateResource = async (req: Request, res: Response) => {
  try {
    const [updated] = await Resource.update(req.body, {
      where: { id: req.params.id },
    });
    updated
      ? res.json({ message: "Resource updated" })
      : res.status(404).json({ message: "Resource not found" });
  } catch (error) {
    res.status(500).json({ message: "Error updating resource" });
  }
};

export const deleteResource = async (req: Request, res: Response) => {
  try {
    const deleted = await Resource.destroy({ where: { id: req.params.id } });
    deleted
      ? res.json({ message: "Resource deleted" })
      : res.status(404).json({ message: "Resource not found" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting resource" });
  }
};
