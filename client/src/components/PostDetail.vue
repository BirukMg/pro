<template>
    <div>
        <mdb-container>
            <mdb-row>
                <mdb-col sm="6" >
                    <img src="../assets/img.jpg" class="img-fluid" alt="">
                </mdb-col>
                <mdb-col sm="6">
                    <div class="p-4">
                        <div class="mb-3">
                            <a href="">
                                <span class="badge purple mr-1">Category 2</span>
                            </a>
                            <a href="">
                                <span class="badge blue mr-1">New</span>
                            </a>
                            <a href="">
                                <span class="badge red mr-1">Bestseller</span>
                            </a>
                        </div>
                        <p class="lead">
                        <span>$100</span>
                        </p>
                        <p class="lead font-weight-bold">Description</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor suscipit libero eos atque quia ipsa
                        sint voluptatibus!
                        Beatae sit assumenda asperiores iure at maxime atque repellendus maiores quia sapiente.</p>
                    </div>
                </mdb-col>
            </mdb-row>
            <hr>
            <mdb-row class="d-flex justify-content-center wow fadeIn">
                <mdb-col sm="6">
                    <h4 class="my-4 h4">More</h4>
                </mdb-col>
            </mdb-row>
            <mdb-row>
                <mdb-col sm="4">
                    <img src="../assets/img.jpg" class="img-fluid" alt="">
                </mdb-col>
                 <mdb-col sm="4">
                    <img src="../assets/img.jpg" class="img-fluid" alt="">
                </mdb-col>
                 <mdb-col sm="4">
                    <img src="../assets/img.jpg" class="img-fluid" alt="">
                </mdb-col>
            </mdb-row>
        </mdb-container>
    </div>
</template>
<script>
import axios from 'axios'
import {mdbContainer, mdbRow, mdbCol} from 'mdbvue'
export default {
    name: 'postDetail',
    components: {
        mdbContainer, mdbRow, mdbCol
    }
}
</script>