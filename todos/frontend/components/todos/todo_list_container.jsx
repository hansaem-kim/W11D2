import { connect } from 'react-redux';
import  TodoList  from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, removeTodo } from '../../actions/todo_actions';

const mapStateToProps = (state) => {
    debugger;
   return {
        todos: allTodos(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        receiveTodo: (todo) => {
            return dispatch(receiveTodo(todo));
        },
        removeTodo: (todo) => {
            return dispatch(removeTodo(todo));
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);