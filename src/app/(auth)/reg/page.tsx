"use client";
import { FieldError, FieldGroup } from "@/components/ui/field";
import { Field, FieldLabel, Input } from "@base-ui/react";
import { useEffect } from "react";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type FormValues = {
  username: string;
  password: string;
};

const RegisterPage = () => {
  // React-Hook-Form
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  //--------------------->

  // console.log(form.watch("username"));
  const onSubmit: SubmitHandler<FormValues> = async (values, e) => {
    console.log(form.getValues("username"));
    console.log(form.getValues("username"));
  };

  // watch without render
  useEffect(() => {
    form.setError("username", {
      type: "manual",
      message: "username is missing",
    });
    const unSubscribe = form.subscribe({
      name: "username",
      formState: {
        values: true,
        errors: true,
      },
      callback: (values) => {
        console.log(values);
      },
    });
    return () => unSubscribe();
  }, []);
  // -------------------->
  console.log(form.formState.errors);
  console.log("component render");
  return (
    <div>
      <h1>register</h1>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col ">
          <Input
            type="text"
            placeholder="username"
            {...form.register("username", {
              required: "username is required",
            })}
          />
          {form.formState.errors.username && (
            <p>{form.formState.errors.username.message}</p>
          )}

          <Input
            type="password"
            placeholder={
              !form.formState.errors.password
                ? "password"
                : form.formState.errors.password.message
            }
            {...form.register("password", {
              required: "password is required",
              setValueAs: (value: string) => value.trim().toLowerCase(),
              validate: (value: string) => {
                if (value == "test") {
                  return "not allowed username equal test";
                }
                return true;
              },
            })}
          />
          {form.formState.errors?.password && (
            <p>{form.formState.errors.password?.message}</p>
          )}
          <button type="submit">submit</button>
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterPage;
