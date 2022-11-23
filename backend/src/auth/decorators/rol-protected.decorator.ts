import { SetMetadata } from '@nestjs/common';
import { UserRoles } from '../enums/user.roles';

export const META_ROLES = 'roles';

export const RolProtected = (...args: UserRoles[]) => {
  return SetMetadata(META_ROLES, args);
};
