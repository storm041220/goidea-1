enum TokenEnum {
    Refresh = 'refresh',
    Access = 'access',
    EmailVerify = 'emailVerify',
    ChangePassword = 'changePassword',
}

export const TokenTypes = ["refresh", "access", "emailVerify", "changePassword", "teamInvitation"];

export type TokenType = typeof TokenTypes[number];

export default TokenEnum;