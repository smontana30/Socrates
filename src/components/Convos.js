import React from 'react';
import ConvNetwork from './ConvNetwork'
import Tweet from './Tweet'
import data from '../assets/data/mocktweets.json'

class Convos extends React.Component {
	constructor(props) {
		super(props)

		var i,j,temparray,chunk = 2;
		var dataChunks = []

		for (i=0,j=data.length; i<j; i+=chunk) {
			dataChunks.push(data.slice(i,i+chunk));
		}

		this.state = {data: dataChunks}
	}

	render() {
		console.log(this.state.data)
		return (
			<div className = "tweetBoxes">
				{
					this.state.data.map(arr => (
						<div className= 'tweetBoxRow'>
							{
								arr.map(data => (
									<Tweet data = {data}/>
								))

							}
            			</div> 
					))
				}
			</div>
		)
	}
}

export default Convos