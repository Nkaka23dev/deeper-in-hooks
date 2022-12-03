import { Component } from "react";

class SinglePost extends Component{
    render(){
        return (
           <div className=" m-4 p-3 border border-gray-500 shadow-xl">
            <h3 className="text-xl font-bold text-blue-600">
            {this.props.title}</h3>
            <h2>{this.props.desc}</h2>
            <div className="my-2">
               <input type="text" onChange={this.changeTitle} value={this.props.title} className="px-5 py-1 rounded-xl border border-gray-500" ></input>
            </div>
           </div>
        )
    }
} 

export default SinglePost; 