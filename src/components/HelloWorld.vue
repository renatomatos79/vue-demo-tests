<template>
  <div>
    <input
      v-if="formData"
      type="email"
      placeholder="What's your email"
      v-model="formData.email"
      :class="{ error: $v.formData.email.$error }"
      @blur="$v.formData.email.$touch"
    />
    <p v-if="!$v.formData.email.email">Please enter a valid email address.</p>
    <p v-if="!$v.formData.email.required">Email is required.</p>
    <button type="submit">Submit</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EmailInterface, myValidations } from "@/interfaces/email-interface";
import { EmailModel } from "@/models/email-model";
import { IVuelidate, Vuelidate } from "vuelidate";

@Component({
  validations: {
    formData: {
      ...myValidations,
    },
  },
})
export default class HelloWorld
  extends Vue
  implements IVuelidate<EmailInterface>
{
  $v: Vuelidate<EmailInterface>;

  public formData = new EmailModel();
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dirty {
  border-color: #5a5;
  background: #efe;
}

.dirty:focus {
  outline-color: #8e8;
}

.error {
  border-color: red;
  background: #fdd;
}

.error:focus {
  outline-color: #f99;
}
</style>
