<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper align-bottom lg:align-middle">
        <form v-if="!showSuccess" @submit.prevent="changePassword"  class="modal-container w-full lg:w-2/5 rounded-2xl relative px-10 py-12">
          <svg-icon name="close"  @click="$emit('close')" class="absolute h-5 w-5 cursor-pointer rounded-full hover:bg-light top-0 right-0 m-6"/>
          <div class="modal-header flex justify-center font-medium text-lg">
            <slot name="header">
              Change Password
            </slot>
          </div>

          <div class="modal-body my-12">
            <slot name="body">
              <div class="w-full mb-12">
                <label class="font-medium text-xs">Current Password <span class="ml-1 text-star">*</span></label>
                <div class="my-2 w-full flex items-center">
                  <input type="password"
                         v-model="user.current_password"
                         required
                         autocomplete="on"
                         class="w-full border border-light_thin px-4 py-3 rounded-lg focus:border-primary focus:outline-none"
                         placeholder="Enter your current password"/>
                </div>
              </div>
              <div class="w-full">
                <label class="font-medium text-xs">New Password <span class="ml-1 text-star">*</span></label>
                <div class="my-2 w-full flex items-center">
                  <input type="password"
                         v-model="user.new_password"
                         required
                         class="w-full border border-light_thin px-4 py-3 rounded-lg focus:border-primary focus:outline-none"
                         placeholder="Create a new password"/>
                </div>
              </div>
              <div class="w-full">
                <label class="font-medium text-xs">Confirm Password <span class="ml-1 text-star">*</span></label>
                <div class="my-2 w-full flex items-center">
                  <input type="password"
                         v-model="user.confirm_password"
                         required
                         class="w-full border border-light_thin px-4 py-3 rounded-lg focus:border-primary focus:outline-none"
                         placeholder="Confirm your new password"/>
                </div>
              </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button type="submit" class="w-full bg-primary text-sm p-4 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none">
                <span v-if="!loading">Save Changes</span>
                <LoaderSmall v-else/>
              </button>
            </slot>
          </div>
        </form>
        <div v-else class="modal-container w-full lg:w-2/5 rounded-2xl relative px-10 py-12">
          <svg-icon name="close" @click="$emit('close')"
                    class="absolute h-5 w-5 cursor-pointer rounded-full hover:bg-light top-0 right-0 m-6"/>
          <div class="modal-header flex justify-center font-medium text-lg">
            <slot name="header">
              {{message}}
            </slot>
          </div>
          <div class="modal-body my-12">
            <slot name="body">
              <div class="w-full">
                <p class="font-normal text-sm text-center">{{error?'Please try again':'You can now login with the new password'}}</p>
              </div>
            </slot>
          </div>
        </div>

      </div>
    </div>
  </transition>
</template>

<script>
  import LoaderSmall from '../components/LoaderSmall'
  export default {
    name: "nodalpasswordchange",
    components: {LoaderSmall},
    data: () => ({
      loading: false,
      message:'',
      user: {},
      showSuccess: false,
      error: false,
    }),
    methods:{
      validatePassword(){
        const {current_password,new_password, confirm_password} = this.user;
        if(new_password!==confirm_password){
          this.message = "New Password and Confirm Password doesn't match";
          return false;
        }
        return true;
      },
      async changePassword(){
        this.loading = true;
        try {
          if (this.validatePassword()) {
            const resp = await this.$axios.post('change-password/', this.user);
            if (resp && !resp.isAxiosError) {
              this.showSuccess = true;
              this.error = false;
              this.message = resp.data && resp.data.message
              this.loading = false;
            }
          }
        }catch(err){
          this.error = true;
          const {data} = err.response && err.response.data.message;
          this.message = data;
          this.loading = false;
        }
      }
    }
  }
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    display: table-cell;
  }

  .modal-container {
    margin: 0px auto;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }

  @media (max-width: 800px) {
    .modal-container {
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-default-button {
    float: right;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
