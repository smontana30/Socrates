import React from 'react';
import { Row } from 'react-bootstrap';
import { ArrowLeftSquareFill, ChatLeftDotsFill, PeopleFill, } from 'react-bootstrap-icons';

// import ForceGraph2D from 'react-force-graph-2d';

class ConvNetwork extends React.Component {
	render() {

        const {
            numberOfUsers,
            numberOfTweets,
        } = this.props.data

		return (
			<div style = {{height: "83vh",display: "flex", flexDirection: Row}}>
                <div onClick = {() => this.props.onPress(null)}>
                    <div style= {{display: "flex", textAlign: "left", paddingLeft:15, paddingTop: 10}}>
                        <ArrowLeftSquareFill size= {35}/>
                    </div>
                </div>
                
                <div style= {{flex: 1, paddingTop: 10, fontSize: 30, textAlign:"right"}}>
                    Join the conversation on Twitter!
                </div>
                <div style= {{flex:0.2, paddingTop: 10, fontSize: 30, display: "flex", justifyContent: "space-around"}}>
                    {numberOfTweets}
                    <ChatLeftDotsFill size = {35}/>
                    {numberOfUsers}
                    <PeopleFill size = {35}/>
                </div>




			</div>
		)
	}
}

export default ConvNetwork