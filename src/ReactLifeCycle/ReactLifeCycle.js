import React, { Component } from 'react'
import ChildComponentLiftCycer from './ChildComponentLiftCycer';

export default class ReactLifeCycle extends Component {
    //lifecycle là các hàm có sẵn của react

    constructor(props){
        super(props);
        this.state={
            number: 1
        }
        console.log('Constructor')
    }
    static  getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps");
        return null;
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }
    render() {

        return (
            <div className="text-center mt-5">
                {this.state.number}
                <button onClick={()=>{
                    this.setState({
                        number: this.state.number +1
                    })
                }}>+</button>
               {this.state.number < 2 ? <ChildComponentLiftCycer/> : ''}
            </div>
        )
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
}
