```javascript
const request = require('supertest');
const app = require('../index');
const { optimizePerformance } = require('../utils/performance');

describe('Performance Testing', () => {
    test('Database query optimization', async () => {
        const response = await request(app).get('/posts');
        const timeBeforeOptimization = response.headers['x-response-time'];

        optimizePerformance();

        const optimizedResponse = await request(app).get('/posts');
        const timeAfterOptimization = optimizedResponse.headers['x-response-time'];

        expect(parseInt(timeAfterOptimization)).toBeLessThan(parseInt(timeBeforeOptimization));
    });

    test('Image compression and caching', async () => {
        const response = await request(app).get('/posts/1/image');
        const sizeBeforeOptimization = response.headers['content-length'];

        optimizePerformance();

        const optimizedResponse = await request(app).get('/posts/1/image');
        const sizeAfterOptimization = optimizedResponse.headers['content-length'];

        expect(parseInt(sizeAfterOptimization)).toBeLessThan(parseInt(sizeBeforeOptimization));
    });
});
```