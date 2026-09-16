

'use client';

import React, { use, useEffect, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Controller, type SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import CountriesSelect from './countries-select';
import CitiesSelect from './cities-select';
import { RegisterFormValues } from '../types/register';
import { Button } from '@/components/ui/button';
import FormError from './form-error';



export default function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    defaultValues: async () => {
      return {
        username: '',
        password: '',
        country: 'egypt',
        city: 'cairo',
        age: 18,
        birthday: '1990-01-01',
        address: {
          street: '',
          city: '',
          state: '',
          zip: '',
          country: 'egypt',
        }
      }
    },
    // shouldUnregister: false,
  })

  form.unregister('username')

  const onSubmit: SubmitHandler<RegisterFormValues> = async (values) => {
    console.log('submitted')
    console.log(values)

    // form.setError('form', {
    //   message: 'Invalid credentials'
    // })

    return;

    const errors = [
      {
        "path": "password",
        "messages": [
          "Password must be at least 8 characters",
          "Password must include at least one uppercase letter",
          "Password must include at least one number",
          "Password must include at least one special character"
        ]
      },
      {
        "path": "username",
        "messages": "Username already exists"
      }
    ]

    errors.forEach(error => {
      if (Array.isArray(error.messages)) {
        const messages: Record<string, string> = {};

        error.messages.forEach((message, i) => {
          messages[i.toString()] = message;
        })

        form.setError(error.path as keyof RegisterFormValues, {
          types: messages
        })

        return;
      }

      form.setError(error.path as keyof RegisterFormValues, {
        message: error.messages
      })
    })
  }

  useEffect(() => {
    // const unsubscribe = form.subscribe({
    //   name: 'username',
    //   formState: { 
    //     values: true,
    //     errors: true,
    //   },
    //   callback: ({ values, errors }) => {
    //     console.log(values)
    //   }
    // })

    // return () => unsubscribe()
  }, [])

  // console.log(form.getValues())
  // const username = form.watch('username')
  const setRandomAge = () => {
    const randomAge = Math.floor(Math.random() * 18) + 1;
    form.setValue('age', randomAge);
  }

  const setRandomAddress = () => {
    const randomAddress: RegisterFormValues['address'] = {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
      country: 'usa',
    }

    // form.setValue('address', { country: 'usa', city: 'Anytown', state: 'CA', zip: '12345', country: 'usa' });
    form.setValue('address.country', 'usa');
    form.setValue('address.city', 'Anytown');
    form.setValue('address.state', 'CA');

  }


  return (
    <FormProvider {...form}>
      <Button onClick={setRandomAge}>Set random age 0 - 18</Button>
      <Button onClick={setRandomAddress}>Set random address</Button>

      <form onSubmit={form.handleSubmit(onSubmit, (errors) => console.log(errors))} className="space-y-5">
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            {...form.register('username', {
              required: {
                value: true,
                message: 'Username is required. Please enter a username.',
              },
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters long.',
              },
              // onBlur: (e) => {},
              // onChange: (e) => {},
              // setValueAs: (value: string) => value + 'test',
              // validate: async (value: string) => {
              //   if (value === 'test') {
              //     return 'Username cannot be test.';
              //   }
              //   return true;
              // },
            })}
            id="username" type="username" placeholder="yourusername" autoComplete="username" />

          <FormError error={form.formState.errors.username} />
        </div>

        {/* <FieldGroup>
        <Controller
          name="username"
          render={({ field, fieldState }) => <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-demo-title">
              Bug Title
            </FieldLabel>

            <Input
              {...field}
              id="form-rhf-demo-title"
              aria-invalid={fieldState.invalid}
              placeholder="Login button not working on mobile"
              autoComplete="off"
            />

            {fieldState.invalid && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>}
        />
      </FieldGroup> */}

        <div>
          <Label htmlFor="password">Password</Label>
          <Input {...form.register('password')} id="password" type="password" placeholder="••••••••" autoComplete="current-password" />

          <FormError error={form.formState.errors.password} />
        </div>

        <CountriesSelect />
        <CitiesSelect />

        <div>
          <Label htmlFor="age">Age</Label>
          <Input {...form.register('age', {
            valueAsNumber: true
          })} id="age" type="number" placeholder="18" autoComplete="age" />

          <FormError error={form.formState.errors.age} />
        </div>

        <div>
          <Label htmlFor="birthday">Birthday</Label>
          <Input {...form.register('birthday', {
            valueAsDate: true
          })} id="birthday" type="date" placeholder="1990-01-01" autoComplete="birthday" />

          <FormError error={form.formState.errors.birthday} />
        </div>


        <label className="flex items-center gap-2.5 cursor-pointer group">
          <input
            type="checkbox"
            className="rounded border-zinc-600 bg-zinc-800 text-amber-500 focus:ring-amber-500/30 focus:ring-offset-0 focus:ring-2"
          />
          <span className="text-sm text-zinc-500 group-hover:text-zinc-400 transition">
            Remember me
          </span>
        </label>

        {form.formState.errors.form && <p className="text-red-500 text-sm">{form.formState.errors.form.message}</p>}
        <button
          disabled={!form.formState.isValid && form.formState.isSubmitted}
          type="submit"
          className="w-full rounded-lg bg-amber-500 py-3 px-4 font-medium text-zinc-900 shadow-lg shadow-amber-500/25 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {false ? (
            <span className="inline-flex items-center gap-2">
              <Spinner />

              Signing in…
            </span>
          ) : (
            'Register'
          )}
        </button>

        <Button
          className='w-full h-8'
          type='button'
          variant='outline'
          size='sm'
          onClick={() => form.reset({ username: '123' }, {
            keepErrors: true,
          })}
        >Reset username</Button>

        <Button
          className='w-full h-8'
          type='button'
          variant='destructive'
          size='sm'
          onClick={() => form.trigger('username', { shouldFocus: true })}
        >Trigger Validation</Button>
      </form>
    </FormProvider>
  )
}


function Spinner() {
  return (
    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden>
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  )
}