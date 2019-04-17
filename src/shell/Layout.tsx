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
                <div className="ms-Grid" dir="ltr">
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                            Sidebar
                        </div>
                        <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

interface ILayoutProps {

}

interface ILayoutState {
}