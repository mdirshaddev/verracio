"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const SessionWhereInput_1 = require("../inputs/SessionWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let SessionWhereUniqueInput = exports.SessionWhereUniqueInput = class SessionWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SessionWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SessionWhereUniqueInput.prototype, "sessionToken", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SessionWhereInput_1.SessionWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SessionWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SessionWhereInput_1.SessionWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SessionWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SessionWhereInput_1.SessionWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SessionWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SessionWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SessionWhereUniqueInput.prototype, "expires", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], SessionWhereUniqueInput.prototype, "user", void 0);
exports.SessionWhereUniqueInput = SessionWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionWhereUniqueInput", {})
], SessionWhereUniqueInput);
