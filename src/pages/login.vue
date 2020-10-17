<template>
  <div>
    <!-- Page content -->
    <div class="container py-7 py-lg-8 pt-lg-9">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
          <div class="card bg-secondary border-0 mb-0">
            <div class="card-body px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <b>Login</b>
              </div>
              <form role="form">
                <base-input alternative
                            class="mb-3"
                            prepend-icon="ni ni-email-83"
                            placeholder="Email"
                            v-model="model.email">
                </base-input>

                <base-input alternative
                            class="mb-3"
                            prepend-icon="ni ni-lock-circle-open"
                            type="password"
                            placeholder="Password"
                            v-model="model.password">
                </base-input>
                <small>Esqueceu seu e-mail ou senha? </small>
                <!-- <base-checkbox v-model="model.rememberMe">Remember me</base-checkbox> -->
                <div class="text-center">
                  <base-button type="primary" class="my-4">Sign in</base-button>
                </div>
              </form>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-6">
              <nuxt-link to="/register" class="text-light"><small>Criar conta</small></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseInput from '~/components/Input/BaseInput.vue';
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
      loginFirebase(){

      }
    },
  };
</script>
