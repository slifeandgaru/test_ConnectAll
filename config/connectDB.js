const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test_ConnectAll', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connection successfully");
    // we're connected!
});

module.exports = mongoose
//Something here