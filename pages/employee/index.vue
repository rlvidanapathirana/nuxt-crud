<template>
  <div class="home-contener p-5">
    <div class="row">
      <!-- Navigation -->
      <NavigationBar />
    </div>

    <div class="mt-5">
      <h2 class="text-white">All Employees</h2>
    </div>

  <div class="row bg-white mt-3 p-3 rounded">
        <EmployeesTable />
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