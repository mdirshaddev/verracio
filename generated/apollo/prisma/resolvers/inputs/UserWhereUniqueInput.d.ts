import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserWhereUniqueInput {
    id?: string | undefined;
    email?: string | undefined;
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    name?: StringNullableFilter | undefined;
    emailVerified?: DateTimeNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    accounts?: AccountListRelationFilter | undefined;
    sessions?: SessionListRelationFilter | undefined;
}
