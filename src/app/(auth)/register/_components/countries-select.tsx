import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";
import { RegisterFormValues } from "../types/register";

const countries = ["egypt", "usa", "france", "germany"];

export default function CountriesSelect() {
  const form = useFormContext<RegisterFormValues>();

  console.log(form.watch());

  return (
    <Controller
      control={form.control}
      name="country"
      render={({ field }) => (
        <Select value={field.value} onValueChange={field.onChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>

          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
}
