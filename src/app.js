import express from "express";
import sessionRouter from "./routes/session.routes";
import usersRouter from "./routes/users.routes";

const app = express()

app.use(express.json())

app.use('/users', usersRouter)
app.use('/login', sessionRouter)

app.listen(3000)

export default app