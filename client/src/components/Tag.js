```javascript
import React from 'react';

class Tag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: []
        };
    }

    componentDidMount() {
        // Fetch tags from API and update state
    }

    render() {
        return (
            <div id="tag-list">
                {this.state.tags.map(tag => (
                    <div key={tag.id} className="tag">
                        {tag.name}
                    </div>
                ))}
            </div>
        );
    }
}

export default Tag;
```