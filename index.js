const express = require('express');
const app = express();

// Middleware
// Add your middleware here if needed

// Routes
const helloRoute = require('./routes');
app.use('/', helloRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
