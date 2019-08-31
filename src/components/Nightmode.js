import React from 'react'
import StyledNightmode from './styles/StyledNightmode';

const Nightmode = ({ nightModeCallback, nightMode }) => (
	<StyledNightmode>
		<span>NightMode:</span>
		<label className="switch">
			<input type="checkbox" checked={nightMode} onChange={nightModeCallback} />
			<span className="slider round"></span>
		</label>
	</StyledNightmode>
)

export default Nightmode;
