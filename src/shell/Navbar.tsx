import React from 'react';
import adalContext from '../api/adalConfig';

import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { mergeStyleSets, DefaultPalette } from 'office-ui-fabric-react/lib/Styling';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

const Navbar: React.StatelessComponent = () => {
    const handleLogOut = (e: React.MouseEvent<{}>) => {
        e.preventDefault();
        adalContext.LogOut();
    };

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
                <DefaultButton data-automation-id="test" allowDisabledFocus={true} text="Logout" onClick={e => handleLogOut(e)} />
            </Stack.Item>
            <Stack.Item className={styles.item} align="center">
                <LogedInUser />
            </Stack.Item>
        </Stack>
    );
};

const LogedInUser: React.StatelessComponent = () => {
    const styles = mergeStyleSets({
        primaryText: { color: DefaultPalette.white } 
    });

    return <Persona size={PersonaSize.size28} text={adalContext.AuthContext.getCachedUser().profile.name} styles={styles} />;
};

export default Navbar;
