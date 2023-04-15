import Property from "../mongodb/models/property.js";
import User from "../mongodb/models/user.js";

import mongoose from "mongoose";
import * as dotenv from "dotenv";
// import { v2 as cloudinary } from "cloudinary";

dotenv.config();

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

const getAllProperties = async (req, res) => {
  const { userID } = req.params;
  try {
    const properties = await Property.find({ creator: userID });
    res.status(200).json(properties);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};

const getPropertyDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const propertyExists = await Property.findOne({ _id: id }).populate(
      "creator"
    );

    if (propertyExists) {
      res.status(200).json(propertyExists);
    } else {
      res.status(404).json({ message: "Property not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const createProperty = async (req, res) => {
  try {
    const { title, description, propertyType, location, price, photo, creator} =
      req.body;
    console.log("The following is the id " + creator);
    const user = await User.findOne({ _id: creator });

    if (!user) throw new Error("User not found");

    const newProperty = await Property.create({
      title,
      description,
      propertyType,
      location,
      price,
      photo,
      creator,
    });

    await user.updateOne({ $push: { allProperties: newProperty } });

    res
      .status(200)
      .json({ message: "Property created successfully", newProperty });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, propertyType, location, price, photo } =
      req.body;

    const photoUrl = "demo";

    await Property.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        propertyType,
        location,
        price,
        photo: photoUrl,
      }
    );

    res.status(200).json({ message: "Property updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the property by id
    const property = await Property.findById(id);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    // Remove the property from the user's all properties array
    await User.updateOne(
      { _id: property.creator },
      { $pull: { allProperties: property._id } }
    );

    // Delete the property
    await property.delete();

    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export {
  getAllProperties,
  getPropertyDetail,
  createProperty,
  updateProperty,
  deleteProperty,
};
