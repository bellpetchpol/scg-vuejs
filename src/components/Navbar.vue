<template>
  <div >
    <b-navbar toggleable="lg" type="light" style="background-color: #e3f2fd;" fixed="top">
        <b-navbar-brand href="#">Bell SCG Candidate</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">Find N Number</b-nav-item>
                <b-nav-item href="#/place_search">Place Search</b-nav-item>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
  }
}
</script>