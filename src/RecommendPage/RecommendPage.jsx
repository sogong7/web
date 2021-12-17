import { Component } from 'react';

import Header from "../Header/Header";
import RecommmendMedia from "./RecommendMedia";
import Top10Video from "../MainPage/Top10Video";
import Footer from '../Footer/Footer.jsx';

export default class RecommendPage extends Component {
    render() {
        return (<div>
            <Header />
            <RecommmendMedia />
            <Top10Video />
            <Footer />
        </div>)
    }
}