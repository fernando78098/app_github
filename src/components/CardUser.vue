<template>
  <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
    <div class="card bg-light d-flex flex-fill">
      <div class="card-header text-muted border-bottom-0">
        Usuario GitHub
      </div>
      <div class="card-body pt-0">
        <div class="row">
          <div class="col-7">
            <h2 class="lead">
              <b>
                {{ userName }}
              </b>
            </h2>
            <p v-if="bio != null" class="text-muted text-sm">
              <b>
                Bio:
              </b>
              {{ bio }}
            </p>
            <ul class="ml-4 mb-0 fa-ul text-muted">
              <li class="small">
                <span class="fa-li">
                  <i class="fas fa-lg fa-building"></i>
                </span>
                Data Registro: {{ formatData(create_at) }}
              </li>
              <li class="small">
                <span class="fa-li">
                  <i class="fas fa-lg fa-phone"></i>
                </span>
                Repositorios Publicos: {{ repo }}
              </li>
            </ul>
          </div>
          <div class="col-5 text-center">
            <img :src="avatar" class="img-circle img-fluid">
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="text-right">
          <a href="#" class="btn btn-sm bg-teal">
            <i class="fas fa-comments"></i>
          </a>
          <router-link
            class="btn btn-sm btn-primary"
            :to="{name: 'Profile', params: {name: userName}}"
          >
            Perfil
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue';
  import axios from "axios";

  export default {
    props: {
      userName: '',
    },
    data() {
      return {
        avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        create_at: '',
        repo: '',
        bio: '',
      }
    },
    async mounted() {
      this.loadApp();
    },
    methods: {
      loadApp() {
        let name = this.userName;
        let details = [];
        axios
          .get('https://api.github.com/users/'+name)
          .then(response => {
            this.avatar = response.data.avatar_url;
            this.create_at = response.data.created_at;
            this.repo = response.data.public_repos;
            this.bio = response.data.bio;         })
          .catch(error => console.log(error))
      },
      formatData(date) {
        return new Date(date).toLocaleDateString('pt-br', {timeZone: 'UTC'})
      }
    },
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
  .card {
    font-family: "Source Sans Pro";
    box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
    margin-bottom: 1rem;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
    box-sizing: border-box;
    line-height: 1.5;
    text-align: left;
    padding: 0;
  }
  .img-circle {
    border-radius: 50%;
  }
  .card-header {
    background-color: transparent;
    padding: 0.75rem 1.25rem;
    position: relative;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  </style>
