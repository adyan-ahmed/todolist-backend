import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const Connection = () => {

    const MONGODB_URI = `mongodb://user:adyan@ac-1vmxsj2-shard-00-00.5o7ukit.mongodb.net:27017,ac-1vmxsj2-shard-00-01.5o7ukit.mongodb.net:27017,ac-1vmxsj2-shard-00-02.5o7ukit.mongodb.net:27017/?ssl=true&replicaSet=atlas-m7vg3s-shard-0&authSource=admin&retryWrites=true&w=majority`;


    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connected with database', error.message);
    })
}


export default Connection;