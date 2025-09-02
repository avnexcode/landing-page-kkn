import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { HiddenComponentFormInner } from "./HiddenComponentFormInner";
import { toast } from "sonner";
import { useRouter } from "next/router";

export const passwordFormSchema = z.object({
  password: z
    .string()
    .min(1, "Password tidak boleh kosong.")
    .min(8, "Password harus minimal 8 karakter.")
    .max(150, "Password tidak boleh lebih dari 150 karakter."),
});

export type PasswordFormSchema = z.infer<typeof passwordFormSchema>;

type HiddenComponentFormProps = {
  setIsVisible: (isVisible: boolean) => void;
  setIsEnabled: (isEnabled: boolean) => void;
  password: string;
  label: string;
};

export const HiddenComponentForm = ({
  setIsVisible,
  setIsEnabled,
  password,
  label,
}: HiddenComponentFormProps) => {
  const router = useRouter();
  const form = useForm<PasswordFormSchema>({
    defaultValues: {
      password: "",
    },
    resolver: zodResolver(passwordFormSchema),
  });

  const handleSubmit = () => {
    if (form.getValues("password") === password) {
      setIsVisible(true);
      setIsEnabled(true);
      void router.push({
        query: {
          pass: form.getValues("password"),
        },
      });
      toast.success("Akses berhasil dibuka");
    } else {
      toast.error("Password tidak sesuai");
    }
  };

  return (
    <Card className="bg-background border-none shadow-none">
      <CardContent>
        <Form {...form}>
          <HiddenComponentFormInner
            formId="download-password-form"
            onSubmit={handleSubmit}
            label={label}
          />
        </Form>
      </CardContent>
      <CardFooter className="place-content-end">
        <Button
          type="submit"
          form="download-password-form"
          className="cursor-pointer px-10"
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};
