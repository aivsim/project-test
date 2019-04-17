import * as React from 'react';
import { UseState1, UseState2, UseState3, IUser } from './UseState';
import { UseEffect1 } from './UseEffect';

export default class Examples extends React.Component<{}, {}> {
    public render() {
        return <>
            <UseState1 initialCount={5} />
            <hr/>
            <UseState2 initialUser={{ username: 'varpav', email: 'varpav@mailinator.com', password: 'varpav' } as IUser} />
            <UseState2 initialUser={null} />
            <hr/>
            <UseState3 />
            <hr/>
            <UseEffect1 />
            <hr/>
        </>
    }
}
