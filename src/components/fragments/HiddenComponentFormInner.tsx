import { useFormContext } from "react-hook-form";
import type { PasswordFormSchema } from "./HiddenComponentForm";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

type HiddenComponentFormInnerProps = {
  formId: string;
  onSubmit: (values: PasswordFormSchema) => void;
  label: string;
};

export const HiddenComponentFormInner = ({
  formId,
  onSubmit,
  label,
}: HiddenComponentFormInnerProps) => {
  const form = useFormContext<PasswordFormSchema>();
  return (
    <form id={formId} onSubmit={form.handleSubmit(onSubmit)}>
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input
                placeholder="Masukkan password disini"
                autoComplete="off"
                type="password"
                {...field}
              />
            </FormControl>
            <FormDescription>{label}</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </form>
  );
};
