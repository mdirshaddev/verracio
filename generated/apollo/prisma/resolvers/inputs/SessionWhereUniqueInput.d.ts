import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { SessionWhereInput } from "../inputs/SessionWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class SessionWhereUniqueInput {
    id?: string | undefined;
    sessionToken?: string | undefined;
    AND?: SessionWhereInput[] | undefined;
    OR?: SessionWhereInput[] | undefined;
    NOT?: SessionWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    expires?: DateTimeFilter | undefined;
    user?: UserRelationFilter | undefined;
}
