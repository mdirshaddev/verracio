"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AccountAvgAggregate = exports.AccountAvgAggregate = class AccountAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AccountAvgAggregate.prototype, "expires_at", void 0);
exports.AccountAvgAggregate = AccountAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AccountAvgAggregate", {})
], AccountAvgAggregate);
