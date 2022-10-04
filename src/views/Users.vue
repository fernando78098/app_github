
<template>
    <section class="content">
      <div class="card card-solid">
        <div class="card-body pb-0">
          <div class="row">
            <CardUser
              v-for="(name, key) in userNames"
              :key="key"
              :userName="name"
            >
            </CardUser>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script>
    import { ref } from 'vue'
    import CardUser from '../components/CardUser.vue'

    export default {
      name: 'Users',
      data() {
        return {
          userNames: [
            'wallysonn',
            'diego3g',
            'filipedeschamps',
            'rmanguinho'
          ],
        }
      },
      components: {
        CardUser
      }
    }
  </script>

  <style scoped>
  .read-the-docs {
    color: #888;
  }
  </style>
