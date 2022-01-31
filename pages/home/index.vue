<template>
  <div class="home-contener p-5">
      <div class="row">
          <!-- Navigation -->
          <NavigationBar />
      </div>
      <div class="row">
          <div class="col-md-4 pt-5">
             <h1 class="text-white text-start">Employee Management System </h1>
             <p class="mt-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio fugiat aspernatur voluptas fugit voluptatem nam repellat ab eos velit?</p> 
             <NuxtLink to="/employee" class="btn btn-lg btn-outline-light mt-5 border border-4 rounded-pill px-5">View All Employees </NuxtLink>
          </div>
          <div class="col-md-4"></div>
          <div class="col-md-4"></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.home-contener{
    background: url('~assets/bgimg.jpg');
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    width: 100vw;
}

h1{
    font-size: 3.5em;
}

p {
    font-size: 1.15em;
}

</style>