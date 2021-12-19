import { Component } from "react";
import Slider from "react-slick";

import "./CSS/RecommendMedia.css";

import POSTER1 from "../img/posters/movie_image1.jpeg";
import POSTER2 from "../img/posters/movie_image2.jpeg";
import POSTER3 from "../img/posters/movie_image3.jpeg";
import POSTER4 from "../img/posters/movie_image4.jpeg";
import POSTER5 from "../img/posters/movie_image5.jpeg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
};

export default class RecommmendMedia extends Component {
  constructor() {
    super();
  }
  state = {
    // media: [
    //     {
    //         name: "유체이탈자",
    //         poster: POSTER1,
    //     },
    //     {
    //         name: "엔칸토",
    //         poster: POSTER2,
    //     },
    //     {
    //         name: "고스트버스터즈 라이즈",
    //         poster: POSTER3,
    //     },
    //     {
    //         name: "로그 인 벨지움",
    //         poster: POSTER4
    //     },
    //     {
    //         name: "프렌치 디스패치",
    //         poster: POSTER5
    //     },
    //     {
    //         name: "유체이탈자",
    //         poster: POSTER1,
    //     },
    //     {
    //         name: "엔칸토",
    //         poster: POSTER2,
    //     },
    //     {
    //         name: "고스트버스터즈 라이즈",
    //         poster: POSTER3,
    //     },
    //     {
    //         name: "로그 인 벨지움",
    //         poster: POSTER4
    //     },
    //     {
    //         name: "프렌치 디스패치",
    //         poster: POSTER5
    //     },
    // ],
  };

  handldMediaPage = (e) => {
    window.location.href = `./media/${e.target.id}`;
  };

  async componentDidMount() {
    const api_detail = await this._reApi();
    this.setState({
      re: api_detail,
    });
    console.log("media", this.state.re);
  }
  _reApi = () => {
    return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=like_count")
      .then((response) => response.json())
      .then((json) => json.data.movies);
  };

  render() {
    let media = this.state.re;

    return (
      <div className="recommend_media_wrap">
        <div className="recommend_media">
          <h1 className="title">추천 영상</h1>
          <div className="container">
            <link
              rel="stylesheet"
              type="text/css"
              charset="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <Slider {...settings}>
              {media &&
                media.map((medium) => (
                  <div className="slider_div">
                    <div
                      className="medium"
                      style={{ backgroundImage: `URL(${medium.medium_cover_image})` }}
                      id={medium.imdb_code}
                      onClick={this.handldMediaPage}
                    ></div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
