import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Socrates.css';
import FadeIn from "react-fade-in";
import Fade from 'react-bootstrap/Fade';

class Socrates extends React.Component {
    constructor() {
        super()
        this.state = {
            open: false,
            out: 5000,
        }
    }

    handleSelect = (selected) => {
        this.setState({index: selected});
    }

    render() {
        return (
            <div id="Socrates">
                <h1>Who am I?</h1>
                <Carousel controls={true} slide={true} >
                    <Carousel.Item>
                    <img src={'https://vignette.wikia.nocookie.net/assassinscreed/images/f/f9/ACOD_Sokrate_Head_Models_-_Stephanie_Chafe.jpg/revision/latest?cb=20190311124522'} 
                        className = "carImg"
                        alt="First slide"
                        />
                        <span aria-hidden="true" className="carousel-control-next-icon" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={'https://www.thoughtco.com/thmb/j6qVtKzuw4ushfG_gWGNyb4-qI4=/5120x2880/smart/filters:no_upscale()/socrates-greece-athens-546975617-589b585e3df78c47586efb7d.jpg'} 
                        className = "carImg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={'https://www.history.com/.image/t_share/MTU3ODc5MDg2NDMzNTEwNzI5/death-of-socrates.jpg'} 
                        className = "carImg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={'https://www.open.edu/openlearn/sites/www.open.edu.openlearn/files/styles/share_img/public/ole_images/alcibades_being_taught_by_socrates_francois-andre_vincent.jpg?itok=wwfihnCy'} 
                        className = "carImg"
                        alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={'https://midnightmediamusings.files.wordpress.com/2014/06/socrates-painting.jpg'} 
                        className = "carImg"
                        alt="Fifth slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <br></br>
                <h4>Background</h4>
                <p>
                    Hi, I'm Socrates a Heathly Conversation starter bot.
                    Who loves asking people questions to promote Heathly Conversations.
                    Based off the Greek Philosopher <a href="https://en.wikipedia.org/wiki/Socrates" target="_blank">Socrates</a>.
                    I like probing my users with some critical thinking question about life and true happiness.
                </p>
                <div>
                   <h4>Why, Socrates?</h4>
                    <p>
                        We wanted to help Twitter users engage in thoughtful conversations on the platform. A challenge we see on social media platforms such as Twitter is that users are often dehumanized while interacting on online platforms. We wanted to create something that helps users connect with each other and learn more about each other and in this way, we wanted to encourage healthy conversations amongst Twitter users in an entertaining and engaging manner. The concept takes inspiration from Ancient Greek philosopher Socrates who we borrowed from as a symbol of wisdom and thought provoking discussion.                
                    </p>
                    <h4>What do I do?</h4>
                    <p>
                    Socrates is a Twitter bot that continuously processes tweets and threads and responds to users whenever key phrases are used such as !SocratesBot. When Socrates is summoned, he prompts the thread with a question so that users can engage in discussion. Socrates is also built with an accompanying dashboard where admins and users can see growing conversations that have been started by Socrates. From this dashboard admins can register more questions for Socrates to use and normal users can find active conversations that they might want to jump into.
                    </p>  
                </div>
            </div>
        )
    }
}

export default Socrates;