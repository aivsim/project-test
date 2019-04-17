import React from 'react';
import Navbar from './Navbar';

export default class Layout extends React.Component<ILayoutProps, ILayoutState> {
    constructor(props: ILayoutProps) {
        super(props);
    }

    render() {
        const { children } = this.props;
        return (
            <div>
                <Navbar />
                {children}
            </div>
        )
    }
}

interface ILayoutProps {

}

interface ILayoutState {
}