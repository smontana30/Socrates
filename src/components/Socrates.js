import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Socrates.css';

class Socrates extends React.Component {
    constructor() {
        super()
        this.state = {
            index: 0,
        }
    }

    handleSelect = (selected) => {
        this.setState({index: selected});
    }

    render() {
        return (
            <div>
                <h1>Who am I</h1>
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
                </Carousel>
                <h5>
                    Hi, I'm Socrates a Heathly Conversation starter bot.
                    Who loves asking users questions to promote Heathly Conversations.
                    Based off the Greek Philosopher <a href="https://en.wikipedia.org/wiki/Socrates" target="_blank">Socrates</a>.
                    I like probing my users with some critical thinking question about life and true happiness.
                </h5>
                
            </div>
        )
    }
}

export default Socrates;