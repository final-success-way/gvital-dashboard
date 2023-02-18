<template>
  <div>
    <div class="flex flex-col p-4 lg:p-8 h-300p">
      <div class="w-full lg:w-4/5">
        <label class="font-medium text-xs"
          >Email <span class="ml-1 text-star">*</span></label
        >
        <div class="my-2 w-full flex flex-col lg:flex-row lg:items-center">
          <input
            type="email"
            disabled
            :value="$auth.user && $auth.user[0].email"
            class="w-full lg:w-10/12 border border-light_thin px-4 py-3 rounded-lg focus:border-primary focus:outline-none"
            placeholder="Enter your email"
          />
          <h3
            @click="showEmailModal"
            class="cursor-pointer bg-transparent p-0 outline-none bor text-primary font-medium text-xs inline m-0 whitespace-pre mt-4 lg:mt-0 ml-0 lg:ml-2"
          >
            Change Email
          </h3>
        </div>
      </div>
      <div class="w-full lg:w-4/5">
        <label class="font-medium text-xs"
          >Password <span class="ml-1 text-star">*</span></label
        >
        <div class="my-2 w-full flex flex-col lg:flex-row lg:items-center">
          <input
            type="password"
            disabled
            value="asdasdlasfhalsifghasf"
            class="w-full lg:w-10/12 border border-light_thin px-4 py-3 rounded-lg focus:border-primary focus:outline-none"
            placeholder="Enter your password"
          />
          <h3
            @click="showPasswordModal"
            class="cursor-pointer text-primary font-medium text-xs m-0 inline whitespace-pre mt-4 lg:mt-0 ml-0 lg:ml-2"
          >
            Change Password
          </h3>
        </div>
      </div>
    </div>
    <ModalEmailChange v-if="showEmail" @close="closeDialog" />
    <ModalPasswordChange v-if="showPassword" @close="closeDialog" />
  </div>
</template>

<script>
import ModalEmailChange from '../../components/ModalEmailChange'
import ModalPasswordChange from '../../components/ModalPasswordChange'

export default {
  name: 'account',
  middleware: ['auth'],
  data: () => ({
    showEmail: false,
    showPassword: false,
  }),
  components: { ModalEmailChange, ModalPasswordChange },
  methods: {
    showEmailModal() {
      this.showEmail = true
    },
    showPasswordModal() {
      this.showPassword = true
    },
    closeDialog() {
      this.showPassword = false
      this.showEmail = false
    },
  },
}
</script>

<style scoped></style>
