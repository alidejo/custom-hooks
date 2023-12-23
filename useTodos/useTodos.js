import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

// const initialState = [{
//   id: Math.random(),
//   description: 'Recolectar la piedra del alma',
//   done: false
// },
// {
//   id: Math.random(),
//   description: 'Recolectar la piedra del tiempo',
//   done: false
// }
// ]

const initialState = [];

// Está función se encarga de cargar los todos:
const init = () => {
    // JSON.parse, hace lo contrario de JSON.stringify.
    // y " || []", le está diciendo, si todos esta vació, entonces, envie un array vacio:
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        // stringify, convierte los objetos del arreglo a JSON o convierte a JSON:
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }

        dispatch(action);

        // console.log(todos);
    }

    const handleRemoveTodo = (id) => {
        // console.log(id);
        dispatch({
            type: 'Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        // console.log('el id que deseamos ejecutar : ' + id);
        dispatch({
            type: 'Toggle Todo',
            payload: id
        })
    }

    return {
        todos,
        todosCount: todos.length, 
        pendingTodosCount: todos.filter( todo => !todo.done ).length,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo
    }
}