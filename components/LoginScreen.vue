<template>
  <a-row
    type="flex"
    justify="space-around"
    align="middle"
    style="margin-top: 200px">
    <a-col :span="8">
      <div class="justify-content-around d-flex">
        <img src="~/assets/logo-blue.png" style="width: 130px" class="m-3" />
      </div>
      <div class="mt-5 p-4 bg-white shadow rounded">
        <LoginForm />
      </div>
    </a-col>
  </a-row>
</template>

<script>
export default {};
</script>

<style>
</style>
