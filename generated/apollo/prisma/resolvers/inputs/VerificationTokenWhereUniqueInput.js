"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const VerificationTokenIdentifierTokenCompoundUniqueInput_1 = require("../inputs/VerificationTokenIdentifierTokenCompoundUniqueInput");
const VerificationTokenWhereInput_1 = require("../inputs/VerificationTokenWhereInput");
let VerificationTokenWhereUniqueInput = exports.VerificationTokenWhereUniqueInput = class VerificationTokenWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VerificationTokenWhereUniqueInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VerificationTokenIdentifierTokenCompoundUniqueInput_1.VerificationTokenIdentifierTokenCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VerificationTokenIdentifierTokenCompoundUniqueInput_1.VerificationTokenIdentifierTokenCompoundUniqueInput)
], VerificationTokenWhereUniqueInput.prototype, "identifier_token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VerificationTokenWhereInput_1.VerificationTokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VerificationTokenWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VerificationTokenWhereInput_1.VerificationTokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VerificationTokenWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VerificationTokenWhereInput_1.VerificationTokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VerificationTokenWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VerificationTokenWhereUniqueInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], VerificationTokenWhereUniqueInput.prototype, "expires", void 0);
exports.VerificationTokenWhereUniqueInput = VerificationTokenWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VerificationTokenWhereUniqueInput", {})
], VerificationTokenWhereUniqueInput);
