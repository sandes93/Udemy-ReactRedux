
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import  VideoList from './components/video_list'

const API_KEY =  'AIzaSyBbvucyrLQWa8gRQBSmmx-CA_QcwPUgBlw';

class App extends Component{
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key:API_KEY, term: 'calisthenics'}, (videos)=> this.setState({videos}));

	}
	render(){ return (
		<div>
			<SearchBar />
			<VideoList videos = {this.state.videos}/>
		</div>
		)
	}
} 

//pass instance instead of class
ReactDOM.render(<App />, document.querySelector('.container'));