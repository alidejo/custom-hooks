// Los "Custom Hooks" son muy importantes, porque en ellos puedo tener la lógica del componente o de los componentes,
// ya que un Custom Hoook, puede ser llamado por varios componentes, y así limpio de código JavaScript mi componente.

import { useState } from "react";


export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = ( value = 1 ) => {
        // setCounter( counter + value);
        // se cambia a la "función CallBack o de flecha", para que tome el valor actual del counter y sume uno,
        // esto para las pruebas, ya que counter es un entero, es decir, un valor primitivo, cosa que no
        // sería necesaria en un objeto, por motivos de la referencia:
        setCounter( ( current ) => current + value);
    }

    const decrement = ( value = 1 ) => {
        if ( counter === 0 ) return;
        
        // setCounter(counter - value);
        // se cambia a la "función CallBack o de flecha", para que tome el valor actual del counter y reste uno,
        // esto para las pruebas, ya que counter es un entero, es decir, un valor primitivo, cosa que no
        // sería necesaria en un objeto, por motivos de la referencia:
        setCounter(( current ) => current - value);
    }    

    const reset = () => {
        setCounter(initialValue);
    }        

    // Para poder usar las funciones de "increment", "decrement", "reset", debo tenerlas en el "return",
    // para que puedan ser llamadas desde el componente.
    return {
        counter,
        increment,
        decrement,
        reset,
    }
}




