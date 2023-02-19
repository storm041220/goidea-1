enum Role {
    User = 'user',
    Admin = 'admin',
    QAM = "qam",
    QAC = "qac",
    Staff = "staff",
}

export const RoleNames = ["admin", "user", "qam", "qac", "staff"]

export type RoleName = typeof RoleNames[number];

export default Role;