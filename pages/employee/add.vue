<template>

<div class="all">
    <NavigationBar />

<h1> Add Employee</h1>

<br>

  <form>
 <div class="row">   
 <div class="form-group col-md-5">
    <label for="exampleInputPassword1">First Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="First name">
  </div>

  <div class="form-group col-md-5">
    <label for="exampleInputPassword1">Last Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Last name">
  </div>
  </div>

  <br>
  
  <div class="row">
  <div class="form-group col-md-5">
    <label for="inputAddress">Address Line 1</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="No 123">
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
    <input type="text" class="form-control" id="inputCity" placeholder="Kandy">
  </div> 
  </div>

<br>

  <div class="form-group col-md-5">
    <label for="exampleFormControlSelect1">Sex</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Male</option>
      <option>Female</option>
    </select>
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
 <div class="button-submit">
  <button type="submit" class="btn btn-primary">Add Employee</button>
  </div>

</form>
</div>

</template>

<script>
export default {

  methods: {


    /**
     * This method is used for sample preview
     * @param id - user Id
     * @param name - username
     * @returns boolean
     */
    sampleMethord(id, name) {

    } 
  }

}
</script>

<style>

h1 {
  text-align: center;
}

.all {
  align-items: center;
  /* margin: auto; */
  width: 100%;
  padding: 20px;
}

.button-submit {
  margin-left: 1115px;
}

</style>