import express from 'express';
import { BACKEND_URL } from '@repo/common/config';


console.log(BACKEND_URL)

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello from backend!",
    })
})

app.listen(3000)