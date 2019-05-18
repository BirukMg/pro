<template id="">
  <div class="main-footer">
    <mdb-footer class="mt-2 special-color-dark" dark>
      <mdb-container>
        <mdb-row>
          <mdb-col sm="3">
            <h5>Information</h5>
            <ul>
              <li class="footer-lists">About</li>
              <li class="footer-lists">Terms</li>
              <li class="footer-lists">Privecy Policy</li>
            </ul>
          </mdb-col>
          <mdb-col sm="3">
            <h5>Newsletter</h5>
          </mdb-col>
          <mdb-col sm="3">
            <h5>Follow us</h5>
          </mdb-col>
          <mdb-col sm="3">
            <h5>Contact us</h5>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <div class="footer-copyright text-center py-3" fluid>
        <container fluid>
          &copy; 2018 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </container>
      </div>
    </mdb-footer>
  </div>
</template>
<script>
  import {mdbFooter,mdbIcon,mdbRow,mdbCol,mdbContainer} from 'mdbvue'
  export default {
    name: 'Footer',
    components: {
      mdbFooter,mdbIcon,mdbRow,mdbCol,mdbContainer
    }
  }
</script>
<style>
  .footer-lists{
    list-style: none;
  }
  .main-footer{
    margin-top: 120px;
  }
</style>
