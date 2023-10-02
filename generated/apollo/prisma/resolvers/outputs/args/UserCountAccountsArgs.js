"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountAccountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountWhereInput_1 = require("../../inputs/AccountWhereInput");
let UserCountAccountsArgs = exports.UserCountAccountsArgs = class UserCountAccountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountWhereInput_1.AccountWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountWhereInput_1.AccountWhereInput)
], UserCountAccountsArgs.prototype, "where", void 0);
exports.UserCountAccountsArgs = UserCountAccountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountAccountsArgs);
