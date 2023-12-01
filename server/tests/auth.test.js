```javascript
const request = require('supertest');
const app = require('../index');
const User = require('../models/User');
const { generateToken } = require('../utils/jwt');

describe('Authentication', () => {
  let token;

  beforeAll(async () => {
    await User.deleteMany({});

    const user = new User({
      username: 'testuser',
      password: 'testpassword',
      role: 'admin'
    });

    await user.save();

    token = generateToken(user._id, user.role);
  });

  test('User can login with valid credentials', async () => {
    const response = await request(app)
      .post('/users/login')
      .send({
        username: 'testuser',
        password: 'testpassword'
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  test('User cannot login with invalid credentials', async () => {
    const response = await request(app)
      .post('/users/login')
      .send({
        username: 'wronguser',
        password: 'wrongpassword'
      });

    expect(response.statusCode).toBe(401);
  });

  test('User can access protected route with valid token', async () => {
    const response = await request(app)
      .get('/users/profile')
      .set('Authorization', `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test('User cannot access protected route without token', async () => {
    const response = await request(app)
      .get('/users/profile');

    expect(response.statusCode).toBe(401);
  });

  test('User cannot access protected route with invalid token', async () => {
    const response = await request(app)
      .get('/users/profile')
      .set('Authorization', 'Bearer wrongtoken');

    expect(response.statusCode).toBe(401);
  });
});
```