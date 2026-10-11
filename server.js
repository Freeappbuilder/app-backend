const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API Endpoint jo aapke frontend se app ki details receive karega
app.post('/api/build-app', (req, res) => {
    const appData = req.body;
    console.log("Received App Data from Frontend:", appData);

    res.json({ 
        success: true, 
        message: "App build request successfully server par mil gayi hai!", 
        downloadUrl: "#" 
    });
});

app.get('/', (req, res) => {
    res.send('Free App Maker Backend Server is live and running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
