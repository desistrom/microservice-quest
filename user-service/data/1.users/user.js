const faker = require('faker');
const ObjectID = require('mongodb').ObjectId;

module.exports = [
  {
    _id: new ObjectID('62739bb5c7e83441ee767ce2'),
    name: 'Super Administrator',
    email: 'admin@admin.com',
    password: '$2a$08$BPGLVSiuqDxAVunkjs7UzOtWhY88SRKhAMYWpOhwUysXDCgl/R9RG',
    role: 'admin',
    isEmailVerified: true,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5e995b'),
    name: 'Simple user',
    email: 'user@user.com',
    password: '$2a$08$BPGLVSiuqDxAVunkjs7UzOtWhY88SRKhAMYWpOhwUysXDCgl/R9RG',
    role: 'user',
    verified: true,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },
];
