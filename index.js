import "dotenv/config";
import "./database/connectdb.js"
import express from "express";
import authRouter from './routes/auth.route.js'

const app = express();

app.use(express.json()); // middleware para leer el body.
app.use('/api/v1', authRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("🔥🔥🔥 http://localhost:5000"));
