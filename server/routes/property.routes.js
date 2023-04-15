import express from "express";

import {
    getAllProperties,
    getPropertyDetail,
    createProperty,
    updateProperty,
    deleteProperty,
} from '../controllers/property.controller.js'

import {protect} from '../controllers/protectController.js';

const router = express.Router();
router.route('/:userID/getProperties').get(protect, getAllProperties);
router.route('/:id').get(protect, getPropertyDetail);
router.route('/createProperty').post(protect, createProperty);
router.route('/:id').patch(protect, updateProperty);
router.route('/:id').delete(protect, deleteProperty);

export default router;0