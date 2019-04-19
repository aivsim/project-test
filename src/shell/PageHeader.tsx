import React from 'react';

import { Text } from 'office-ui-fabric-react/lib/Text';

interface IProps {
    name: string;
}

const PageHeader: React.StatelessComponent<IProps> = props => {
    return (
        <Text variant={'xLarge'}>{props.name}</Text>
    );
};

export default PageHeader;
