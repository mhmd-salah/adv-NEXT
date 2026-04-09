import { USER_ROLES } from '@/lib/constants/api.constant'

export default function SettingsPage() {
  return (
    <div className="flex items-center justify-center text-green-500">
      {Object.values(USER_ROLES).map((role) => (
        <div key={role}>{role}</div>
      ))}
    </div>
  )
}
