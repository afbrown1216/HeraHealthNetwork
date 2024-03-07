import express from 'express';
import mongoose from'mongoose';
import bodyParser from'body-parser';

const items = require('./routes/api/items')
const app = express();

// Bodyparser Middleware 
app.use(bodyParser.json());

//DB Config 
const db = require('./config/keys').mongoURI;


// Connect to Mongo 
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch (err => console.log(err));

// Use Routes 

app.post('/createThread', async (req, res) => {
    const { assId, prompt } = req.body;

    // Create a thread
    const thread = await openai.beta.threads.create();
    const myThreadId = thread.id;

    // Create a message
    const message = await openai.beta.threads.messages.create(
        myThreadId,
        { role: "user", content: prompt }
    );

    // Run
    const run = await openai.beta.threads.runs.create(
        myThreadId,
        { assistant: assId }
    );

    res.json({ runId: run.id, threadId: myThreadId });
});

app.use('/api/items', items); 

const port = process.env.PORT || 5001; 

app.listen(port, () => console.log(`Server started on port ${port}`));

