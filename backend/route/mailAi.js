import express from 'express';
import { askAi } from '../module/generate.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const result = await askAi(req.body);
        console.log("isnide route");
        console.log(result);
        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong! Please try again.");
    }
});

export default router;
