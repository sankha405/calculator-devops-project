const express = require('express');
const path = require('path');

const app = express();

const APP_NAME = process.env.APP_NAME || "Calculator App";

app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (req,res)=>{
    res.status(200).send("Healthy");
});


app.get('/api/config', (req, res) => {
    res.json({
        appName: APP_NAME
    });
});

app.listen(3000, () => {
    console.log(`${APP_NAME} running on port 3000`);
});