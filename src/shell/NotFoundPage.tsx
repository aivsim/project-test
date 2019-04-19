import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PageHeader from './PageHeader';

import { Text } from 'office-ui-fabric-react/lib/Text';

const NotFoundPage: React.StatelessComponent<RouteComponentProps> = props => {
    return (
        <>
            <PageHeader name="Puslapis nerastas" />
            <Text variant={'large'} block>
                {props.location.pathname}
            </Text>
        </>
    );
};

export default NotFoundPage;
