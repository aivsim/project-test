import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IRouteProps {
    id: string;
}

const Client: React.FunctionComponent<RouteComponentProps<IRouteProps>> = props => {
    const id = props.match.params.id;
    
    return (
        <div>
            <div>Kliento id: {id}</div>
        </div>
    );
};

export default Client;
