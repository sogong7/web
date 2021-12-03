import { Component } from 'react';
import { Button } from '@mui/material';
import './Header.css';

export default class Header extends Component {
    constructor() {
        super();

        this.state = {
            user_name: '사용자',
        }
    }

    render() {
        let is_login = false;

        return (<div className="header_wrap">
            <div className="header">
                소공 7조
                {is_login ?
                    <span className="login_name">{this.state.user_name}</span>
                    : <Button className = "login">로그인</Button>
                }
            </div>
        </div>)
    }
}