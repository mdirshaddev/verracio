import { UserCreateOrConnectWithoutAccountsInput } from "../inputs/UserCreateOrConnectWithoutAccountsInput";
import { UserCreateWithoutAccountsInput } from "../inputs/UserCreateWithoutAccountsInput";
import { UserUpdateToOneWithWhereWithoutAccountsInput } from "../inputs/UserUpdateToOneWithWhereWithoutAccountsInput";
import { UserUpsertWithoutAccountsInput } from "../inputs/UserUpsertWithoutAccountsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutAccountsNestedInput {
    create?: UserCreateWithoutAccountsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput | undefined;
    upsert?: UserUpsertWithoutAccountsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutAccountsInput | undefined;
}
