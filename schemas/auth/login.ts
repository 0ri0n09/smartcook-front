import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import { computed } from 'vue';

export function useLoginSchema() {

    return computed(() => {
        return toTypedSchema(
            z.object({
                email: z.string({
                    required_error: "Email address is required",
                }).email({
                    message: "Email address is not valid",
                }).trim(),
                password: z
                    .string()
                    .min(8, {
                        message: "Password must be at least 8 characters",
                    })
                    .trim(),
                remember: z.boolean().default(false),
            })
        );
    });
}