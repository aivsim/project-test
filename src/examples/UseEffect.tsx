import React from 'react';

export interface IOnlineProps {
    initialValue?: boolean;
}

export const UseEffect1: React.FunctionComponent<IOnlineProps> = ({
    initialValue = false
}) => {
    const [isOnline, setIsOnline] = React.useState<boolean>(initialValue);

    // Effect will run on init
    React.useEffect(() => {
        // Equivalent: componentDidMount
        console.warn('Init');

        // Should return only undefined or a function
        return () => {
            // Equivalent: componentWillUnmount
            console.warn('Destroy');
        };
    }, []);

    // Effect will run on init and isOnline update
    React.useEffect(() => {
        // Equivalent: componentDidMount, componentDidUpate
        console.warn('IsOnline changed');
    }, [isOnline]);

    return (
        <>
            <p>Is online: {isOnline ? 'True' : 'False'}</p>
            <button onClick={() => setIsOnline(true)}>True</button>
            <button onClick={() => setIsOnline(false)}>False</button>
        </>
    );
};

export const UseEffect2: React.FunctionComponent = () => {
    const [count, setCount] = React.useState<number>(0);

    React.useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + 1); // ✅ This doesn't depend on `count` variable outside
        }, 1000);
        return () => clearInterval(id);
    }, []); // ✅ Our effect doesn't use any variables in the component scope

    return <h1>{count}</h1>;
};
