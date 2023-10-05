import { UserCreateWithoutAccountsInput } from "../inputs/UserCreateWithoutAccountsInput";
import { UserUpdateWithoutAccountsInput } from "../inputs/UserUpdateWithoutAccountsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutAccountsInput {
    update: UserUpdateWithoutAccountsInput;
    create: UserCreateWithoutAccountsInput;
    where?: UserWhereInput | undefined;
}
