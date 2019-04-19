import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { mergeStyleSets, DefaultPalette } from 'office-ui-fabric-react/lib/Styling';
import Footer from './Footer';
import Content from './Content';

const Layout: React.StatelessComponent = props => {
    const styles = mergeStyleSets({
        root: {
            marginTop: 0,
            background: DefaultPalette.yellow
        },

        item: {
            background: DefaultPalette.purpleLight
        }
    });

    const stackTokens: IStackTokens = { childrenGap: 5 };

    return (
        <>
            <Navbar />
            <Stack tokens={stackTokens}>
                <Stack horizontal tokens={stackTokens} className={styles.root}>
                    <Stack.Item className={styles.item} styles={{ root: { width: 250 } }}>
                        <Sidebar />
                    </Stack.Item>
                    <Stack.Item grow className={styles.item}>
                        <Content>{props.children}</Content>
                    </Stack.Item>
                </Stack>
            </Stack>
            <Footer />
        </>
    );
};

export default Layout;
