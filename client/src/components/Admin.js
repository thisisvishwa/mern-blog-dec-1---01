```javascript
import React, { Component } from 'react';
import Dashboard from './Dashboard';
import UserManagement from './UserManagement';
import ContentManagement from './ContentManagement';
import Analytics from './Analytics';
import Customization from './Customization';

class Admin extends Component {
  state = {
    activeTab: 'dashboard'
  };

  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div id="admin-panel">
        <nav>
          <ul>
            <li onClick={() => this.handleTabChange('dashboard')}>Dashboard</li>
            <li onClick={() => this.handleTabChange('userManagement')}>User Management</li>
            <li onClick={() => this.handleTabChange('contentManagement')}>Content Management</li>
            <li onClick={() => this.handleTabChange('analytics')}>Analytics</li>
            <li onClick={() => this.handleTabChange('customization')}>Customization</li>
          </ul>
        </nav>
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'userManagement' && <UserManagement />}
        {activeTab === 'contentManagement' && <ContentManagement />}
        {activeTab === 'analytics' && <Analytics />}
        {activeTab === 'customization' && <Customization />}
      </div>
    );
  }
}

export default Admin;
```