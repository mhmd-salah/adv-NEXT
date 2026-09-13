
import React from 'react'
import { FieldError } from 'react-hook-form'

interface FormErrorProps {
  error?: FieldError;
}

export default function FormError({ error }: FormErrorProps) {
  if (!error) return null;

  if (error.types) {
    return (
      <ul className='flex flex-col dark:text-red-500 text-sm text-red-500 list-disc'>
        {Object.values(error.types).map((message, i) => (
          <li key={i}>{message}</li>
        ))}
      </ul>
    )
  }

  return (
    <p className="dark:text-red-500 text-sm text-red-500">
      {error.message}
    </p>
  )
}
