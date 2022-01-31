<template>
  <div class="row"> 
    <div class="col-md-2">
      <img class="logo" src="~/assets/logo.png" />
    </div>
    <div class="col-md-10">
      <div class="nav-bar">
        <div class="d-flex justify-content-end">
          <NuxtLink class="nav-link-custom mx-2" to="/home">
            <i class="bi bi-house-fill m-2"></i>
            <span>Home</span>
          </NuxtLink>
          <NuxtLink class="nav-link-custom mx-2" to="/employee">
            <i class="bi bi-people-fill m-2"></i>
            <span>Employee</span>
          </NuxtLink>
          <NuxtLink class="nav-link-custom mx-2" to="/employee/add">
            <i class="bi bi-person-plus-fill m-2"></i>
            <span>Add Employee</span>
          </NuxtLink>

          <NuxtLink class="nav-link-custom mx-2" to="/">
            <i class="bi bi-box-arrow-right"></i>
            <span>Log Out</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");

.nav-link-custom {
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  text-transform: capitalize;
  padding: 10px 20px;
  border-radius: 50px;
  transition: 0.2s;
}

.nav-link-custom:hover {
  background-color: #00000033;
  color: white;
}

.logo {
  height: 65px;
  transition: .2s;
}

.logo:hover {
  opacity: 60%;
}
</style>