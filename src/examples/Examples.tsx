import React from 'react';
import { UseState1, UseState2, UseState3, IUser } from './UseState';
import { UseEffect1 } from './UseEffect';
import { UseReducer1 } from './UseReducer';

const Examples: React.FunctionComponent = () => {
    const user: IUser = {
        username: 'varpav',
        email: 'varpav@mailinator.com',
        password: 'varpav'
    };

    return (
        <>
            <UseState1 initialCount={5} />
            <hr />
            <UseState2 initialUser={user} />
            <UseState2 initialUser={null} />
            <hr />
            <UseState3 />
            <hr />
            <UseEffect1 />
            <hr />
            <UseReducer1 />
        </>
    );
};

export default Examples;
