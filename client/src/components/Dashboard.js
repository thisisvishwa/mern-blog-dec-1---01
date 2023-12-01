```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [statistics, setStatistics] = useState({
    totalPosts: 0,
    totalComments: 0,
    userEngagement: 0,
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get('/api/dashboard');
        setStatistics(response.data);
      } catch (error) {
        console.error('Error fetching dashboard statistics', error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <div id="dashboard-stats">
      <h2>Dashboard</h2>
      <p>Total Posts: {statistics.totalPosts}</p>
      <p>Total Comments: {statistics.totalComments}</p>
      <p>User Engagement: {statistics.userEngagement}</p>
    </div>
  );
};

export default Dashboard;
```