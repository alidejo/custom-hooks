
export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case 'Add Todo':
            return [...initialState, action.payload];
            // throw new Error('Action.type = ABC no esta implementado');
    
        case 'Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload);

        case 'Toggle Todo':
            // .map, es una función que es parecida al foreach, recorre cada objeto.
            return initialState.map( todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo, // una vez esparcido, puedo usar sus propiedades.
                        done: !todo.done // cambiamos el valor del done (es decir, del booleano).
                    }
                }

                return todo;
            });
        default:
            return initialState;
    }
}

