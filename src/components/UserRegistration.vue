<template>
  <div>
    <h1> User Registration</h1>
    <form @submit="submitForm">
      <input
        type="text"
        v-model="user.firstname"
        placeholder="First Name"
        required
      />
      <input
        type="text"
        v-model="user.lastname"
        placeholder="Last Name"
        required
      />
      <input type="email" v-model="user.email" placeholder="Email" required />
      <input
        type="text"
        v-model="user.phone"
        placeholder="Phone Number"
        required
      />
      <input
        type="text"
        v-model="user.address"
        placeholder="Address"
        required
      />
      <input type="file" @change="onFileChange" required />
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        phone: "",
      },
      videoPath: null,
    };
  },
  methods: {
    onFileChange(e) {
      this.videoPath = e.target.files[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append("firstname", this.user.firstname);
      formData.append("lastname", this.user.lastname);
      formData.append("email", this.user.email);
      formData.append("phone", this.user.phone);
      formData.append("address", this.user.address);
      formData.append("video", this.videoPath);
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      try {
            const response = await axios.post('http://localhost:3000/api/register', formData);
            console.log(response.data);
        
            if (response.data.success) {
              this.$router.push("/payment");
            } else {
              alert("Registration failed");
            }
          }
          catch (error)
          {
            console.log(error);
            alert(error.response ? error.response.data.message :"Error during registration");
      }
    },
  },
};
</script>
  