import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/blog/:id" component={Blog} />
                <Route path="/admin" component={AdminDashboard} />
            </Switch>
        </Router>
    );
};

export default App;
