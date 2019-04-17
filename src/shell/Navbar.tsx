import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component<INavbarProps, INavbarState> {
    constructor(props: INavbarProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/">VKVS</Link>
                {' '}
                <Link to="/clients">Klientai</Link>
            </div>
        )
    }
}

interface INavbarProps {

}

interface INavbarState {
}