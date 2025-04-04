import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDB } from './lib/dbConnection.js';
import authRouter from './routes/auth.route.js';
import articleRouter from './routes/article.route.js';
import chatRouter from './routes/chat.route.js';


dotenv.config();

const app = express();

//connect to database
connectDB();


//set up middlewares
const PORT = process.env.PORT || 5000;
const mode = process.env.OPERATION;
const FRONTEND_URL = mode === "production" ? process.env.FRONTEND_URL : 'http://localhost:5173';


app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: [FRONTEND_URL],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}))





//routes
app.use('/api/auth', authRouter);

app.use('/api/article', articleRouter);

app.use('/api/chat', chatRouter);







app.get('/', (req, res) => {
    res.send('Hello World , frontend url is ' + FRONTEND_URL);
});

app.listen(PORT, () => {
    console.log(`Server is running at  http://localhost:${PORT}`);

})
