import { useState } from 'react';

export const useFrom = ( initialForm = {}) => {
    // Con "useState", utilizamos los corchetes para la variable y su set.
    // Al asignarle valor a las cajas de texto, a partir del "useState", no podemos cambiar el contenido de
    // las mismas, ya que este hook useStaste, es de una vía.
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        // Desestructuro con los "...", el formState
        // y con [ name ] : value, esta dejando de ser el "useState" de una vía, a hora si mieramos el componente 
        // desde el browser, vemos que el formState, cambia de valor, ya que estamos usando el setFormState.
        setFormState({
            ...formState,  // una vez esparcido, puedo usar sus propiedades.
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    // Lo que pongamos en el "return", lo va a poder ver y utilizar el munto exterior, es decir,
    // el componnente que llama a este CustomHook "useForm".
    return {
        ...formState, // Lo regresamos desestructurado.
        //formState,  // Comentamos esta linea, ya que lo estamos enviando desde acá desestructurado.
        onInputChange,
        onResetForm
    }

}


