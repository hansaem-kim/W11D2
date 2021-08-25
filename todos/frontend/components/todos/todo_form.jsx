import React from "react";

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {title: "", body: "", done: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
    }

    updateTitle(e) {
        this.setState({ title: e.target.value });
    }
    
    updateBody(e) {
        this.setState({ body: e.target.value });
    }
    

    handleSubmit(e) {
        function uniqueId() {
            return new Date().getTime();
        }

        e.preventDefault();

        const todo = { ...this.state, id: uniqueId()}
        this.props.receiveTodo(todo); 
        // props are from teaFormContainer,in this case: mDTS, it will invoke callback that calls action creator
        this.setState({
          title: "",
          body: "",
        });
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <h1>Add Todo</h1>
            <label>
              Title
              <input
                type="text"
                onChange={this.updateTitle}
                value={this.state.title}
              />
            </label>
            <label>
              Body
              <input
                type="text"
                onChange={this.updateBody}
                value={this.state.body}
              />
            </label>
            <button>Add Todo</button>
          </form>
        );
      }
}

export default TodoForm;