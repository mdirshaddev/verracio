"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VerificationTokenMaxAggregate = exports.VerificationTokenMaxAggregate = class VerificationTokenMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VerificationTokenMaxAggregate.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VerificationTokenMaxAggregate.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VerificationTokenMaxAggregate.prototype, "expires", void 0);
exports.VerificationTokenMaxAggregate = VerificationTokenMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VerificationTokenMaxAggregate", {})
], VerificationTokenMaxAggregate);
