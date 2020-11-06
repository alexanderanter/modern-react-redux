import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
	renderedSongs() {
		return this.props.songs.map((song) => {
			return (
				<div className="item" key={song.title}>
					{song.title}
					<div className="right floated content">
						<button className="ui button primary">Select</button>
					</div>
				</div>
			);
		});
	}
	render() {
		console.log(this.props);
		return <div className="ui divided list">{this.renderedSongs()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { songs: state.songs };
};

//invoke the function inside the connect function
export default connect(mapStateToProps)(SongList);
