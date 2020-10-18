<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <div class="container">
        <div class="header-body text-center mb-7 login-text">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 px-5">
              <h1 class="text-white">Seletor de Frutas</h1>
              <p class="text-lead text-white">
                Se você já tem uma conta, entre com seu e-mail e senha para ver os dados de sua produção.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <div class="container mt--8 pb-5">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
          <div class="card bg-secondary border-0 mb-0">
            <div class="card-body px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>Login</small>
              </div>
              <form role="form">
                <base-input alternative
                            class="mb-3"
                            prepend-icon="ni ni-email-83"
                            placeholder="E-mail"
                            v-model="model.email">
                </base-input>

                <base-input alternative
                            class="mb-3"
                            prepend-icon="ni ni-lock-circle-open"
                            type="password"
                            placeholder="Senha"
                            v-model="model.password">
                </base-input>
                <div class="text-center">
                  <base-button type="primary" class="my-4" v-on:click="loginFirebase">Login</base-button>
                </div>
              </form>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-6">
              <nuxt-link to="/dashboard" class="text-light"><small>Esqueceu a senha?</small></nuxt-link>
            </div>
            <div class="col-6 text-right">
              <nuxt-link to="/register" class="text-light"><small>Criar uma nova conta</small></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseInput from '~/components/Inputs/BaseInput.vue';
import BaseButton from '~/components/Buttons/BaseButton.vue';

  export default {
    layout: 'AuthLayout',
    components:{
      BaseInput,
      BaseButton
    },
    data() {
      return {
        model: {
          email: '',
          password: '',
          rememberMe: false
        }
      };
    },
    methods: {
      loginFirebase(e) {
        e.preventDefault();
        this.$store.$firebaseAuth.signInWithEmailAndPassword(
          this.model.email,
          this.model.password
        ).catch(function(error) {
          // TODO: Show error on the page.
          console.log(error.code);
          console.log(error.message);
        });
      }
    },
  };
</script>
<style>
  .login-text {
    margin-bottom: 1rem !important;
  }
</style>
