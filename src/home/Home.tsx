import React from 'react';

export default class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);
    }

    render() {
        return  (
            <div>Pagrindinis puslapis</div>
        );
    }
}

interface IHomeProps {
}

interface IHomeState {
}