<template>
  <mdb-container>
    <mdb-row>
      <mdb-col lg="3" md="12" class="mb-lg-0 mb-3" v-for="t in 5" style="margin-top: 20px;">
        <mdb-view hover class="rounded z-depth-2 mb-4">
          <img class="img-fluid" src="../assets/logo.png" />
          <mdb-mask overlay="white-slight" waves/>
        </mdb-view>
        <a class="pink-text">
          <h6 class="font-weight-bold mb-3">
            <mdb-icon icon="map" class="pr-2" />Adventure</h6>
        </a>
        <h4 class="font-weight-bold mb-3">
          <strong>Title of the news</strong>
        </h4>
        <hr>
        <p>hello</p>
        <hr>
        <p>Hello</p>
        <hr>
        <p>hello</p>
        <hr>
        <p>Hello</p>
        <mdb-btn color="pink" rounded size="md">Read more</mdb-btn>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardBody, mdbMask, mdbIcon, mdbView, mdbBtn } from 'mdbvue';

export default {
  name: 'BlogPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbMask,
    mdbIcon,
    mdbView,
    mdbBtn
  }
};
</script>
