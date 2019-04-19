import React from 'react';

import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { mergeStyleSets, DefaultPalette } from 'office-ui-fabric-react/lib/Styling';

const Footer: React.StatelessComponent = () => {
    const styles = mergeStyleSets({
        root: {
            background: DefaultPalette.black
        },
        item: {
            color: DefaultPalette.white,
            padding: 5
        }
    });

    return (
        <Stack padding={10} className={styles.root}>
            <Stack.Item align="center" className={styles.item}>
                <div className="ms-font-mi">Footer</div>
            </Stack.Item>
        </Stack>
    );
};

export default Footer;
