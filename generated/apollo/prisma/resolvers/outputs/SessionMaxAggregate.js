"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SessionMaxAggregate = exports.SessionMaxAggregate = class SessionMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SessionMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SessionMaxAggregate.prototype, "sessionToken", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SessionMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SessionMaxAggregate.prototype, "expires", void 0);
exports.SessionMaxAggregate = SessionMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SessionMaxAggregate", {})
], SessionMaxAggregate);
