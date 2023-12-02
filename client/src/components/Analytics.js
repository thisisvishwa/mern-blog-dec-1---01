```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Analytics = () => {
    const [analyticsData, setAnalyticsData] = useState({});

    useEffect(() => {
        fetchAnalyticsData();
    }, []);

    const fetchAnalyticsData = async () => {
        try {
            const response = await axios.get('/api/analytics');
            setAnalyticsData(response.data);
        } catch (error) {
            console.error('Error fetching analytics data:', error);
        }
    };

    return (
        <div id="analytics-view">
            <h2>Blog Analytics</h2>
            <div>
                <h3>Popular Posts</h3>
                {/* Display popular posts data */}
            </div>
            <div>
                <h3>User Demographics</h3>
                {/* Display user demographics data */}
            </div>
            <div>
                <h3>Engagement Metrics</h3>
                {/* Display engagement metrics data */}
            </div>
        </div>
    );
};

export default Analytics;
```