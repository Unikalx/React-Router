import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Main from './Main'


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        );
    }
}

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
        </nav>
    </header>
);

export default App;
