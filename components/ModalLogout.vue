<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper align-bottom lg:align-middle">
        <div class="modal-container w-full lg:w-2/5 rounded-2xl relative px-10 py-12">
          <svg-icon name="close" @click="$emit('close')"
                    class="absolute h-5 w-5 cursor-pointer rounded-full hover:bg-light top-0 right-0 m-6"/>
          <div class="modal-header flex justify-center font-medium text-lg">
              Logout
          </div>

          <div class="modal-body my-6">
              <div class="w-full">
                <h3 class="font-normal text-center text-sm">Are you sure, you want to logout ?</h3>
              </div>
          </div>

          <div class="modal-footer flex">
              <button
                class="w-full mr-2 bg-white border border-light text-sm p-4 rounded-full text-primary hover:bg-light hover:border-primary"
                @click="logout">
                Yes
              </button>
              <button
                class="w-full ml-2 bg-white border border-light text-sm p-4 rounded-full text-primary hover:bg-light hover:border-primary"
                @click="$emit('close')">
                No
              </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "nodalemailchange",
    data: () => ({
      emailSent: false,
      email: ''
    }),
    methods: {
      sendVerificationEmail() {
        this.emailSent = true
      },
      async logout(){
        await this.$auth.logout();
        await this.$router.push({path:'/login'})
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
