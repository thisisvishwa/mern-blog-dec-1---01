```javascript
const request = require('supertest');
const app = require('../index');
const { generateToken } = require('../utils/jwt');

describe('Authorization Middleware', () => {
  let token;

  beforeAll(async () => {
    token = await generateToken({ id: 1, role: 'admin' });
  });

  it('should allow access with valid token', async () => {
    const res = await request(app)
      .get('/users')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
  });

  it('should deny access without token', async () => {
    const res = await request(app)
      .get('/users');

    expect(res.statusCode).toEqual(401);
  });

  it('should deny access with invalid token', async () => {
    const res = await request(app)
      .get('/users')
      .set('Authorization', 'Bearer invalidtoken');

    expect(res.statusCode).toEqual(401);
  });

  it('should deny access if user role does not have permission', async () => {
    const userToken = await generateToken({ id: 2, role: 'user' });

    const res = await request(app)
      .get('/users')
      .set('Authorization', `Bearer ${userToken}`);

    expect(res.statusCode).toEqual(403);
  });
});
```