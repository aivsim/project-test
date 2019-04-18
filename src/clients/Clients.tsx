import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

const Clients: React.FunctionComponent<RouteComponentProps> = props => {
    const [ids] = React.useState<number[]>([1, 2, 3, 4]);

    return (
        <ul className="list-group">
            {ids.map((x, i) => (
                <li key={i} className="list-group-item">
                    <Link to={`${props.match.url}/${x}`}>{x}</Link>
                </li>
            ))}
        </ul>
    );
};

export default Clients;
