import React from 'react';
import { ThemeProvider } from 'styled-components';
import Video from '../Video';
import Playist from '../containers/Playlist';
import StyledSnPlayer from '../styles/StyledSnPlayer'
const theme = {
	bgcolor: "#353535",
	bgcolorItem: '#414141',
	bgcolorItemActive: "#405c65",
	bgcolorPlayed: "#526d4e",
	border: "none",
	borderPlayed: 'none',
	color: "#fff",
}

const themeLight = {
	bgcolor: "#fff",
	bgcolorItem: '#fff',
	bgcolorItemActive: "#80a7b1",
	bgcolorPlayed: "#7d9979",
	border: "1 px solid #353535",
	borderPlayed: 'none',
	color: "#353535",
}


const ShPlayer = props => {
	return (
		<ThemeProvider theme={state.nightMode ? theme : themeLight}>
			<StyledSnPlayer>
				<Video />
				<Playist />
			</StyledSnPlayer>
		</ThemeProvider>
	)
}

export default ShPlayer
