import { Component } from 'react';
import { Button } from '@mui/material';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

import './ResearchPage.css';

export default class ResearchPage extends Component {
    constructor() {
        super();

        this.state = {
            question: [
                "1. 문제", 
                "2. 문제", 
                "3. 문제", 
                "4. 문제", 
                "5. 문제", 
                "6. 문제", 
            ],
            questionIndex : 0,
            ans: [],
        }
    }

    handleAddAns = (e, user_ans) => {
        let nextquestionIndex = this.state.questionIndex + 1;
        if (this.state.question.length == nextquestionIndex) {
            this.setState({
                ans: [...this.state.ans, user_ans]
            })
            // document.location.href = "/";
        }
        this.setState({
            questionIndex: nextquestionIndex,
            ans: [...this.state.ans, user_ans]
        })
    }

    render() {
        let {question, questionIndex} = this.state;

        return (<div>
        <Header />
        <div className="research_page_wrap">
            <div className="research_page">
            { questionIndex != question.length
              ? <div>
                    <div className="question">{question[questionIndex]}</div>
                    <div class="ans">
                        <Button className="ans_button" onClick={(e) => this.handleAddAns(e, 1)}>YES</Button>
                        <div className="ans_blank"></div>
                        <Button className="ans_button" onClick={(e) => this.handleAddAns(e, 2)}>NO</Button>
                    </div>
                </div>
              : <div className="loader">
                </div>
            }
            </div>
        </div>
        <Footer />
        </div>)
    }
}