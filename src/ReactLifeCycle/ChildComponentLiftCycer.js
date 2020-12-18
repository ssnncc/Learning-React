import React, { Component } from 'react'

export default class ChildComponentLiftCycer extends Component {
    // timeout = setInterval({
       
    // })
    constructor(props){
        super(props);
        this.state={

        }
        console.log('child contructor')
    }
    static getDerivedStateFromProps(){
        console.log(" child getDerivedStateFromProps")
    }
    render() {
        console.log('child render')
        return (
            <div>
                child component
            </div>
        )
    }
    componentDidMount(){
        console.log("child componentDidMount")
    }
    componentDidUpdate(){
        console.log("child componentDidUpdate")
    }
    componentWillUnmount(){
       // clearInterval(this.timeout);
        console.log('child componentWillUnmount')
    }
}
