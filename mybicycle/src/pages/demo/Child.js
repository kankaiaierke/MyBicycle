import React from 'react';

export default class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
        }
    }
    componentWillMount(){
        console.log('WillMount');
    }
    componentDidMount(){
        console.log('DidMount');
    }
    componentWillReceiveProps(newProps){
        console.log(newProps);
    }
    shouldComponentUpdate(){
        console.log('should update')
        return true;
    }
    componentWillUpdate(){
        console.log('WillUpdate');
    }
    componentDidUpdate(){
        console.log('DidUpdate');
    }
    render(){
        return <div>
            <p>以下是子组件</p>
            <p>{this.props.name}</p>
        </div>
    }
}