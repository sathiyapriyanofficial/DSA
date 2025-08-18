// const crypto = require('crypto');

// const hash = crypto.createHash('md5').update('hello world').digest('hex');
// console.log(hash); // 5eb63bbbe01eeed093cb22bb8f5acdc3

/* 

- Hash - key value pair
  - fast access 
  - there is no order

- insert, access, delete, search - O(1)
- map - maintain order. 

Hash Collisions 
- slow for reading and writing with hash table 
- O(n/k) 
- You can solve - linked list. 

*/

const user = {
  id: 101,
  username: 'skywalker_87',
  fullName: 'Anirudh Velavan',
  email: 'anirudh87@example.com',
  phone: '+91-9876543210',
  age: 27,
  gender: 'male',
  country: 'India',
  city: 'Chennai',
  isActive: true,
  joinedAt: '2023-11-15T10:45:00Z',
  preferences: {
    theme: 'dark',
    notifications: true,
    language: 'en-IN',
  },
};
