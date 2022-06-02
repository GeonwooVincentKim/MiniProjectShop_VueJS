<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-ra">
    <div class="container-fluid">
      <a href="#" class="navbar-brand">Soldout</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-tar-get="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aira-label="Toggle Navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul clas="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Product List</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/detail">Product Detail Page</router-link>
          </li>
          <li v-if="user.email != undefined" class="nav-item">
            <router-link class="nav-link" to="/sales">Add Product Page</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input type="search" class="form-control me-2" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit"></button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'HeaderPage'
}
</script>
