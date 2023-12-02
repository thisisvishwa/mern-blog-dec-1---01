```javascript
const request = require('supertest');
const app = require('../index');
const { Tag } = require('../models/Tag');

describe('Tag API endpoints', () => {
    let tag;

    beforeAll(async () => {
        tag = new Tag({ name: 'Test Tag' });
        await tag.save();
    });

    afterAll(async () => {
        await Tag.deleteMany();
    });

    // Test for GET request to retrieve all tags
    it('should retrieve all tags', async () => {
        const res = await request(app).get('/tags');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toBeGreaterThan(0);
    });

    // Test for GET request to retrieve a specific tag
    it('should retrieve a specific tag', async () => {
        const res = await request(app).get(`/tags/${tag._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual(tag.name);
    });

    // Test for POST request to create a new tag
    it('should create a new tag', async () => {
        const res = await request(app).post('/tags').send({ name: 'New Tag' });
        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toEqual('New Tag');
    });

    // Test for PUT request to update an existing tag
    it('should update an existing tag', async () => {
        const res = await request(app).put(`/tags/${tag._id}`).send({ name: 'Updated Tag' });
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual('Updated Tag');
    });

    // Test for DELETE request to delete a tag
    it('should delete a tag', async () => {
        const res = await request(app).delete(`/tags/${tag._id}`);
        expect(res.statusCode).toEqual(204);
    });
});
```