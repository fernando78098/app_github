<template>
  <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
    <div class="card bg-light d-flex flex-fill">
      <div class="card-header text-muted border-bottom-0">
        Repository GitHub
      </div>
      <div class="card-body pt-0">
        <div class="row">
          <div class="col-12">
            <h2 class="lead">
              <b>
                {{ name }}
              </b>
            </h2>
            <p class="text-muted text-sm">
              <b>
                Descrição:
              </b>
              {{ description }}
            </p>
            <ul class="ml-4 mb-0 fa-ul text-muted">
              <li class="small">
                <span class="fa-li">
                  <i class="fas fa-lg fa-building"></i>
                </span>
                Limguagem: {{ language }}
              </li>
              <li class="small">
                <span class="fa-li">
                  <i class="fas fa-lg fa-phone"></i>
                </span>
                Visibilidade: {{ visibility }}
              </li>
              <li class="small">
                <span class="fa-li">
                  <i class="fas fa-lg fa-phone"></i>
                </span>
                Star: {{ star }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    props: {
      name: '',
      description: '',
      language: '',
      visibility: '',
      star: '',
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
