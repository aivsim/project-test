import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface INotFoundPageProps extends RouteComponentProps {
}

interface INotFoundPageState {
}

export default class NotFoundPage extends React.Component<INotFoundPageProps, INotFoundPageState> {
    render() {
        const { location } = this.props;
        return (
            <div>Puslapis nerastas: {location.pathname}</div>
        );
    }
}
