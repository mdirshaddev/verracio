"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCountAggregate_1 = require("../outputs/UserCountAggregate");
const UserMaxAggregate_1 = require("../outputs/UserMaxAggregate");
const UserMinAggregate_1 = require("../outputs/UserMinAggregate");
let UserGroupBy = exports.UserGroupBy = class UserGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserGroupBy.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCountAggregate_1.UserCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCountAggregate_1.UserCountAggregate)
], UserGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserMinAggregate_1.UserMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserMinAggregate_1.UserMinAggregate)
], UserGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserMaxAggregate_1.UserMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserMaxAggregate_1.UserMaxAggregate)
], UserGroupBy.prototype, "_max", void 0);
exports.UserGroupBy = UserGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserGroupBy", {})
], UserGroupBy);
