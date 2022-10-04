<template>
  <div class="col-md-3">
    <div class="card card-primary card-outline">
      <div class="card-body box-profile">
        <div class="text-center">
          <img class="profile-user-img img-fluid img-circle" :src="avatar" alt="User profile picture">
        </div>
        <h3 class="profile-username text-center">
          {{ name }}
        </h3>
        <p class="text-muted text-center">
          {{ login }}
        </p>
        <ul class="list-group list-group-unbordered mb-3">
          <li class="list-group-item">
            <b class="float-left">
              Seguidores
            </b>
            <a class="float-right">
              {{ followers }}
            </a>
          </li>
          <li class="list-group-item">
            <b class="float-left">
              Seguindo
            </b>
            <a class="float-right">
              {{ following }}
            </a>
          </li>
          <li class="list-group-item">
            <b class="float-left">
              Repositorios
            </b>
            <a class="float-right">
              {{ repo }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">
          Sobre mim
        </h3>
      </div>
      <div class="card-body">
        <strong strong>
          <i class="fas fa-book mr-1"></i>
          Bio
        </strong>
        <p class="text-muted">
          {{ bio }}
        </p>
        <hr>
        <strong>
          <i class="fas fa-map-marker-alt mr-1"></i>
          Empresa
        </strong>
        <p class="text-muted">
          {{ company }}
        </p>
        <hr>
        <strong>
          <i class="fas fa-pencil-alt mr-1"></i>
          Blog
        </strong>
        <p class="text-muted">
          {{ blog }}
        </p>
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
          name: '',
          login: '',
          avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
          followers: '',
          following: '',
          repo: '',
          create_at: '',
          bio: '',
          company: '',
          blog: '',
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
    .img-circle {
    border-radius: 50%;
  }
  .card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem !important;
  }

  .card {
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
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }
  .img-circle {
    border-radius: 50%;
}
.profile-user-img {
    border: 3px solid #adb5bd;
    margin: 0 auto;
    padding: 3px;
    width: 100px;
}
.img-fluid {
    max-width: 100%;
    height: auto;
}
img {
    vertical-align: middle;
    border-style: none;
}
.profile-username {
    font-size: 21px;
    margin-top: 5px;
}
.text-muted {
    color: #6c757d!important;
}
.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}


.float-right {
    float: right!important;
}
.float-left {
    float: left!important;
}
.list-group-item {
    position: relative;
    display: block;
    padding: 1rem 1rem;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
    border-left: 0;
    border-radius: 0;
    border-right: 0;

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
}
.list-group {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: 0.25rem;
}
dl, ol, ul {
    margin-top: 0;
    margin-bottom: 1rem;
}
*, ::after, ::before {
    box-sizing: border-box;
}
.text-center {
    text-align: center!important;
}

  .card-primary.card-outline {
    border-top: 3px solid #007bff;
  }
  .text-center{
    text-align: center!important;
  }
    </style>
