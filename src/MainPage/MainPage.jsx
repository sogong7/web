import { Component } from "react";
import { Button } from "@mui/material";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

import Top10Video from "./Top10Video";
import "./CSS/MainPage.css";

export default class MainPage extends Component {
  constructor() {
    super();
  }

  handlePageChange(e) {
    window.location.href = "/search";
  }

  render() {
    return (
      <div>
        <Header />
        <div className="main_page_wrap">
          <div className="main_page">
            <div className="slate_top" onClick={this.handlePageChange}>
              <Button className="find_video">내가 원하는 영상 찾아보기</Button>
            </div>
            <div className="slate_bottom">
              <Top10Video />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
