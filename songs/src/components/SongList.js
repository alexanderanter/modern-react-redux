import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
	renderedSongs() {
		return this.props.songs.map((song) => {
			return (
				<div className="item" key={song.title}>
					{song.title}

					<div className="right floated content">
						<button
							className="ui button primary"
							onClick={() => this.props.selectSong(song)}
						>
							Select
						</button>
						<div></div>
					</div>
				</div>
			);
		});
	}
	render() {
		return <div className="ui divided list">{this.renderedSongs()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { songs: state.songs, selectedSong: state.selectedSong };
};

//invoke the function inside the connect function
export default connect(mapStateToProps, {
	selectSong: selectSong,
})(SongList);
