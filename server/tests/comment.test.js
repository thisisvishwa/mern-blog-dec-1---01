```javascript
const request = require('supertest');
const app = require('../index');
const Comment = require('../models/Comment');

describe('Comment API', () => {
    let commentData = {
        content: 'This is a test comment',
        author: 'Test User',
        postId: '1234567890'
    };

    beforeEach(async () => {
        await Comment.deleteMany();
    });

    test('Should create a new comment', async () => {
        await request(app)
            .post('/comments')
            .send(commentData)
            .expect(201);
    });

    test('Should get all comments', async () => {
        const comment = new Comment(commentData);
        await comment.save();

        await request(app)
            .get('/comments')
            .expect(200)
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(1);
            });
    });

    test('Should update a comment', async () => {
        const comment = new Comment(commentData);
        await comment.save();

        await request(app)
            .patch(`/comments/${comment._id}`)
            .send({ content: 'This is an updated test comment' })
            .expect(200)
            .then(response => {
                expect(response.body.content).toEqual('This is an updated test comment');
            });
    });

    test('Should delete a comment', async () => {
        const comment = new Comment(commentData);
        await comment.save();

        await request(app)
            .delete(`/comments/${comment._id}`)
            .expect(200)
            .then(async () => {
                const deletedComment = await Comment.findById(comment._id);
                expect(deletedComment).toBeNull();
            });
    });
});
```