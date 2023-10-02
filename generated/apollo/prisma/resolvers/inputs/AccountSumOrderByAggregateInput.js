"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AccountSumOrderByAggregateInput = exports.AccountSumOrderByAggregateInput = class AccountSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountSumOrderByAggregateInput.prototype, "expires_at", void 0);
exports.AccountSumOrderByAggregateInput = AccountSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountSumOrderByAggregateInput", {})
], AccountSumOrderByAggregateInput);
