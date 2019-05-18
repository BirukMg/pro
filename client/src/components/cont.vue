<template>
<div>
  <mdb-container>
 <mdb-row>
    <mdb-col md="4">
      <mdb-input type="text" label="posting title" />
    </mdb-col>
    <mdb-col md="4">
      <mdb-input type="number" label="price" />
    </mdb-col>
    <mdb-col md="4">
      <mdb-input type="text" label="specificlocation" />
    </mdb-col>
    </mdb-row>

    <mdb-row>
      <mdb-row>
  <mdb-col md="3">
  
  </mdb-col>
  </mdb-row>
 <mdb-col md="12" >    
<mdb-textarea label="posting body" @input="handleInput" :rows="5"/>
</mdb-col>
</mdb-row>





<mdb-row>
    <mdb-col md="4">
      <mdb-input type="number" label="number of ticket availeble" />
    </mdb-col>
    </mdb-row>

<mdb-col md="4">
      <mdb-input type="email" label="your email address" />
    </mdb-col>



<mdb-row>
    
    <mdb-col md="4">
      <mdb-input type="number" label="phone number" />
    </mdb-col>
    <mdb-col md="4">
      <mdb-input type="text" label="additional address information" />
    </mdb-col>
    </mdb-row>


<mdb-btn color="primary">continue</mdb-btn>



  </mdb-container>










  
</div>


</template>

<script>
import {mdbRow,mdbCol,mdbTextarea,mdbContainer,mdbInput,mdbBtn} from 'mdbvue'
export default {
  components:{
    mdbRow,mdbCol,mdbTextarea,mdbContainer,mdbInput,mdbBtn
  }
}
</script>
