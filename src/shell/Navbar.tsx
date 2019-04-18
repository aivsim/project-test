import React from 'react';
import { Link } from 'react-router-dom';
import useRouter from '../utils/use-router';

const Navbar: React.FunctionComponent = () => {
    const { history, location, match } = useRouter();
    console.warn(history, location, match);
    return (
        <>
            <Link to="/">VKVS </Link>
            <Link to="/klientai">Klientai </Link>
            <Link to="/pavyzdziai">Pavyzdžiai </Link>
        </>
    );
};

export default Navbar;
