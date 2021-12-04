import { Component } from 'react';
import POSTER1 from '../img/posters/movie_image1.jpeg'
import POSTER2 from '../img/posters/movie_image2.jpeg'
import POSTER3 from '../img/posters/movie_image3.jpeg'
import POSTER4 from '../img/posters/movie_image4.jpeg'
import POSTER5 from '../img/posters/movie_image5.jpeg'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './CSS/Top10Video.css';

export default class Top10Video extends Component {
    constructor() {
        super();

        this.state = {
            top10_video: [
                {
                    name: "유체이탈자",
                    poster: POSTER1,
                },
                {
                    name: "엔칸토",
                    poster: POSTER2,
                },
                {
                    name: "고스트버스터즈 라이즈",
                    poster: POSTER3,
                },
                {
                    name: "로그 인 벨지움",
                    poster: POSTER4
                },
                {
                    name: "프렌치 디스패치",
                    poster: POSTER5
                },
                {
                    name: "유체이탈자",
                    poster: POSTER1,
                },
                {
                    name: "엔칸토",
                    poster: POSTER2,
                },
                {
                    name: "고스트버스터즈 라이즈",
                    poster: POSTER3,
                },
                {
                    name: "로그 인 벨지움",
                    poster: POSTER4
                },
                {
                    name: "프렌치 디스패치",
                    poster: POSTER5
                },
            ],
        }
    }

    render() {
        let { top10_video } = this.state;

        return (<div className="top10_video_wrap">
            <TableContainer component={Paper} className="top10_video_table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <caption className="top10">Top 10</caption>
                    <TableBody>
                        {top10_video.map((row, index) => (
                            <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell align="center"  className="table_cell" style={{ padding: "30" }} component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            {console.log(row.poster)}
                            <TableCell align="center" className="table_cell poster_cell" style={{width: "5%", padding: "30", backgroundImage: `url(${row.poster})`}} />
                            <TableCell align="left"  className="table_cell" style={{width: "90%", padding: "30" }}>{row.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>)
    }
}