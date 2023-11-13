<script >
export default {
  name: 'App',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    saveForm() {
      console.log(this.email);

      var email = this.email;
      let item = { email };
      fetch("https://microcodes.in/emailvalidatorapi/public/api/validate_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
        })


    }
  }
}
</script>

<template>
  <br>
  <br>

  <div class="row">
    <div class="col-2"></div>
    <div class="col-8">

      <!-- form -->
      <form @submit.prevent="saveForm">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" aria-describedby="emailHelp">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
    <div class="col-2"></div>
  </div>
</template>

