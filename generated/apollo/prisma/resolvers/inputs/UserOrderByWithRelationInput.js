"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountOrderByRelationAggregateInput_1 = require("../inputs/AccountOrderByRelationAggregateInput");
const SessionOrderByRelationAggregateInput_1 = require("../inputs/SessionOrderByRelationAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserOrderByWithRelationInput = exports.UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountOrderByRelationAggregateInput_1.AccountOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountOrderByRelationAggregateInput_1.AccountOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionOrderByRelationAggregateInput_1.SessionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionOrderByRelationAggregateInput_1.SessionOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "sessions", void 0);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserOrderByWithRelationInput", {})
], UserOrderByWithRelationInput);
