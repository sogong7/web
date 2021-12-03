import { Component } from 'react';
import './Footer.css';

export default class Header extends Component {
    constructor() {
        super();
    }

    render() {
        let is_login = false;

        return (<div className="footer_wrap">
            <footer className="footer">
                <p>&copy; 한양대학교 컴퓨터소프트웨어학부 소공7조</p>
            </footer>
        </div>)
    }
}