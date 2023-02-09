import React from 'react';
import axios from 'axios';


class ClassBasedJokeList extends React.Component {
    constructor (props) {
        super(props);
        this.state = []
        this.getJokes = this.getJokes.bind(this);
        this.setJokes = this.setJokes.bind(this);
        this.generateNewJokes = this.generateNewJokes.bind(this);
        this.vote = this.vote.bind(this);
        this.numJokesToGet = 10
    }

    generateNewJokes() {
        this.setJokes([])
    }

    componentDisMount() {
        let seenJokes = new Set();
        let j = []
        async function getJokes () {
            while (state < this.numJokesToGet) {
                let res = await axios.get("https://icanhazdadjoke.com", {
                headers: { Accept: "application/json" }
                });
                let { status, ...jokeObj } = res.data;
                
                if (!seenJokes.has(jokeObj.id)) {
                    seenJokes.add(jokeObj.id);
                    j.push({ ...jokeObj, votes: 0 });
                  } else {
                    console.error("duplicate found!");
                }
            }
            this.setState(j)
        }
        if (this.state.length ===0) {
            getJokes();
        }
    }
    
    vote (id, delta) {
        this.setJokes(allJokes =>
            allJokes.map(j => (j.id === id ? { ...j, votes: j.votes + delta } : j)))
    }

    

    render () {
        return (
            <div className='JokeList'>
                <button onClick={this.generateNewJokes}>Get New Jokes</button>
                {this.state.map(j => (
                    <Joke text={j.joke} key={j.id} id={j.id} votes={j.votes} vote={vote} />))}
            </div>
        )
    }
}

export default ClassBasedJokeList