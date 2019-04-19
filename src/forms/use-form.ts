import React from 'react';

const useForm = (callback: any) => {
    const [values, setValues] = React.useState({});

    const handleSubmit = (event: any) => {
        if (event) {
            event.preventDefault();
        }

        callback();
    };

    const handleChange = (event: any) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
        console.warn(values);
    };

    return {
        handleChange,
        handleSubmit,
        values
    };
};

export default useForm;
