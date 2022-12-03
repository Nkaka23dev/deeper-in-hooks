import { Component } from "react";

class HelloWorld extends Component{
    render () {
        return (
            <div>
                <h1 className="text-green-700 ml-4 text-4xl font-semibold">{this.props.text}</h1>
            </div>
        )
    }
}

export default HelloWorld;