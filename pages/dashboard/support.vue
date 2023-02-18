<template>
  <div>
    <div
      class="flex flex-row p-2"
      v-if="ticketsClone && ticketsClone.length > 0"
    >
      <div class="w-4/12">
        <div
          class="w-full flex items-center justify-between border border-light_thin px-4 py-3 rounded-lg bg-white"
        >
          <svg-icon name="search-new" class="h-4 w-4 mr-4" />
          <input
            type="email"
            :value="searchValue"
            class="w-full h-full focus:border-primary focus:outline-none"
            placeholder="Search Ticket"
          />
        </div>
        <table
          v-if="ticketsClone && ticketsClone.length > 0"
          class="w-full m-0 mt-2 border border-light_thin rounded-lg bg-white"
        >
          <thead>
            <tr class="bg-primary_dim">
              <th class="w-1/2 py-3 px-4 text-xs font-normal border-r border-b">
                <span class="float-left">Id</span>
              </th>
              <th
                class="w-full lg:w-1/2 px-4 font-normal text-xs lg:border-r border-b"
              >
                <span class="float-left">Status</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="relative cursor-pointer"
              v-for="(ticket, idx) in ticketsClone"
              :class="active === idx ? ' bg-light' : ''"
              @click="changeActiveConv(idx)"
            >
              <td class="border-r border-b lg:px-4 py-2">
                <span class="text-xs">
                  <p class="text-sm m-0">{{ ticket.uid }}</p>
                  <p class="text-xs text-text_gray">
                    {{
                      new Date(ticket.created_at).toDateString() +
                      ' ' +
                      new Date(ticket.created_at).getHours() +
                      ' ' +
                      new Date(ticket.created_at).getMinutes()
                    }}
                  </p>
                </span>
              </td>
              <td class="border-r border-b px-4 py-2 relative">
                <p class="text-xs m-0 lowercase capitalize">
                  {{ ticket.subject }}
                </p>
                <svg-icon
                  name="right-arrow-new"
                  class="transform translate-50p h-2 w-2 absolute right-0 top-0 m-2"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="w-8/12 flex flex-col items-end pl-2 pb-0">
        <div class="w-1/3">
          <button
            @click="showTicketModal"
            class="w-full bg-primary text-xs py-3 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
          >
            Raise new ticket
          </button>
        </div>
        <div
          class="w-full h-full mt-3 flex flex-col justify-between border border-light_thin rounded-lg bg-white"
        >
          <div class="border-b px-4 py-2 w-full flex justify-around">
            <div>
              <p class="text-border_c text-xs">ID</p>
              <p class="text-xs">
                {{ ticketsClone[active] && ticketsClone[active].uid }}
              </p>
            </div>
            <div>
              <p class="text-border_c text-xs">DATE</p>
              <p class="text-xs">
                {{
                  new Date(
                    ticketsClone[active] && ticketsClone[active].updated_at
                  ).toDateString()
                }}
              </p>
            </div>
            <div>
              <p class="text-border_c text-xs">SUBJECT</p>
              <p class="text-xs">
                {{ ticketsClone[active] && ticketsClone[active].subject }}
              </p>
            </div>
          </div>
          <div
            ref="messageContainer"
            class="message-container overflow-y-scroll py-2 h-50vh"
          >
            <div
              class=""
              v-for="(message, iidx) in ticketsClone[active] &&
              ticketsClone[active].messages"
              :key="iidx"
            >
              <div
                class="flex justify-end mb-2 ml-2"
                v-if="
                  message.user &&
                  message.user.email === $auth.user &&
                  $auth.user[0].email
                "
              >
                <div
                  v-if="message.loading && !message.failed"
                  class="flex items-end p-2"
                >
                  <LoaderTiny />
                </div>
                <div class="flex items-end p-2" v-if="message.failed">
                  <button
                    class="bg-dimm hover:bg-disabled_gray flex items-center border-none outline-none text-dim_text text-xs"
                  >
                    Retry<svg-icon
                      name="reload"
                      class="ml-1 h-3 w-3"
                    ></svg-icon>
                  </button>
                </div>
                <span
                  class="text-xs float-right max-w-66p rounded-lg p-4 pl-12 bg-right-msg"
                >
                  <p class="font-medium text-right mb-2 text-xs">
                    You
                    <span class="text-dim_text font-normal ml-2">{{
                      new Date(message.created_at).toDateString() +
                      ' ' +
                      new Date(message.created_at).getHours() +
                      ':' +
                      new Date(message.created_at).getMinutes()
                    }}</span>
                  </p>
                  <p>{{ message.message }}</p>
                </span>
                <div
                  class="h-6 w-6 mx-2 rounded bg-primary flex justify-center items-center text-white capitalize"
                >
                  {{ message.user && message.user.email[0] }}
                </div>
              </div>
              <div v-else class="flex justify-start mb-2 mr-2">
                <div
                  class="h-6 w-6 mx-2 rounded bg-spotify flex justify-center items-center text-white capitalize"
                >
                  {{ message.user && message.user.email[0] }}
                </div>
                <span
                  class="text-xs float-right max-w-66p rounded-lg p-4 pr-12 bg-dimm"
                >
                  <p class="font-medium text-xs mb-2">
                    Support
                    <span class="ml-2 text-dim_text font-normal">{{
                      new Date(message.created_at).toDateString() +
                      ' ' +
                      new Date(message.created_at).getHours() +
                      ':' +
                      new Date(message.created_at).getMinutes()
                    }}</span>
                  </p>
                  <p>{{ message.message }}</p>
                </span>
              </div>
            </div>
          </div>
          <div class="border-t py-2 w-full flex">
            <button
              type="button"
              class="bg-transparent border-none hover:text-primary"
              @click.stop="openFilePicker"
            >
              <svg-icon name="attachment" class="h-4 w-4" />
            </button>
            <form class="flex w-full" @submit.prevent="respondToMessage">
              <input
                type="text"
                placeholder="Text here"
                v-model="message"
                required
                class="text-sm font-base outline-none focus:outline-none px-4 w-full h-8 rounded-full bg-light_bg border border-light_thin"
              />
              <button type="submit" class="bg-transparent border-none">
                <svg-icon name="send" class="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="h-300p flex flex-col justify-center items-center">
      <h3 class="font-medium text-lg">You have not raised any issues yet</h3>

      <div class="w-10/12 mt-8 flex justify-center">
        <p
          @click="showTicketModal"
          class="cursor-pointer w-full font-medium text-center my-2 underline hover:text-primary"
        >
          Raise a new issue
        </p>
        <!--<slider/>-->
      </div>
    </div>
    <input type="file" class="hidden" ref="attachmentPicker" />
    <ModalRaiseTicket v-if="showRaiseTicket" @close="closeDialog" />
  </div>
