import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import PageHeader from '../shell/PageHeader';
import useFetch from '../utils/use-fetch';

const Clients: React.FunctionComponent<RouteComponentProps> = props => {
    const [ids] = React.useState<number[]>([1, 2, 3, 4]);
    const [data, loading] = useFetch('https://jsonplaceholder.typicode.com/photos?albumId=1');

    return (
        <>
            <PageHeader name="Klientai" />
            {loading && <div>Palaukite...</div>}
            {!loading && (
                <ul className="list-group">
                    {ids.map((x, i) => (
                        <li key={i} className="list-group-item">
                            <Link to={`${props.match.url}/${x}`}>{x}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Clients;
