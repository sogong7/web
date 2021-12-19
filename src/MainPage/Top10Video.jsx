import { Component } from 'react';
// import POSTER1 from '../img/posters/movie_image1.jpeg'
// import POSTER2 from '../img/posters/movie_image2.jpeg'
// import POSTER3 from '../img/posters/movie_image3.jpeg'
// import POSTER4 from '../img/posters/movie_image4.jpeg'
// import POSTER5 from '../img/posters/movie_image5.jpeg'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './CSS/Top10Video.css';

export default class MainPage extends Component {
    constructor() {
        super();
    }
    
    state = {
        // customers: ""
    }

    // componentDidMount(){
    //     this.callApi()
    //     .then(res=> {
    //         this.setState({customers: res})
    // })
    //     .catch(err=> console.log(err));
    // }

    async componentDidMount(){
        const api_movies = await this._movieApi()
        this.setState({
            movies: api_movies
        })
            console.log('movies',this.state.movies)
    }
    

    callApi = async () => {
        const reponse = await fetch('/api/customers');
        const body = await reponse.json();
        return body;
    }

    _movieApi = () => {
        return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=download_count')
        .then(response => response.json())
        .then(json => json.data.movies)
      }

    render() {
        // let top10_video = this.state.customers;
        let top10_video = this.state.movies;
        return (<div className="top10_video_wrap">
            <TableContainer component={Paper} className="top10_video_table" style={{backgroundColor:'transparent', borderRadius: '0', boxShadow: 'none'}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <caption className="top10">Top 10</caption>
                    <TableBody style={{backgroundColor: 'white'}}>
                        {top10_video&&top10_video.map((row, index) => (
                            (index<10)&&
                            <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell align="center"  className="table_cell" style={{ padding: "30" }} component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            {/* {console.log(row.medium_cover_image)} */}
                            <TableCell align="center" className="table_cell poster_cell" style={{width: "5%", padding: "30", backgroundImage: `url(${row.medium_cover_image})`}} />
                            <TableCell align="left"  className="table_cell" style={{width: "90%", padding: "30" }}>{row.title}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>)
    }
}