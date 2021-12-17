import { Component } from 'react';

import Header from "../Header/Header";
import RecommmendMedia from "./RecommendMedia";
import Top10Video from "../MainPage/Top10Video";
import Footer from '../Footer/Footer.jsx';

import './CSS/RecommendPage.css';

export default class RecommendPage extends Component {
    render() {
        return (<div>
            <Header />
            <div className='recommend_page_wrap'>
                <RecommmendMedia />
                <Top10Video />
            </div>
            <Footer />
        </div>)
    }
}