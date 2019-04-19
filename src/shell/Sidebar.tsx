import React from 'react';
import useRouter from '../utils/use-router';

import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Nav, INavLink } from 'office-ui-fabric-react/lib/Nav';

const Sidebar: React.StatelessComponent = props => {
    const { history, location } = useRouter();

    const handleClick = (event: React.MouseEvent<Element, MouseEvent> | undefined, element: INavLink | undefined) => {
        if (event !== undefined && element !== undefined) {
            event.preventDefault();
            history.push(element.url);
        }
    };

    const styles = mergeStyleSets({
        navItems: { margin: 0 }
    });

    return (
        <Nav
            selectedKey={location.pathname}
            styles={styles}
            onLinkClick={(e, el) => handleClick(e, el)}
            groups={[
                {
                    links: [
                        {
                            name: 'Pagrindinis',
                            url: '/',
                            icon: 'Home',
                            key: '/'
                        },
                        {
                            name: 'Naudotojai',
                            url: '/naudotojai',
                            icon: 'Admin',
                            key: '/naudotojai'
                        },
                        {
                            name: 'Klientai',
                            url: '/klientai',
                            icon: 'People',
                            key: '/klientai'
                        }
                    ]
                }
            ]}
        />
    );
};

export default Sidebar;
