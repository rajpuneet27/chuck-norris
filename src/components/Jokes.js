import React, { Component } from 'react'


export class Jokes extends Component {

    constructor(props){
        super(props);
        this.state = {
            joke : null,
        }
    }
    
    async componentDidMount(){
        const url = `https://api.chucknorris.io/jokes/random?category=${this.props.jokeCategory}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            joke : data.value,
        })   
    }
    
    async componentDidUpdate(prevProps){
        if(this.props.jokeCategory !== prevProps.jokeCategory)
        {
            console.log(`The joke Category is ${this.props.jokeCategory} and the old joke categoryis ${prevProps.jokeCategory}`)
            const url = `https://api.chucknorris.io/jokes/random?category=${this.props.jokeCategory}`;
            const response = await fetch(url);
            const data = await response.json();
            this.setState({
                joke : data.value
            })   
        }
    }

    clickHandler = () => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${this.props.jokeCategory}`)
              .then(response => response.json())
              .then(data => {
        
                this.setState({
                  joke: data.value
                })
                console.log(data);
              });
    };

    render() {
        var {joke} = this.state
        return (
            <div>
                <div className="joke-container">
                    <div className="joke">
                        {joke}                
                    </div>
                </div>
                <div onClick={()=>{this.clickHandler()}} className="new-joke">New Jokes</div>
            </div>
        )
    }
}

export default Jokes
