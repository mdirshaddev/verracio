"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountSessionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionWhereInput_1 = require("../../inputs/SessionWhereInput");
let UserCountSessionsArgs = exports.UserCountSessionsArgs = class UserCountSessionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionWhereInput_1.SessionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionWhereInput_1.SessionWhereInput)
], UserCountSessionsArgs.prototype, "where", void 0);
exports.UserCountSessionsArgs = UserCountSessionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountSessionsArgs);
