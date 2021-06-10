const bcrypt = require('bcryptjs');

const testPassword = 'uncle jesse';

const syncStart = new Date().getTime();

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(testPassword, salt);

const syncEnd = new Date().getTime();
console.log(`sync elapsed:`, syncEnd - syncStart);


const asyncStart = new Date().getTime();

bcrypt.genSalt(10, (err, salt) => {
  console.log(salt);
  bcrypt.hash(testPassword, salt, (err, hash) => {
    console.log(hash);
    const asyncEnd = new Date().getTime();
    console.log(`async elapsed:`, asyncEnd - asyncStart);
  });
});




// const hashedPassword = '$2a$10$JfXN26l6sVcLAZr0wXIDROxzIEO7UOjg7yvqPNgIsKAGDwD/LHAEC';

// bcrypt.compare(testPassword, hashedPassword, (err, result) => {
//   console.log('result', result);
// });
