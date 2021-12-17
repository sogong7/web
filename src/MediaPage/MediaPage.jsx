import { Component } from 'react';

import Header from "../Header/Header";
import Footer from '../Footer/Footer.jsx';

import './MediaPage.css';

export default class MediaPage extends Component {
    constructor() {
        super();

        this.state = {
            media : {
                title: '해리포터와 마법사의 돌',
                poster: 'https://movie-phinf.pstatic.net/20181019_236/1539926790655oHv5z_JPEG/movie_image.jpg',
                releaseDate: '2001-12-14',
                director: '크리스 콜럼버스',
                movieStar: ['다니엘 래드클리프', '루퍼트 그린트', '엠마 왓슨', '로비 콜트레인', '리처드 해리스', '앨런 릭먼', '이안 하트', '톰 펠튼',],
                starScore: 9.5,
                maxStarScore: 10.0,
                plot: `해리 포터(다니엘 래드클리프 분)는 위압적인 버논 숙부(리챠드 그리피스 분)와 냉담한 이모 페투니아 (피오나 쇼 분), 욕심 많고 버릇없는 사촌 더즐리(해리 멜링 분) 밑에서 갖은 구박을 견디며 계단 밑 벽장에서 생활한다. 이모네 식구들 역시 해리와의 동거가 불편하기는 마찬가지. 이모 페투니아에겐 해리가 이상한(?) 언니 부부에 관한 기억을 떠올리게 만드는 달갑지 않은 존재다. 11살 생일이 며칠 앞으로 다가왔지만 한번도 생일파티를 치르거나 제대로 된 생일선물을 받아 본 적이 없는 해리로서는 특별히 신날 것도 기대 할 것도 없다. 11살 생일을 며칠 앞둔 어느 날 해리에게 초록색 잉크로 쓰여진 한 통의 편지가 배달된다. 그 편지의 내용은 다름 아닌 해리의 11살 생일을 맞이하여 전설적인“호그와트 마법학교”에서 보낸 입학초대장이었다. 그리고 해리의 생일을 축하하러 온 거인 해그리드는 해리가 모르고 있었던 해리의 진정한 정체를 알려주는데. 그것은 바로 해리가 굉장한 능력을 지닌 마법사라는 것! 해리는 해그리드의 지시대로 자신을 구박하던 이모네 집을 주저없이 떠나 호그와트행을 택한다. 런던의 킹스크로스 역에 있는 비밀의 9와 3/4 승장장에서 호그와트 특급열차를 탄 해리는 열차 안에서 같은 호그와트 마법학교 입학생인 헤르미온느 그레인저(엠마 왓슨 분)와 론 위즐리 (루퍼트 그린트 분)를 만나 친구가 된다. 이들과 함께 호그와트에 입학한 해리는, 놀라운 모험의 세계를 경험하며 갖가지 신기한 마법들을 배워 나간다. 또한 빗자루를 타고 공중을 날아다니며 경기하는 스릴 만점의 퀴디치 게임에서 스타로 탄생하게 되며, 용, 머리가 셋 달린 개, 유니콘, 켄타우루스, 히포그리프(말 몸에 독수리 머리와 날개를 가진 괴물)등 신비한 동물들과 마주치며 모험을 즐긴다. 그러던 어느 날 해리는 호그와트 지하실에 '영원한 생을 가져다주는 마법사의 돌'이 비밀리에 보관되어 있다는 것을 알게되고, 해리의 부모님을 죽인 볼드모트가 그 돌을 노린다는 사실도 알게 된다. 볼드모트는 바로 해리를 죽이려다 실패하고 이마에 번개모양의 흉터를 남긴 장본인이다. 해리는 볼드모트로부터 마법의 돌과 호그와트 마법학교를 지키기 위해 필사의 노력을 하는데...`,
            },
        }
    }

    render() {
        let {media} = this.state;

        return (<div>
            <Header />
            <div className='media_page_wrap'>
                <div className='media_page clear_float'>
                    <div className="media_info clear_float" style={{width:"1080px", margin: "auto"}}>
                        <div className="media_poster" style={{backgroundImage: `URL(${media.poster})`, backgroundSize: 'cover' }}></div>
                        <h1>해리포터와 마법사의 돌</h1>
                        <p><span className="title">개봉일 : </span>{media.releaseDate}</p>
                        <p><span className="title">감독 : </span>{media.director}</p>
                        <p><span className="title">출연 : </span>
                            {media.movieStar.map((movieStar, index) => (
                                index == media.movieStar.length - 1 ? movieStar : movieStar+', '
                            ))}
                        </p>
                        <p><span className="title">별점 : </span>{media.starScore} / {media.maxStarScore}</p>
                    </div>
                    <div className="media_info" style={{width:"1080px", margin: "auto"}}>
                        <p className="title">줄거리</p>
                        <p>{media.plot}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>)
    }
}