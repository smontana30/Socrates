import React, {Component} from 'react';
import "./Tweet.css"
import TweetCrown from "../assets/images/TweetCrown.png";
import { ChatLeftDotsFill, PeopleFill, EmojiSmile } from 'react-bootstrap-icons';

class Tweet extends React.Component {

    render() {
        const {
            username,
            replying,
            message, 
            photo,
            numberOfUsers,
            numberOfTweets,
            sentiment
        } = this.props.data

        return (
            <div className= "tweets" onClick = {() => this.props.onPress(this.props.data)}>
                
                <div style = {{display: "flex", alignItems: "center", flex: .2}}>
                    <div className= 'photo'> 
                        <img src= {TweetCrown}/>
                    </div>
                    <div style = {{flex: .8}}>
                        <div className= 'username'> {username} </div>
                        <div className= 'replying'> {replying} </div>
                    </div>
                    <div className= 'icon-container' style ={{paddingRight: 15}}> 
                        {numberOfTweets}
                        <ChatLeftDotsFill size = {25}/>
                        {numberOfUsers}
                        <PeopleFill size = {25}/>
                    </div>
                </div>

                <div className = "message">
                    {message}
                </div>

                <div className= 'smileyIcon'> 
                        <EmojiSmile size = {25}/>
                </div>

                
            </div>
        );
    }
}

export default Tweet;