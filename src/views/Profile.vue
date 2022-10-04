<template>
  <section class="content">
    <div class="container-fluid row">
      <CardUserProfile
        ref="CardUserProfile"
      ></CardUserProfile>
      <div class="col-md-9">
        <div class="card">
          <div class="card-header">
            Lista de repositorios
          </div>
          <div class="card-body row">
            <cardRepository
              v-for="(repository, key) in repositorys"
              :key="key"
              :name="repository.name"
              :description="repository.description"
              :language="repository.language"
              :visibility="repository.visibility"
              :star="repository.stargazers_count"
              ref="cardrepository+{{ key }}"
            >
            </cardRepository>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  <script>
    import { ref } from 'vue';
    import axios from "axios";
    import CardUserProfile from '../components/CardUserProfile.vue';
    import cardRepository from '../components/CardRepository.vue';

    export default {
      name: 'Profile',
      props: {
        userName: '',
      },
      data() {
        return {
          repositorys: [],
        }
      },
      mounted() {
        this.loadApp();
      },
      methods: {
        loadApp() {
          let name = this.$route.params.name;
          axios
            .get('https://api.github.com/users/'+name)
            .then(response => {
              this.$refs.CardUserProfile.avatar = response.data.avatar_url;
              this.$refs.CardUserProfile.name = response.data.name;
              this.$refs.CardUserProfile.login = response.data.login;
              this.$refs.CardUserProfile.followers = response.data.followers;
              this.$refs.CardUserProfile.following = response.data.following;
              this.$refs.CardUserProfile.repo = response.data.public_repos;
              this.$refs.CardUserProfile.create_at = response.data.create_at;
              this.$refs.CardUserProfile.bio = response.data.bio;
              this.$refs.CardUserProfile.company = response.data.company;
              this.$refs.CardUserProfile.blog = response.data.blog;
              this.loadRepository(response.data.repos_url);
          })
          .catch(error => console.log(error))
        },
        loadRepository(url) {
          axios
            .get(url)
            .then(response => {
              this.repositorys = response.data;
          })
          .catch(error => console.log(error))
        }
      },
      components: {
        CardUserProfile,
        cardRepository
      }
    }
  </script>


  <style scoped>

  </style>
