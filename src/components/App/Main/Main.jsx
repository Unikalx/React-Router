import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import Router from './Router'


class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/roster' component={Router}/>
                    <Route path='/schedule' component={Schedule}/>
                </Switch>
            </main>
        );
    }
}
const Schedule = () => (
    <div>
        <ul>
            <li>6/5 @ Evergreens</li>
            <li>6/8 vs Kickers</li>
            <li>6/14 @ United</li>
        </ul>
    </div>
);

const Home = () => (
    <div>
        <h1>Welcome to the Tornadoes Website!</h1>
    </div>
);

export default Main;