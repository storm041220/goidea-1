enum TokenEnum {
    Refresh = 'refresh',
    Access = 'access',
    ChangePassword = 'changePassword',
}

export const TokenTypes = ["refresh", "access", "changePassword"];

export type TokenType = typeof TokenTypes[number];

export default TokenEnum;