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
                <div className='recommend_page'>
                    <RecommmendMedia />
                    <div style={{width:"1080px", margin: "auto"}}>
                        <Top10Video />
                    </div>
                </div>
            </div>
            <Footer />
        </div>)
    }
}