import { Session } from "next-auth";
import { Category } from "../types/category";
import { Product } from "../types/product"
import { Review } from "../types/review";
import { TRole } from "../types/user";
import { USER_ROLES } from "../constants/api.constant";

type Permissions = {
  products: {
    type: Product;
    action: "view" | "create" | "update" | "delete";
  };
  categories: {
    type: Category;
    action: "view" | "create" | "update";
  };
  reviews: {
    type: Review;
    action: "view" | "create" | "update" | "delete";
  };
}

type Policies = {
  [R in TRole]: Partial<{
    [P in keyof Permissions]: Partial<{
      [A in Permissions[P]['action']]: boolean | ((user: Session['user'], resource?: Permissions[P]['type']) => boolean);
    }>
  }>
}

const POLICIES: Policies = {
  [USER_ROLES.OWNER]: {
    products: {
      create: true,
      update: true,
      delete: true,
      view: true,
    },
    categories: {
      create: true,
      update: true,
      view: true,
    },
    reviews: {
      create: true,
      update: true,
      delete: true,
      view: true,
    },
  },
  [USER_ROLES.ADMIN]: {
    products: {
      create: true,
      update: true,
      view: true,
    },
    categories: {
      create: true,
      update: true,
      view: true,
    },
    reviews: {
      create: true,
      update: true,
      delete: true,
      view: true,
    },
  },
  [USER_ROLES.USER]: {
    products: {
      view: true,
    },
    categories: {
      view: true,
    },
    reviews: {
      view: true,
      create: () => new Date() < new Date('2026-04-30'),
      delete: (user, review) => user.id === review?.user,
      update: (user, review) => user.id === review?.user,
    },
  }
}

export function hasPermission<Object extends keyof Permissions>(
  user: Session['user'] | null | undefined,
  object: Object,
  action: Permissions[Object]['action'],
  resource?: Permissions[Object]['type'],
) {
  if (!user) return false;

  const permission = POLICIES[user.role][object]?.[action];

  if (typeof permission === 'boolean') return permission;

  if (typeof permission === 'function') return permission(user, resource);

  return false;
}