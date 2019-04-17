import * as React from 'react';

export interface IOnlineProps {
    initialValue?: boolean;
}

export const UseEffect1: React.FunctionComponent<IOnlineProps> = ({ initialValue = false }) => {
    const [isOnline, setIsOnline] = React.useState<boolean>(initialValue);
    
    React.useEffect(() => {
        console.warn('Init'); // Equivalent: componentDidMount
    
        return () => { // should return only undefined or a function
            console.warn('Destroy'); // Equivalent: componentWillUnmount
        };
    }, []);

    React.useEffect(() => {
        console.warn('IsOnline changed'); // Equivalent: componentDidMount, componentDidUpate
    }, [isOnline]);

    return <>
        <p>Is online: {isOnline ? 'True' : 'False'}</p>
        <button onClick={() => setIsOnline(true)}>True</button>
        <button onClick={() => setIsOnline(false)}>False</button>
    </>
};