import express from 'express';
const router = express.Router();
import fs from "fs";

router.use(express.json());

const readDataFrutasVerduras = () => {
    try {
    const data = fs.readFileSync("gs://appfit-b328f.appspot.com/data/origenAnimal.json", "utf8");
    return JSON.parse(data);
    } catch (e) {
        console.log(e)
    }
};

router.get('/get', (req, res) => {
    const data = readDataFrutasVerduras();
    res.json(data)

});



export default router;