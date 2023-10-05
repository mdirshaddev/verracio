import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class AccountOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    provider?: "asc" | "desc" | undefined;
    providerAccountId?: "asc" | "desc" | undefined;
    refresh_token?: SortOrderInput | undefined;
    access_token?: SortOrderInput | undefined;
    expires_at?: SortOrderInput | undefined;
    token_type?: SortOrderInput | undefined;
    scope?: SortOrderInput | undefined;
    id_token?: SortOrderInput | undefined;
    session_state?: SortOrderInput | undefined;
    user?: UserOrderByWithRelationInput | undefined;
}
