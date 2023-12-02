```javascript
import React from 'react';

class Performance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            performanceMetrics: null,
        };
    }

    componentDidMount() {
        this.getPerformanceMetrics();
    }

    getPerformanceMetrics = async () => {
        // Fetch performance metrics from the server
        // This is a placeholder and should be replaced with actual server request
        const response = await fetch('/api/performance');
        const data = await response.json();

        this.setState({
            performanceMetrics: data,
        });
    }

    render() {
        const { performanceMetrics } = this.state;

        if (!performanceMetrics) {
            return <div>Loading...</div>;
        }

        return (
            <div id="performance-metrics">
                <h2>Performance Metrics</h2>
                <p>Database Query Speed: {performanceMetrics.dbQuerySpeed}ms</p>
                <p>Image Load Time: {performanceMetrics.imageLoadTime}ms</p>
            </div>
        );
    }
}

export default Performance;
```