</template>

<script>
import ModalEmailChange from '../../components/ModalEmailChange'
import ModalPasswordChange from '../../components/ModalPasswordChange'
import ModalRaiseTicket from '@/components/ModalRaiseTicket'
import LoaderTiny from '@/components/LoaderTiny'

export default {
  name: 'support',
  middleware: ['auth'],
  data: () => ({
    searchValue: null,
    showRaiseTicket: false,
    tickets: [],
    ticketsClone: [],
    count: 0,
    message: null,
    active: 0,
  }),
  components: { LoaderTiny, ModalRaiseTicket },
  async asyncData({ $axios }) {
    const resp = await $axios.get('get-tickets/', { params: { page: 1 } })
    if (resp && !resp.isAxiosError) {
      return {
        count: resp.data && resp.data.count,
        ticketsClone: resp.data && resp.data.results,
        tickets: resp.data && resp.data.results,
      }
    }
  },
  methods: {
    showTicketModal() {
      this.showRaiseTicket = true
    },
    closeDialog() {
      this.showRaiseTicket = false
      this.fetchAllMessages()
    },
    changeActiveConv(active) {
      this.active = active
    },
    openFilePicker() {
      this.$refs.attachmentPicker.click()
    },
    async respondToMessage(e) {
      e.preventDefault()
      this.ticketsClone[this.active].messages.push({
        attachment: '',
        created_at: new Date(),
        id: 1,
        message: this.message,
        updated_at: new Date(),
        loading: true,
        user: {
          email: this.$auth.user && this.$auth.user[0].email,
        },
      })
      setTimeout(() => {
        this.scrollToElement()
      }, 100)

      this.loading = true
      try {
        const resp = await this.$axios.post('message-support/', {
          message: this.message,
          ticket_id: this.ticketsClone[this.active].uid,
        })
        if (resp && !resp.isAxiosError) {
          this.showSuccess = true
          this.error = false
          this.loading = false
          await this.fetchAllMessages()
        }
      } catch (err) {
        this.error = true
        if (err.response && err.response.data) {
          const { data } = err.response
          this.errorMessage = data && data.message
        }
        this.addRetry()
        this.loading = false
      }
      this.message = null
    },
    scrollToElement() {
      const el = this.$refs.messageContainer

      if (el) {
        el.scrollTop = el.scrollHeight + 100
      }
    },
    async fetchAllMessages() {
      this.loading = true
      try {
        const resp = await this.$axios.get('get-tickets/', {
          params: { page: 1 },
        })
        if (resp && !resp.isAxiosError) {
          this.count = resp.data && resp.data.count
          this.ticketsClone = resp.data && resp.data.results
          this.tickets = resp.data && resp.data.results
        }
      } catch (err) {
        this.error = true
        if (err.response && err.response.data) {
          const { data } = err.response
          this.message = data
          this.errorMessage = data && data.message
        }
        this.loading = false
      }
      this.message = null
    },
    addRetry() {
      const len = this.ticketsClone[this.active].messages.length
      const lastMsg = JSON.parse(
        JSON.stringify(this.ticketsClone[this.active].messages[len - 1])
      )
      lastMsg.failed = true
      this.$set(this.ticketsClone[this.active].messages, len - 1, lastMsg)
    },
  },
  mounted() {
    this.scrollToElement()
    const { query } = this.$route
    if (query && query['new-ticket'] == 'true') {
      this.showTicketModal()
    }
  },
}
</script>

<style scoped>
.translate-50p {
  transform: translateY(50%);
}

.bg-right-msg {
  background: #f3f5ff;
}

.max-w-66p {
  max-width: 66%;
}

.h-50vh {
  height: 50vh;
}
</style>
