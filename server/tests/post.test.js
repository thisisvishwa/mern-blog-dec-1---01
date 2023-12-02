```javascript
const request = require('supertest');
const app = require('../../index');
const Post = require('../models/Post');

describe('Post API', () => {
    let postId;

    beforeAll(async () => {
        await Post.deleteMany();

        const post = new Post({
            title: 'Test Post',
            content: 'This is a test post.',
            category: 'Test',
            tags: ['test1', 'test2']
        });

        const savedPost = await post.save();
        postId = savedPost._id;
    });

    test('should create a new post', async () => {
        const res = await request(app)
            .post('/posts')
            .send({
                title: 'New Post',
                content: 'This is a new post.',
                category: 'New',
                tags: ['new1', 'new2']
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body.title).toEqual('New Post');
    });

    test('should get a post by id', async () => {
        const res = await request(app).get(`/posts/${postId}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual('Test Post');
    });

    test('should update a post', async () => {
        const res = await request(app)
            .put(`/posts/${postId}`)
            .send({
                title: 'Updated Post',
                content: 'This is an updated post.'
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual('Updated Post');
    });

    test('should delete a post', async () => {
        const res = await request(app).delete(`/posts/${postId}`);

        expect(res.statusCode).toEqual(204);
    });

    afterAll(async () => {
        await Post.deleteMany();
    });
});
```