import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import CustomButton from "./CustomButton";
import { useTranslations } from "next-intl";

export default function Form() {
    const t = useTranslations("form");

    const formSchema = z.object({
        name: z
            .string()
            .max(20, t("nameTooLong"))
            .min(2, t("nameTooShort")),
        email: z
            .email(t("emailNotValid")),
        content: z
            .string()
            .min(10, t("messageTooShort"))
            .max(300, t("messageTooLong"))
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            content: ""
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        // do something with the values
        console.log(data)
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>

                {/* Name */}
                <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="form-name">
                                {t("name")}
                            </FieldLabel>
                            <Input
                                {...field}
                                id="form-name"
                                aria-invalid={fieldState.invalid}
                                placeholder={t("namePlaceholder")}
                                autoComplete="off"
                                className="bg-background rounded-full h-10"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* Email */}
                <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="form-email">
                                Email
                            </FieldLabel>
                            <Input
                                {...field}
                                id="form-email"
                                type="email"
                                aria-invalid={fieldState.invalid}
                                placeholder={t("mailPlaceholder")}
                                autoComplete="off"
                                className="bg-background rounded-full h-10"

                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* Content */}
                <Controller
                    name="content"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="form-content">
                                {t("message")}
                            </FieldLabel>
                            <Textarea
                                {...field}
                                id="form-content"
                                aria-invalid={fieldState.invalid}
                                placeholder={t("messagePlaceholder")}
                                autoComplete="off"
                                rows={8}
                                className="bg-background "
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                <CustomButton type="submit" variant="solid" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? t("sending") : t("send")}
                </CustomButton>

            </FieldGroup>
        </form>
    )
}