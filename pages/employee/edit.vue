<template>
  <div class="employee-contener p-5">
    <div class="row">
      <!-- Navigation -->
      <NavigationBar />
    </div>

    <div class="mt-5">
      <h2 class="text-white">Edit Employee</h2>
    </div>

    <div class="row bg-white mt-3 p-3 rounded">
      <EmployeeEdit />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSearch(value) {
      console.log(value);
    },
  },
};
</script>

<style>
</style>