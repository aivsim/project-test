import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const NotFoundPage: React.StatelessComponent<RouteComponentProps> = props => {
    return <div>Puslapis nerastas: {props.location.pathname}</div>;
};

export default NotFoundPage;
