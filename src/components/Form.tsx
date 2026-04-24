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
import { sendContact } from "@/actions/contact";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { EnvelopeSimpleIcon, PaperPlaneTiltIcon } from "@phosphor-icons/react";

export default function Form({ success, setSuccess }: { success: boolean, setSuccess: (s: boolean) => void }) {
    const t = useTranslations("form");
    const [error, setError] = useState(false);

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

    async function onSubmit(data: z.infer<typeof formSchema>) {
        const result = await sendContact(data);
        if (result?.success) {
            form.reset();
            setSuccess(true);
        } else {
            setError(true);
        }
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
                <div className="w-full  flex flex-col justify-center items-center gap-2">

                    <CustomButton aria-label="Send email with form data" className="w-full flex flex-row justify-center items-center gap-1 disabled:pointer-events-none " type="submit" variant="solid" disabled={form.formState.isSubmitting || success}>
                        {
                            form.formState.isSubmitting
                                ? <><EnvelopeSimpleIcon />{t("sending")}</>
                                : success
                                    ? <>🚀 {t("sent")}</>
                                    : <><PaperPlaneTiltIcon />{t("send")}</>
                        }
                    </CustomButton>
                    <p className={cn("", success ? "block" : "hidden")}></p>
                    {success && <Label className="text-green-600 :pointer-events-none ho">{t("success")}</Label>}
                    {error && <Label >{t("error")}</Label>}
                </div>


            </FieldGroup>
        </form>
    )
}