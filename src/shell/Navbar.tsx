import React from 'react';

import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { IPersonaSharedProps, Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { mergeStyleSets, DefaultPalette } from 'office-ui-fabric-react/lib/Styling';
import { Text } from 'office-ui-fabric-react/lib/Text';

const Navbar: React.StatelessComponent = () => {
    const styles = mergeStyleSets({
        root: {
            background: DefaultPalette.black
        },
        item: {
            background: DefaultPalette.black,
            color: DefaultPalette.white,
            padding: 5
        }
    });

    const stackTokens: IStackTokens = { childrenGap: 5 };

    return (
        <Stack horizontal tokens={stackTokens} className={styles.root}>
            <Stack.Item grow className={styles.item} align="center">
                <Text variant={'xxLarge'}>VKVS</Text>
            </Stack.Item>
            <Stack.Item className={styles.item} align="center">
                <LogedInUser />
            </Stack.Item>
        </Stack>
    );
};

const LogedInUser: React.StatelessComponent = () => {
    const examplePersona: IPersonaSharedProps = {
        secondaryText: 'Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm'
    };

    const styles = mergeStyleSets({
        primaryText: { color: DefaultPalette.white }
    });

    return <Persona {...examplePersona} size={PersonaSize.size28} text="Foo Bar" styles={styles} />;
};

export default Navbar;
