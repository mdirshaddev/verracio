import { UserCountAccountsArgs } from "./args/UserCountAccountsArgs";
import { UserCountSessionsArgs } from "./args/UserCountSessionsArgs";
export declare class UserCount {
    accounts: number;
    sessions: number;
    getAccounts(root: UserCount, args: UserCountAccountsArgs): number;
    getSessions(root: UserCount, args: UserCountSessionsArgs): number;
}
