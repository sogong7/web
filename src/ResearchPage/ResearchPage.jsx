import { Component } from "react";
import { Button } from "@mui/material";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

import "./ResearchPage.css";

export default class ResearchPage extends Component {
  constructor() {
    super();

    this.state = {
      question: [
        "1. 액션을 좋아하시나요?",
        "2. 로맨스를 좋아하시나요?",
        "3. 하이틴을 좋아하시나요?",
        "4. 미국 영화를 좋아하시나요?",
        "5. 런닝타임이 긴 영화는 괜찮으신가요?",
        "6. CG가 화려한 영화는 괜찮으신가요?",
        "7. 현실적인 영화 내용을 좋아하시나요?",
        "8. 잔인한 장면이 나오는 걸 좋아하시나요?",
        "9. 독립영화를 좋아하시나요?",
        "10. 감독이 유명하지 않아도 되나요?",
      ],
      questionIndex: 0,
      ans: [],
    };
  }

  handleAddAns = (e, user_ans) => {
    let nextquestionIndex = this.state.questionIndex + 1;
    this.setState({
      questionIndex: nextquestionIndex,
      ans: [...this.state.ans, user_ans],
    });
  };

  render() {
    let { question, questionIndex } = this.state;

    return (
      <div>
        <Header />
        <div className="research_page_wrap">
          <div className="research_page">
            <div className="question">{question[questionIndex]}</div>
            <div class="ans">
              <Button className="ans_button" onClick={(e) => this.handleAddAns(e, 1)}>
                YES
              </Button>
              <div className="ans_blank"></div>
              <Button className="ans_button" onClick={(e) => this.handleAddAns(e, 2)}>
                NO
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
