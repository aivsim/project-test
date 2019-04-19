import React from 'react';

import { Text } from 'office-ui-fabric-react/lib/Text';
import { Breadcrumb, IBreadcrumbItem } from 'office-ui-fabric-react/lib/Breadcrumb';

interface IProps {
    items: IBreadcrumbItem[];
}

const PageBreadcrumb: React.StatelessComponent<IProps> = props => {
    return (
        <>
            <Text variant={'xxLarge'}>Pagrindinis</Text>
            <Breadcrumb items={props.items} ariaLabel={'Breadcrumb with no maxDisplayedItems'} />
        </>
    );
};

export default PageBreadcrumb;
