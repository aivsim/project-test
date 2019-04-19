import { AdalConfig, AuthenticationContext, adalGetToken } from 'react-adal';

export const endpoint = '94d41840-68ff-49bc-bc71-0a4cac0ee412';

export const adalConfig: AdalConfig = {
    clientId: '94d41840-68ff-49bc-bc71-0a4cac0ee412',
    tenant: 'b8620182-765a-4c40-9a34-c935aa0d9686',
    endpoints: {
        api: endpoint
    },
    redirectUri: window.location.origin,
    cacheLocation: 'localStorage'
};

export enum Role {
    Administrator = 'Administrator',
}

class AdalContext {
    private authContext: AuthenticationContext;

    constructor() {
        this.authContext = new AuthenticationContext(adalConfig);
    }

    get AuthContext() {
        return this.authContext;
    }

    public GetToken(): Promise<string | null> {
        return adalGetToken(this.authContext, endpoint);
    }

    public LogOut() {
        this.authContext.logOut();        
    }

    public HasAccessTo(roles: Role[]): boolean {
        var userRoles: string[] = this.authContext.getCachedUser().profile.roles;
        console.warn(roles, this.authContext.getCachedUser());
        return roles.some((x) => userRoles.find(r => r === x) ? true : false);
    }
}

const adalContext: AdalContext = new AdalContext();
export default adalContext;
