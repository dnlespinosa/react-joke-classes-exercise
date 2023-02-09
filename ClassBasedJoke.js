import React from 'react'

class ClassBasedJoke extends React.Component {
    constructor (props) {
        super(props);
        vote = this.props.vote
        votes = this.props.votes
        text = this.props.text
        id = this.props.id
        this.upVote = this.upVote.bind(this)
        this.downVote = this.downVote.bind(this)
    }

    upVote() {
        vote(id, +1)
    }

    downVote() {
        vote(id,-1)
    }

    render() {
        return (
            <div className='Joke'>
                <button onClick={this.upVote}>
                <i className="fas fa-thumbs-up" />
                </button>
            <button onClick={this.downVote}>
                <i className="fas fa-thumbs-down" />
            </button>
            {this.props.votes}
            <div className="Joke-text">{text}</div>
        </div>
        
        )
    }
}

export default ClassBasedJoke