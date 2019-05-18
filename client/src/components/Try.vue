<template id="">
  <div>
    <mdb-container>
      <mdb-row v-if="$route.params.addCategory == 'Vehicles'">
        <mdb-col sm="6">
          <mdb-input label="Title"/>
          <mdb-textarea label="Description" @input="handleInput" :rows="2"/>
          <select class="browser-default custom-select">
            <option selected>Appliances/Auto parts</option>
            <option>Boats</option>
            <option>Cars</option>
            <option>Motor cycle</option>
            <option>RVs</option>
            <option>SUVs</option>
            <option>Truks</option>
            <option>Vans</option>
            <option>Others</option>
          </select>
          <mdb-row>
            <mdb-col><mdb-input label="State" /></mdb-col>
            <mdb-col><mdb-input label="City" /></mdb-col>
          </mdb-row>
          <mdb-input label="Contact email"/>
          <mdb-input label="Contact name"/>
          <mdb-input label="Contact Phone"/>
          <mdb-input label="Make"/>
          <mdb-input label="Model"/>
          <mdb-input label="VIN"/>
          <mdb-input label="Year"/>
          <mdb-input label="price"/>
          <mdb-input label="Contact Phone"/>
        </mdb-col>
        <mdb-col sm="6">
          <img src="https://mdbootstrap.com/img/Others/documentation/img%20(75)-mini.jpg" alt="thumbnail" class="img-thumbnail"
          style="width: 200px">
          <div class="input-group">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="inputGroupFile01" @change="selectedFile"aria-describedby="inputGroupFileAddon01">
              <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            </div>
          </div>
          <mdb-input label="Price" type="number"/>
        </mdb-col>
      </mdb-row>
      <mdb-row v-if="$route.params.addCategory == 'Construction&FarmEquipment'">
        <mdb-col sm="6">
          <mdb-input label="Title" />
          <mdb-textarea label="Description" @input="handleInput" :rows="2"/>
          <select class="browser-default custom-select">
            <option >Forestry&Farm</option>
            <option >Equipments</option>
            <option >Garden Supplies</option>
            <option >yard</option>
            <option >Heavy Equipment</option>
            <option >others</option>
            <option >Tractors</option>
          </select>
          <mdb-row>
            <mdb-col><mdb-input label="State" /></mdb-col>
            <mdb-col><mdb-input label="City" /></mdb-col>
          </mdb-row>
          <mdb-input label="Contact email"/>
          <mdb-input label="Contact name"/>
          <mdb-input label="Contact Phone"/>
          <mdb-input label="Make"/>
          <mdb-input label="Model"/>
          <mdb-input label="VIN"/>
          <mdb-input label="Year"/>
          <mdb-input label="price"/>
          <mdb-input label="Contact Phone"/>
        </mdb-col>
        <mdb-col sm="6">
          <img src="https://mdbootstrap.com/img/Others/documentation/img%20(75)-mini.jpg" alt="thumbnail" class="img-thumbnail"
          style="width: 200px">
          <div class="input-group">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="inputGroupFile01" @change="selectedFile"aria-describedby="inputGroupFileAddon01">
              <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            </div>
          </div>
          <mdb-input label="Price" type="number"/>
        </mdb-col>
      </mdb-row>
      <mdb-row v-if="$route.params.addCategory == 'services'">
        <mdb-col sm="6">
          <mdb-input label="Title" />
          <mdb-textarea label="Description" @input="handleInput" :rows="2"/>
          <select class="browser-default custom-select">
                  <option>Automotive</option>
                  <option>computer Repair</option>
                  <option>creative</option>
                  <option>Events</option>
                  <option>Financial</option>
                  <option>Home Service</option>
                  <option>Moving & Labor</option>
                  <option>Legal</option>
                  <option>Lessons & Training </option>
                  <option>Real Estate Agents</option>
                  <option>Skilled Trades</option>
                  <option>Other Businesses</option>
          </select>
          <mdb-row>
            <mdb-col><mdb-input label="State" /></mdb-col>
            <mdb-col><mdb-input label="City" /></mdb-col>
          </mdb-row>
          <mdb-input label="Contact email"/>
          <mdb-input label="Contact name"/>
          <mdb-input label="Contact Phone"/>
          <mdb-input label="Contact phone"/>
        </mdb-col>
        <mdb-col sm="6">
          <img :src="img_url" alt="thumbnail" class="img-thumbnail"
          style="width: 200px">
          <div class="input-group">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="inputGroupFile01" @change="onFileSelected" aria-describedby="inputGroupFileAddon01">
              <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            </div>
          </div>
          <mdb-input label="Price" type="number"/>
        </mdb-col>
      </mdb-row>
      <mdb-row v-if="$route.params.addCategory == 'RealEstate'">
        <mdb-col sm="6">
          <mdb-input label="Title" />
          <mdb-textarea label="Description" @input="handleInput" :rows="2"/>
          <select class="browser-default custom-select">
            <option class="cata-lists">Commercial Real Estate</option>
            <option class="cata-lists">Condos for Sale</option>
            <option class="cata-lists">Duplexes</option>
            <option class="cata-lists">Homes for Sale</option>
            <option class="cata-lists">Land for Sale</option>
            <option class="cata-lists">Others</option>
          </select>
          <mdb-row>
            <mdb-col><mdb-input label="State" /></mdb-col>
            <mdb-col><mdb-input label="City" /></mdb-col>
          </mdb-row>
          <mdb-input label="Contact email"/>
          <mdb-input label="Contact name"/>
          <mdb-input label="Contact Phone"/>
          <mdb-input label="Bedrooms"/>
          <mdb-input label="bathrooms"/>
          <mdb-input label="Square"/>
          <mdb-input label="price"/>

          <mdb-input label="Contact Phone"/>
        </mdb-col>
        <mdb-col sm="6">
          <img src="https://mdbootstrap.com/img/Others/documentation/img%20(75)-mini.jpg" alt="thumbnail" class="img-thumbnail"
          style="width: 200px">
          <div class="input-group">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="inputGroupFile01" @change="selectedFile"aria-describedby="inputGroupFileAddon01">
              <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            </div>
          </div>
          <mdb-input label="Price" type="number"/>
        </mdb-col>
      </mdb-row>
      <mdb-row v-if="$route.params.addCategory == 'Employment'">
        <mdb-col sm="6">
          <mdb-input label="Title" />
          <mdb-textarea label="Description" @input="handleInput" :rows="2"/>
          <select class="browser-default custom-select">
            <option>Accounting</option>
            <option>Adminstrative & office jobs</option>
            <option>Advertising & Marketing jobs </option>
            <option>Arts,media & Designen jobs</option>
            <option>Biothecnology & pharmaceuticals</option>
            <option>Community,social Service & nonprofit</option>
            <option>Construction,mining & Trades</option>
            <option> Educations,Training & library</option>
            <option>Employment placement Agencies</option>
            <option>Enginneering</option>
            <option>Finanicial & Banking</option>
            <option>General Labor</option>
            <option>Goverment</option>
            <option>Hotels&hospitality</option>
            <option>Human Resources(HR)</option>
            <option>information Technology(IT) </option>
            <option>installation,maintenance & Repair</option>
            <option>insurance</option>
            <option>internet & ecommerce</option>
            <option>Law enforcement & security</option>
            <option>Legal & paralegal</option>
            <option>Medical & helthcare</option>
            <option>Others</option>
            <option>Personal Care,spas & fitness</option>
            <option>Professional Services</option>
            <option>Real Estate </option>
            <option>Resturant & Beverage</option>
            <option>Retail & Wholesale</option>
            <option>sales</option>
            <option>Science</option>
            <option>Sports & recreation </option>
            <option>Telecommunications</option>
            <option>Television ,film&Entertainment</option>
            <option>Trensportation</option>
          </select>
          <mdb-row>
            <mdb-col><mdb-input label="State" /></mdb-col>
            <mdb-col><mdb-input label="City" /></mdb-col>
          </mdb-row>
          <mdb-input label="Contact email"/>
          <mdb-input label="Contact name"/>
          <mdb-input label="Contact Phone"/>
          <mdb-input label="Bedrooms"/>
          <mdb-input label="bathrooms"/>
          <mdb-input label="Square"/>
          <mdb-input label="price"/>
          <mdb-input label="Contact Phone"/>
        </mdb-col>
        <mdb-col sm="6">
          <img src="https://mdbootstrap.com/img/Others/documentation/img%20(75)-mini.jpg" alt="thumbnail" class="img-thumbnail"
          style="width: 200px">
          <div class="input-group">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="inputGroupFile01" @change="selectedFile"aria-describedby="inputGroupFileAddon01">
              <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            </div>
          </div>
          <mdb-input label="Price" type="number"/>
        </mdb-col>
      </mdb-row>
      <mdb-row v-if="$route.params.addCategory == 'Jobs'">
        <mdb-col sm="6">
          <mdb-input label=" Job Title" />
          <mdb-textarea label="Description" @input="handleInput" :rows="2"/>
          <mdb-row>
            <mdb-col><mdb-input label="State" /></mdb-col>
            <mdb-col><mdb-input label="City" /></mdb-col>
          </mdb-row>
          <mdb-input label="Contact email"/>
          <mdb-input label="Contact name"/>
          <mdb-input label="Contact Phone"/>
          <mdb-input label="Confirm your Email"/>
        </mdb-col>
        <mdb-col sm="6">
          <img src="https://mdbootstrap.com/img/Others/documentation/img%20(75)-mini.jpg" alt="thumbnail" class="img-thumbnail"
          style="width: 200px">
          <div class="input-group">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="inputGroupFile01" @change="selectedFile"aria-describedby="inputGroupFileAddon01">
              <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            </div>
          </div>
          <mdb-input label="Price" type="number"/>
        </mdb-col>
      </mdb-row >
    </mdb-container>
  </div>
</template>
<script>
  import {mdbContainer,mdbRow,mdbCol,mdbInput,mdbTextarea} from 'mdbvue'
  import axios from 'axios'
  name: 'Add'
  export default {
    components: {
      mdbContainer,mdbRow,mdbCol,mdbInput,mdbTextarea
    },
    data: () => ({
     items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
     form: $route.params.addCategory,
     img_url:''
   }),
   methods:{
     onFileSelected(e){
            console.log('res')
            let file = e.target.files[0]
            let cloud_url = 'https://api.cloudinary.com/v1_1/db9ypblrt/upload'
            let cloud_upload_preset = 'ml_default'
            let formData = new FormData();
            formData.append('file',file)
            formData.append('upload_preset',cloud_upload_preset)
            let headers = {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
            axios({
                url: cloud_url,
                method: 'POST',
                headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                data: formData
            }).then(res => {
                console.log(res)
                this.img_url = res.data.secure_url
                
            }).catch(err => console.log(err))
        }
   }
  }
</script>
