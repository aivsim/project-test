import React from 'react';
import useForm from './use-form';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

const CustomForm: React.FunctionComponent = () => {
    const { values, handleChange, handleSubmit } = useForm(() => {
        console.warn('test', values);
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm3">
                        <TextField label="Email Address" name="email" type="email" onChange={e => handleChange(e)} />
                    </div>
                </div>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm3">
                        <TextField label="Password" name="password" type="password" onChange={e => handleChange(e)} />
                    </div>
                </div>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm3">
                        <PrimaryButton text="Submit" type="submit" />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CustomForm;
