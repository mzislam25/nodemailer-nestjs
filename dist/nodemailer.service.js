"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerService = void 0;
const common_1 = require("@nestjs/common");
let NodemailerService = class NodemailerService {
    constructor(transporter) {
        this.transporter = transporter;
    }
    async sendEmail(to, subject, text, html) {
        var _a, _b;
        const mailOptions = {
            from: (_b = (_a = this.transporter) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.from,
            to,
            subject,
            text,
            html,
        };
        await this.transporter.sendMail(mailOptions);
    }
};
exports.NodemailerService = NodemailerService;
exports.NodemailerService = NodemailerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('MAILER_TRANSPORTER')),
    __metadata("design:paramtypes", [Object])
], NodemailerService);
//# sourceMappingURL=nodemailer.service.js.map