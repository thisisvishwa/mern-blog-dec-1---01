```javascript
const request = require('supertest');
const app = require('../index');
const Category = require('../models/Category');

describe('Category API', () => {
    let categoryId;

    beforeAll(async () => {
        await Category.deleteMany();

        const category = new Category({ name: 'Test Category' });
        categoryId = category._id;
        await category.save();
    });

    test('should create a new category', async () => {
        const res = await request(app)
            .post('/categories')
            .send({
                name: 'New Category'
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('category');
    });

    test('should fetch all categories', async () => {
        const res = await request(app).get('/categories');

        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toEqual(2);
    });

    test('should fetch a specific category', async () => {
        const res = await request(app).get(`/categories/${categoryId}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('category');
        expect(res.body.category._id).toEqual(categoryId.toString());
    });

    test('should update a category', async () => {
        const res = await request(app)
            .put(`/categories/${categoryId}`)
            .send({
                name: 'Updated Category'
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('category');
        expect(res.body.category.name).toEqual('Updated Category');
    });

    test('should delete a category', async () => {
        const res = await request(app).delete(`/categories/${categoryId}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message');
    });
});
```