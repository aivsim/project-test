import React from 'react';
import { Link, RouteComponentProps, Route } from 'react-router-dom';

interface IClientsProps extends RouteComponentProps {
}

interface IClientsState {
    ids: Array<number>;
}

export default class Clients extends React.Component<IClientsProps, IClientsState> {
    constructor(props: IClientsProps) {
        super(props);
        this.state = {
            ids: [1, 2, 3, 4]
        }
    }

    render() {
        const { match } = this.props;
        return (
            <>
                <ul className="list-group">
                    {this.state.ids.map((x, i) => 
                        <li key={i} className="list-group-item">
                            <Link to={`${match.url}/${x}`}>{x}</Link>
                        </li>
                    )}
                </ul>
            </>
        );
    }
}

