const mongoose = require('mongoose');
// MongoDB bağlantısı
const dotenv = require('dotenv').config();

mongoose.Promise = global.Promise;
exports.connect = ()=> {}
    mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err =>{ 
        console.error('MongoDB bağlantı hatası:', err)
        process.exit(1)
    });
  



