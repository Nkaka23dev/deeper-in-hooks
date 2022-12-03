import { Component } from "react";

class AddPosts extends Component {
    state = {
        title: '',
        description: '',
        status: 'value'
    }
    addPostHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    textChange = (title, e) => {
        this.setState({
            [title]: e.target.value,
        })
    }
    render() {
        return (
            <div>
                <h2 className="text-blue-500 font-bold text-3xl">Add Post</h2>
                <form className="space-y-8" onSubmit={this.addPostHandler}>
                    <div>
                        <label className="block">Title</label>
                        <input type='text' value={this.state.title}
                            onChange={this.textChange.bind(this, 'title')} className=" px-3 py-1 block w-1/4 border border-gray-600 focus:outline-none focus:border-red-500" />
                    </div>
                    <div>
                        <label className="block">Description</label>
                        <textarea value={this.state.description} onChange={this.textChange.bind(this, 'description')} className="px-3 py-1  block w-1/4 border border-gray-600 focus:outline-none focus:border-red-500"></textarea>
                    </div>
                    <div>
                        <label className="block">Status</label>
                        <select onChange={this.textChange.bind(this, 'title')} value={this.state.status} className="px-3 py-1  block w-1/4 border border-gray-600 focus:outline-none focus:border-red-500">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div>
                        <button className="px-3 py-2 bg-indigo-900 text-white" type="submit">
                            Add Post
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddPosts;