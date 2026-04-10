const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/lakki_terminal';

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB for seeding...');

    // Clear existing users
    await User.deleteMany({});

    const hashedAccessKey = await bcrypt.hash('12345678', 10);

    const defaultUser = new User({
      operatorId: 'LKT-7728-EX',
      accessKey: hashedAccessKey,
      role: 'admin',
    });

    await defaultUser.save();
    console.log('Default user seeded:');
    console.log('Operator ID: LKT-7728-EX');
    console.log('Access Key: 12345678');

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
}

seed();
