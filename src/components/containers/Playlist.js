import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import NightMode from '../Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist'

const Playlist = props => {
	return (
		<StyledPlaylist>
			<NightMode />
			<PlaylistHeader />
			<PlaylistItems />
		</StyledPlaylist>
	)
}

export default Playlist