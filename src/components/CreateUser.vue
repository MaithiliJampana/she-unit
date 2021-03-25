<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <v-btn v-for="item in menuItems" :key="item.to" :to="item.to" class="ml-4" :text="true">
                {{ item.title }}
        </v-btn>
        <h2>Sign Up</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputEmail1">First Name</label>
                        <input type="text" class="form-control" v-model="firstName" name="firstname" id="firstname" aria-describedby="emailHelp" placeholder="First Name" />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputPassword1">Last Name</label>
                        <input type="text" class="form-control" v-model="lastName" name="lastname" id="lastname" placeholder="Last Name" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-12">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="text" class="form-control" v-model="email" name="email" id="email" aria-describedby="emailHelp" placeholder="Email" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-12">
                        <input type="radio" id="Mentor" value="Mentor" v-model="role">
                        <label for="Mentor">Mentor</label>
                        &nbsp;
                        <input type="radio" id="Mentee" value="Mentee" v-model="role">
                        <label for="Mentee">Mentee</label>

                    </div>
                </div>
                <button type="button" @click='createUser()' class="btn btn-danger">SignUp</button>&nbsp;
                <router-link to="overview" tag="button" class="btn btn-danger">Login</router-link>
                
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'CreateUser',
  data() {
      menuItems: [
      {
        title: 'Stop Interactions',
        subtitle: 'Manage Interactions',
        to: '/'
      }
    ]
    return {
      firstName: '',
      lastName: '',
      email: '',
      role: ''
    }
  },
  methods: {
      createUser() {
          console.log(this.firstName)
          const payload = {
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              role: this.role
          }
          this.$emit('createUser', payload)
          this.clearForm();
          this.$router.push({name: 'Overview'})
      },
      clearForm() {
          this.firstName = "";
          this.lastName = "";
          this.email = "";
      }
  }
}
</script>