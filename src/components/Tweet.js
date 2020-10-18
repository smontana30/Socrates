import React, {Component} from 'react';
import "./Tweet.css"
import TweetCrown from "../assets/images/TweetCrown.png";

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
            <div className= "tweets">
                <div className= 'photo'>
                    <img src= {TweetCrown} />
                </div>
                
                <div className= 'username'>
                    {username}
                </div>

                <div className= 'replying'>
                    {replying}
                </div>
                
            </div>
        );
    }
}

export default Tweet;