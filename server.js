const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Serve all files and directories in the current folder statically
app.use(express.static(path.join(__dirname)));

// Route all request paths directly to their static matches, default to root index
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`=============================================================`);
    console.log(`🛡️  CalcShield Stealth Calculator running on port ${PORT}`);
    console.log(`🌐 Deployable directly to Render Web Service or Static Site`);
    console.log(`=============================================================`);
});
