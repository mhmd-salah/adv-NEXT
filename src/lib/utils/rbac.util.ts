import { USER_ROLES } from "../constants/api.constant"
import { TRole } from "../types/user"

const POLICIES = {
  [USER_ROLES.OWNER]: [
    "view:products",
    "create:products",
    "update:products",
    "delete:products",
    "view:categories",
    "create:categories",
    "update:categories",
    "delete:categories",
  ],
  [USER_ROLES.ADMIN]: [
    "view:products",
    "create:products",
    "update:products",
    "view:categories",
    "create:categories",
    "update:categories",
  ],
  [USER_ROLES.USER]: [
    // "view:products",
    "view:categories",
  ]
} as const

type Permission = (typeof POLICIES)[TRole][number];

export function hasPermission(permission: Permission, role?: TRole) {
  if (!role) return false;

  return (POLICIES[role] as readonly Permission[]).includes(permission)
}