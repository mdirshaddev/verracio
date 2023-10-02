import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VerificationTokenIdentifierTokenCompoundUniqueInput } from "../inputs/VerificationTokenIdentifierTokenCompoundUniqueInput";
import { VerificationTokenWhereInput } from "../inputs/VerificationTokenWhereInput";
export declare class VerificationTokenWhereUniqueInput {
    token?: string | undefined;
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput | undefined;
    AND?: VerificationTokenWhereInput[] | undefined;
    OR?: VerificationTokenWhereInput[] | undefined;
    NOT?: VerificationTokenWhereInput[] | undefined;
    identifier?: StringFilter | undefined;
    expires?: DateTimeFilter | undefined;
}
