import React, { Component } from "react";
import { connect } from "react-redux";
import {
	addTodo,
	deleteItem,
	compledTask,
	searchItem,
} from "./redux/action/action";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: "",
		};
	}

	handle = (e) => {
		this.setState({ todo: e.target.value });
	};

	click = (e) => {
		if (e.key == "Enter" && e.target.value != "") {
			this.props.addTodo(this.state.todo);
			this.setState({ todo: (e.target.value = "") });
		}
	};
	deleteData = (id) => {
		this.props.deleteItem(id);
	};
	complete = (id) => {
		this.props.compledTask(id);
	};
	search = (value) => {
		this.props.searchItem(value);
	};

	render() {
		return (
			<>
				<div className=" w-1/1 h-screen bg-sky-100 flex items-center">
					<div className=" w-2/6 h-5/6 min-h-0 bg-red-400 rounded-lg text-center relative">
						<h1 className="text-center text-5xl text-neutral-50">to-do</h1>
						<input
							type="text"
							placeholder="Search Task"
							onChange={(e) => this.search(e.target.value)}
							className="bg-gray-100  h-10 rounded-lg pl-3 mt-4 mb-2 "
						></input>
						<div>
							<input
								type="text"
								placeholder="Add to-do"
								value={this.state.value}
								onChange={(e) => this.handle(e)}
								onKeyDown={(e) => this.click(e)}
								className="bg-gray-100  h-10 rounded-lg pl-3 "
							></input>
						</div>

						<div>
							{this.props.todoDataget.list.map((ele, i) => {
								return (
									<div
										className={
											ele.search == "Find"
												? " flex h-12 w-1/1 relative border-b-2 items-center"
												: " hidden"
										}
									>
										<input
											type="checkbox"
											onClick={() => this.complete(ele.id)}
											className="ml-2"
										></input>
										<p
											className={
												ele.state == "completed"
													? "inline line-through text-ellipsis w-4/5 text-start ml-2"
													: "text-ellipsis w-4/5 text-start ml-2"
											}
										>
											{ele.task}
										</p>
										<button onClick={() => this.deleteData(ele.id)}>
											<img
												className="w-4"
												onClick={() => this.deleteData(ele.id)}
												src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDLz48AObEIH17q058QDpZBs5Kj8YbEiksg&usqp=CAU"
												rel="delete"
											/>
										</button>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</>
		);
	}
}
function mapStateToProps(state) {
	return { todoDataget: state.todo };
}
export default connect(mapStateToProps, {
	addTodo,
	deleteItem,
	compledTask,
	searchItem,
})(App);
