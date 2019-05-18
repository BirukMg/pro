<template>
    <div>
        <h4>Latest Posts</h4>
        <mdb-row>
          <mdb-col lg="3" md="12" class="mb-lg-0 mb-3" v-for="t in 4" style="margin-top: 20px;">
            <mdb-card>
              <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap"
                waves></mdb-card-image>
              <mdb-card-body>
                <mdb-card-title>Card with waves effect</mdb-card-title>
                <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                <mdb-btn color="primary">Button</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
        <h4>Top categories</h4>
        <mdb-row>
          <mdb-col lg="3" md="12" class="mb-lg-0 mb-3" v-for="t in 4" style="margin-top: 20px;">
            <mdb-card>
              <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap"
                waves></mdb-card-image>
              <mdb-card-body>
                <mdb-card-title>Card with waves effect</mdb-card-title>
                <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                <mdb-btn color="primary">Button</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
    </div>
</template>
<script>
import {mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardImage, mdbCardTitle, mdbCardText, mdbBtn} from 'mdbvue'
export default {
    components: {
        mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardImage, mdbCardTitle, mdbCardText, mdbBtn
    }
}
</script>