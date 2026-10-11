const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API Endpoint jo frontend se app data receive karega
app.post('/api/build-app', (req, res) => {
    const { appName, platform, appUrl, packageName } = req.body;
    console.log("App Build Request Received:", { appName, platform, appUrl, packageName });

    // Yahan hum response mein success aur download link bhej rahe hain
    res.json({ 
        success: true, 
        message: "App build package ready!", 
        downloadUrl: `https://free-app-backend.onrender.com/download-apk?name=${encodeURIComponent(appName || 'MyApp')}` 
    });
});

// Direct Download Route jo user ko file dega
app.get('/download-apk', (req, res) => {
    const appName = req.query.name || 'MyApp';
    // Filhaal hum ek text/configuration config file ya dummy response bhej rahe hain jo as a package download hoga
    res.setHeader('Content-Disposition', `attachment; filename="${appName}.txt"`);
    res.setHeader('Content-Type', 'text/plain');
    res.send(`=== FREE APP MAKER BUILD CONFIG ===\nApp Name: ${appName}\nStatus: Built Successfully via Cloud Server!\nNote: Yeh aapka app configuration file hai.`);
});

app.get('/', (req, res) => {
    res.send('Free App Maker Backend Server is live and running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
