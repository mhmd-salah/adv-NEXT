import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { RegisterFormValues } from "../types/register";

const cities = {
  egypt: ["cairo", "alexandria", "giza", "luxor", "aswan"],
  usa: [
    "new york",
    "los angeles",
    "chicago",
    "houston",
    "phoenix",
    "philadelphia",
  ],
  france: ["paris", "lyon", "marseille", "toulouse", "nice"],
  germany: ["berlin", "munich", "frankfurt", "hamburg", "cologne", "bonn"],
};

export default function CitiesSelect() {
  const form = useFormContext<RegisterFormValues>();
  const country = useWatch<RegisterFormValues>({
    name: "country",
  }) as RegisterFormValues["country"];

  return (
    <Controller
      control={form.control}
      name="city"
      render={({ field }) => (
        <Select value={field.value} onValueChange={field.onChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select a city" />
          </SelectTrigger>

          <SelectContent>
            {cities[country]?.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
}
