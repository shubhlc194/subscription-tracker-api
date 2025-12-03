// app.js
import express from 'express';
import { PORT } from './config/env.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import ConnectToDataBase from './routes/database/mongodb.js';
import errorMiddleware from './middleware/error.middleware.js';
const app = express();
const port = Number(PORT) || 5050;

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter)
app.use('/api/v1/subscription',subscriptionRouter)
app.get('/', (req, res) => {
  res.send("welcome to subscription Tracker API !");
});

app.listen(port, () => {
  console.log(`Subscription Tracking Api is running on http://localhost:${port}`);
  ConnectToDataBase();
});

export default app;
