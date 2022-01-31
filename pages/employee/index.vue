<template>
  <div>
    <div class="mt-3">
      <h1>All Employee Page</h1>
    </div>

    <br />

    <!-- Search Bar -->
    <div class="searchBar">
      <a-input-search
        placeholder="Search Employees"
        style="width: 300px"
        @search="onSearch"
      />
      <br />
    </div>

    <div class="mt-3">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Address Line 1</th>
            <th scope="col">Address Line 2</th>
            <th scope="col">City</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Asanka</td>
            <td>Gamage</td>
            <td>No 45</td>
            <td>New town</td>
            <td>Mathale</td>
            <td>asankagamage@gmail.com</td>
            <td>0747567385</td>
            <td>
              <button type="button" class="btn btn-success btn-sm">View</button>
              <button type="button" class="btn btn-primary btn-sm">Edit</button>
              <button type="button" class="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Kamal</td>
            <td>Ekanayaka</td>
            <td>No 54</td>
            <td>Alapalawala</td>
            <td>Kandy</td>
            <td>ekanayaka@gmail.com</td>
            <td>0714567854</td>
            <td>
              <button type="button" class="btn btn-success btn-sm">View</button>
              <button type="button" class="btn btn-primary btn-sm">Edit</button>
              <button type="button" class="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Dineth</td>
            <td>Ekanayaka</td>
            <td>No 1/16</td>
            <td>New town</td>
            <td>Kurunagala</td>
            <td>dineth97@gmail.com</td>
            <td>0734560980</td>
            <td>
              <button type="button" class="btn btn-success btn-sm">View</button>
              <button type="button" class="btn btn-primary btn-sm">Edit</button>
              <button type="button" class="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Sachith</td>
            <td>Madumadawa</td>
            <td>No 62</td>
            <td>New town</td>
            <td>Kurunagala</td>
            <td>sachithmaduma@gmail.com</td>
            <td>0747989000</td>
            <td>
              <button type="button" class="btn btn-success btn-sm">View</button>
              <button type="button" class="btn btn-primary btn-sm">Edit</button>
              <button type="button" class="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Thisara</td>
            <td>Yashodha</td>
            <td>No 56</td>
            <td>Galahitiyawa</td>
            <td>Gampaha</td>
            <td>thisara99@gmail.com</td>
            <td>0798900385</td>
            <td>
              <button type="button" class="btn btn-success btn-sm">View</button>
              <button type="button" class="btn btn-primary btn-sm">Edit</button>
              <button type="button" class="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Deshan</td>
            <td>Pathirana</td>
            <td>No 32</td>
            <td>Pujanagaraya</td>
            <td>Mihinthalaya</td>
            <td>deshan.p@gmail.com</td>
            <td>0707567300</td>
            <td>
              <button type="button" class="btn btn-success btn-sm">View</button>
              <button type="button" class="btn btn-primary btn-sm">Edit</button>
              <button type="button" class="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
.searchBar {
  margin-left: 1125px;
}
</style>