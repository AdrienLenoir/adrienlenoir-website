<template>
  <div class="auth">
    <form class="auth-form" @submit.prevent="signin()">
      <div class="auth-form-content">
        <h3 class="mb-4">Connexion</h3>

        <b-field label="Mot de passe">
          <b-input
            v-model="password"
            type="password"
            placeholder="Votre mot de passe"
            required>
          </b-input>
        </b-field>

        <b-field label="Code de double authentification">
          <b-input
            v-model="a2f_code"
            type="password"
            placeholder="Vote code de double authentification"
            required>
          </b-input>
        </b-field>

        <div class="auth-form-button">
          <b-button native-type="submit" label="Se connecter" class="is-block" type="is-primary" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import cookie from 'js-cookie'
import jwtDecode from "jwt-decode"

export default {
  layout: "void-admin",
  data() {
    return {
      password: "",
      a2f_code: ""
    }
  },
  methods: {
    async signin() {
      const result = await this.$axios.$post(`/auth/signin`, {
        password: this.password,
        a2f_code: this.a2f_code
      })

      if (result.success) {
        const token = result.token
        const decoded = jwtDecode(token)

        if (decoded) {
          cookie.set('token', token, { expires: 1 })
          await this.$router.push({path: '/admin'})
        }
      } else {
        this.$swal({
          toast: true,
          position:"top-end",
          showConfirmButton: false,
          timer: 2500,
          icon: "error",
          text: result.error
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.auth {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--c-primary);

  &-form {
    flex: .25;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1244px) {
      flex: .4;
    }

    @media screen and (max-width: 700px) {
      flex: .8;
    }

    h3 {
      text-align: center;
    }

    &-content {
      flex: 1;
    }

    .auth-form-button {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
