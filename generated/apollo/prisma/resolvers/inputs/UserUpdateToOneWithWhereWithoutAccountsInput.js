"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutAccountsInput_1 = require("../inputs/UserUpdateWithoutAccountsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutAccountsInput = exports.UserUpdateToOneWithWhereWithoutAccountsInput = class UserUpdateToOneWithWhereWithoutAccountsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutAccountsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutAccountsInput_1.UserUpdateWithoutAccountsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutAccountsInput_1.UserUpdateWithoutAccountsInput)
], UserUpdateToOneWithWhereWithoutAccountsInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutAccountsInput = UserUpdateToOneWithWhereWithoutAccountsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutAccountsInput", {})
], UserUpdateToOneWithWhereWithoutAccountsInput);
