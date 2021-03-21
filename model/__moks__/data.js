const User = {
  _id: '604e3bdbd3677023ccdf8174',
  subscription: 'free',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGUzYmRiZDM2NzcwMjNjY2RmODE3NCIsImlhdCI6MTYxNTc0MTkzMywiZXhwIjoxNjE1NzQ5MTMzfQ.KWoG57yITMSvLoidH0t59VWamny61LjPJoTag4xgQpQ',
  email: 'somebody@mail.com',
  password: '$2a$08$vurGz4nbH6wgswyY2RSZ.u31dDx0wTLO.SdYYVJVa3.D4ez10ijLu',
  avatarURL: '604e3bdbd3677023ccdf8174\\dan-velez-baby-groot-x.jpg',
};

const users = [];
users[0] = User;

const newUser = { email: 'test_email@mail.com', password: '87654321' };

const contacts = [
  {
    _id: '6044d0c427cec51980c4f81e',
    subscription: 'free',
    name: 'Goblin',
    email: 'slvitalik24@ukr.net',
    phone: '(099) 999-9999',
    owner: '604e3bdbd3677023ccdf8174',
  },
  {
    _id: '6044d0c427cec51980c4f82e',
    subscription: 'pro',
    name: 'Simka',
    email: 'simka@mail.com',
    phone: '(066) 666-6666',
    owner: '6604e3bdbd3677023ccdf8174',
  },
];

const newContact = {
  name: 'Nolik',
  email: 'nolik@mail.com',
  phone: '(050) 050-1050',
  subscription: 'premium',
};

module.exports = { User, users, newUser, contacts, newContact };
