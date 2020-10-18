import React, {Component} from 'react';

class SocratesList extends React.Component{

    render() {
        return (
            <div>
                {this.props.questionList.map((tweet) => (
                    <h5>{tweet}</h5>
                ))}
            </div>
        );
    }
}

export default SocratesList;