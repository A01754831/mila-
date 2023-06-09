const express = require("express");
const app = express();
app.use(express.json());

const userRouter = require('./routes/users');
const tutorRouter = require('./routes/tutors');
app.use('/api/users', userRouter);
app.use('/api/tutors', tutorRouter);


const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
