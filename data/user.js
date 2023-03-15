const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Naruto Uzumaki',
    email: 'naruto@naruto.com',
    password: bcrypt.hashSync('naruto', 10),
    isAdmin: true,
  },
  {
    name: 'Shikamaru Nara',
    email: 'shikamaru@shikamaru.com',
    password: bcrypt.hashSync('shikamaru', 10),
  },
];

module.exports = users;
