import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IClientProps extends RouteComponentProps<{ id: string }> {
}

interface IClientState {
    id: string;
}

export default class Client extends React.Component<IClientProps, IClientState> {
    constructor(props: IClientProps) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        };
    }

    render() {
        return (
            <div>
                <div>Kliento id: {this.state.id}</div>
            </div>
        );
    }
}
