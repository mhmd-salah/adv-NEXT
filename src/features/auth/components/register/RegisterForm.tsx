import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema, TRegisterForm } from "../../schema/register.schema";
import { useMutation } from "@tanstack/react-query";

async function registerUser(data: TRegisterForm) {
  const response = await fetch(`/api/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Registration failed");
  }
  return result;
}

export default function RegisterForm() {
  const [step, setStep] = useState(0);  

  const {
    register: registerField,
    trigger,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterForm>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const mutation = useMutation({ mutationFn: registerUser });

  async function handleNext() {
    let isValid = false;

    if (step === 0) {
      isValid = await trigger(["name", "email"]);
    } else if (step === 1) {
      isValid = await trigger(["password"]);
    }
    if (isValid) {
      setStep((current) => current + 1);
    }
  }

  function onSubmit(data: TRegisterForm) {
    mutation.mutate(data);
  }

  const values = getValues();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-md spacey-4"
    >
      <p>Step {step + 1} of 3 </p>

      {/* Step 0 */}
      {step === 0 && (
        <>
          {/* Name input */}
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              {...registerField("name")}
              className="block w-full border p-2"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email input */}
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...registerField("email")}
              className="block w-full border p-2"
              placeholder="email@example.com"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        </>
      )}

      {/* Step 1 */}
      {step === 1 && (
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...registerField("password")}
            className="block w-full border p-2"
            placeholder="At least 8 characters"
          />
          {errors.password && (
            <p className="text-red-600"> {errors.password.message} </p>
          )}
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-2">
          <h3>Review your information</h3>
          <p>Name: {values.name}</p>
          <p>Email: {values.email}</p>
          <p>Password: ********</p>
          <p>Your password will not be displayed</p>
        </div>
      )}

      {mutation.isError && (
        <p className="text-red-600">{mutation.error.message}</p>
      )}

      {mutation.isSuccess && <p className="text-green-600">Register Success</p>}

      {/*  */}
      <div className="flex gap">
        {step > 0 && (
          <button
            type={"button"}
            onClick={() => setStep((current) => current - 1)}
          >
            Back
          </button>
        )}

        {step < 2 && (
          <button
            type={"button"}
            onClick={() => setStep((current) => current + 1)}
          >
            Next
          </button>
        )}

        {step === 2 && (
          <button
            type={"submit"}
            className="rounded bg-green-600 px-4 py-2 text-white disabled:opacity-40"
          >
            {mutation.isPending ? "Registering..." : "Register"}
          </button>
        )}
      </div>
    </form>
  );
}
