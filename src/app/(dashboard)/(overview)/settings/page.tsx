
import { USER_ROLES } from '@/lib/constants/api.constant'
import React from 'react'

export default function Page() {
  return (
    <div>
      {Object.values(USER_ROLES).map((role) => (
        <div key={role}>{role}</div>
      ))}
    </div>
  )
}
