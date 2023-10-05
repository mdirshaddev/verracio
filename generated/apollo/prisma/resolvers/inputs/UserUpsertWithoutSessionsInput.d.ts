import { UserCreateWithoutSessionsInput } from "../inputs/UserCreateWithoutSessionsInput";
import { UserUpdateWithoutSessionsInput } from "../inputs/UserUpdateWithoutSessionsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutSessionsInput {
    update: UserUpdateWithoutSessionsInput;
    create: UserCreateWithoutSessionsInput;
    where?: UserWhereInput | undefined;
}
