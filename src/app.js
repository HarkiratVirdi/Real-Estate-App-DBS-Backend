const express = require('express');
const app = express();
const staffRoutes = require('./routes/staff');
const clientRoutes = require('./routes/client');
const branchRoutes = require('./routes/branch');
const { notFound, errorHandler } = require('./middlewares/index');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/api/staff', staffRoutes);
app.use('/api/client', clientRoutes);
app.use('/api/branch', branchRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
