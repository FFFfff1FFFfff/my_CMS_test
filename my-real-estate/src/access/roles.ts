import type { Access, FieldAccess } from 'payload'

export const isAdmin: Access = ({ req: { user } }) => {
  return user?.role === 'admin'
}

export const isAdminField: FieldAccess = ({ req: { user } }) => {
  return user?.role === 'admin'
}

export const isAdminOrEditor: Access = ({ req: { user } }) => {
  return user?.role === 'admin' || user?.role === 'editor'
}
