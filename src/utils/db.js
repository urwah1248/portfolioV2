import { MongoClient } from 'mongodb';

const { MONGODB_URI } = process.env;

let cachedClient = null;

const connectToDatabase = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const client = await MongoClient.connect(MONGODB_URI, options);
    cachedClient = client;
    console.log('Connected to MongoDB!');
    return client.db(MONGODB_DB);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error;
  }
};

export default connectToDatabase;
