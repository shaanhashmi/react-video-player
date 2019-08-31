import React from 'react';
import StyledPlaylistItem from './styles/StyledPlaylistItem';

const PlaylistItem = ({ video, active, played }) => (
	<StyledPlaylistItem active={active} played={played}>
		<div className="sh-player__video-nr">{video.num}</div>
		<div className="sh-player__video-name">{video.title}</div>
		<div className="sh-player__video-time">{video.duration}</div>
	</StyledPlaylistItem>
);

// const PlaylistItem = props => (
// 	<StyledPlaylistItem>
// 		PlaylistItem!!!
// 	</StyledPlaylistItem>
// )


export default PlaylistItem;