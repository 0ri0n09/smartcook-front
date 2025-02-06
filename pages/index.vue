<script setup lang="ts">
import { FormControl, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { useForm } from "vee-validate";
import { useLoginSchema } from "~/schemas/auth/login";

useHead({ title: "SmartCook - Connnexion" });
definePageMeta({
  layout: 'default',
  //middleware: ["guest"]
});

const loginSchema = useLoginSchema();
const form = useForm({
  validationSchema: loginSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
  console.log(values)
})
</script>

<template>
  <div>
    <form @submit="onSubmit">

      <!-- Email -->
      <div>
        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel class="font-semibold">Email</FormLabel>
            <FormControl>
              <Input placeholder="johndoe@gmail.com" type="email" variant="outlined" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
