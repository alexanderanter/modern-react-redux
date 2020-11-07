import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongDetail = ({ selectedSong }) => {
	//make sure a song is selected! If not return out, if not ERROR!
	if (!selectedSong) {
		return <div>Select a song</div>;
	}
	return (
		<div>
			<h3>Details For:</h3>
			<p>Title: {selectedSong.title} </p>
			<p>Duration: {selectedSong.duration} </p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { selectedSong: state.selectedSong };
};

//invoke the function inside the connect function
export default connect(mapStateToProps)(SongDetail);
