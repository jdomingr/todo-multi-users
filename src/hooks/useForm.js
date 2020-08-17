import { useState } from 'react';

export const useForm = ( initiaState = {}) => {

    const [ data, setData] = useState( initiaState );

    const handleInputChange = ( { target } ) => {
        setData({
            ...data,
             [target.name]: target.value
            });
    }
    return [ data, handleInputChange];

}