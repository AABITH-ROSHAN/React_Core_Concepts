import React from 'react'

class LifecycleComponents extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    static getDerivedStateFromProps(){//(props,state)
        console.log("Runs before Render");
        
            return null;
        
    }
     

    HandleIncrement=()=>{
        this.setState({count:this.state.count+1})
    };

    componentDidMount(){
        console.log("Component Mounted Initially")
        console.log("Name",this.Name)
    };

    shouldComponentUpdate(){
        return true
    };

    componentDidUpdate(prevprops,prevstate){
        if(prevstate.count!==this.state.count){
            console.log("Count Component Updated")
        } 
    };

    componentWillUnmount(){
        console.log("Component unmounted");
    };

    getSnapshotBeforeUpdate(prevProps,prevState){
        if(prevProps.name !==this.props.name || prevState.count !==this.props.count){
            console.log("PrevName:",prevProps);
            console.log("PrevName:",prevState)
        }
        return null;
    };

    componentDidCatch(error,info){
        console.log("Error:",error);
        console.log("Info",info);
    };
    
    render(){
        return(
            <>
                <p>Hello {this.props.name}</p>
                <p>Count:{this.state.count}</p>
                <button onClick={this.HandleIncrement}>Increment</button>
            </>
        )
    }
}

export default LifecycleComponents
