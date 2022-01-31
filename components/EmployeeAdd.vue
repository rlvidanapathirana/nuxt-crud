<template>
  <div>
    <div class="row py-3">
      <div class="col-md-4">
        <!-- Profile picture-->
        <div class="profile-pic mt-5 text-center">
          <a-avatar
            src="https://www.pngegg.com/en/png-wbapv"
            :size="200"
            icon="user"
          />
          <br />
          <br />
          <button class="btn btn-outline-primary" type="button">
            Upload Image
          </button>
          <div class="small font-italic text-muted mb-4">
            .JPG or .PNG no larger than 10 MB
          </div>
        </div>
      </div>

      <form class="col-md-8">

          <div class="row">   
 <div class="form-group col-md-5">
    <label for="exampleInputPassword1">First Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Asanka">
  </div>

  <div class="form-group col-md-5">
    <label for="exampleInputPassword1">Last Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Gamage">
  </div>
  </div>

  <br>
  
  <div class="row">
  <div class="form-group col-md-5">
    <label for="inputAddress">Address Line 1</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="No 45">
  </div>

  <div class="form-group col-md-5">
    <label for="inputAddress2">Address Line 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="New Town">
  </div>
  </div>
  <br>

  <div class="row">
  <div class="form-group col-md-5">
    <label for="inputAddress">City</label>
    <input type="text" class="form-control" id="inputCity" placeholder="Mathale">
  </div> 

<br>

  <div class="form-group col-md-5">
    <label for="exampleFormControlSelect1">Sex</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Male</option>
      <option>Female</option>
    </select>
  </div>
  </div>

 

<br>
  
   <div class="row">
  <div class="form-group col-md-5">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    
  </div>
  <div class="form-group col-md-5">
    <label for="exampleInputPassword1">Moble Number</label>
    <input type="tel" class="form-control" id="exampleInputPassword1" placeholder="Number">
  </div>
  </div>
  
 <br>
  <div class="save-btn d-flex justify-content-end" style="margin-right:140px">
  <button class="btn btn-primary" type="button">Add Employee</button>
  </div>

      </form>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>