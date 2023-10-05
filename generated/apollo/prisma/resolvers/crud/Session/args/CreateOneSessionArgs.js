"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSessionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCreateInput_1 = require("../../../inputs/SessionCreateInput");
let CreateOneSessionArgs = exports.CreateOneSessionArgs = class CreateOneSessionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateInput_1.SessionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionCreateInput_1.SessionCreateInput)
], CreateOneSessionArgs.prototype, "data", void 0);
exports.CreateOneSessionArgs = CreateOneSessionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneSessionArgs);
