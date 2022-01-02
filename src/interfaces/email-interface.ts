import { ValidationRuleset } from "vuelidate";
import { email, required } from "vuelidate/lib/validators";

export const myValidations: ValidationRuleset<EmailInterface> = {
  email: {
    email,
    required,
  },
};

export interface EmailInterface {
  email: string;
}
