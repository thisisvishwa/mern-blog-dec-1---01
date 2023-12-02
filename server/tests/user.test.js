```javascript
const request = require('supertest');
const app = require('../index');
const User = require('../models/User');

describe('User Management and Authentication', () => {
  let token;
  let userId;

  beforeAll(async () => {
    await User.deleteMany({});
  });

  test('Should register a new user', async () => {
    const res = await request(app)
      .post('/users/register')
      .send({
        username: 'testuser',
        email: 'testuser@gmail.com',
        password: 'testpassword',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'USER_REGISTERED');
    userId = res.body.user._id;
  });

  test('Should login the user', async () => {
    const res = await request(app)
      .post('/users/login')
      .send({
        email: 'testuser@gmail.com',
        password: 'testpassword',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'USER_LOGGED_IN');
    token = res.body.token;
  });

  test('Should get the user profile', async () => {
    const res = await request(app)
      .get(`/users/${userId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('username', 'testuser');
  });

  test('Should update the user profile', async () => {
    const res = await request(app)
      .put(`/users/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        username: 'updateduser',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'USER_UPDATED');
  });

  test('Should delete the user', async () => {
    const res = await request(app)
      .delete(`/users/${userId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'USER_DELETED');
  });

  afterAll(async () => {
    await User.deleteMany({});
  });
});
```