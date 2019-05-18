<template>
  <div>
    <!-- Marchendise -->
    <section v-if="$route.params.addCategory == 'marchandise'">
      <div class="container">
        <div class="row">
        <div class="col-6">
          <div class="form-group">
            <input type="text" placeholder="Title" class="form-control">
          </div>
          <div class="form-group">
            <textarea class="form-control rounded-0" placeholder="Description" rows="3"></textarea>
          </div>
          <div class="form-group">
            <input type="text" placeholder="State" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Email" class="form-control">
          </div>
          <div class="row">
            <div class="col-8">
              <div class="form-group">
                <input type="number" placeholder="Price" style="width: 100%" class="form-control">
              </div>
            </div>
            <div class="col-4">
              <select class="browser-default custom-select">
                <option selected>Birr</option>
                <option value="1">$</option>
                <option value="2">‎€</option>
                <option value="3">£</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <select class="browser-default custom-select">
              <option v-for="(item, index) in marchandise" :key="index">{{item}}</option>
            </select>
          </div>
          <div class="form-group">
            <input type="text" placeholder="City" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Phone" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Name" class="form-control">
          </div>
          <div class="img-list border"></div>
        </div>
      </div>
      <button type="button" style="width: 50%" class="btn btn-outline-primary btn-sm waves-effect">Post</button>
      </div>
    </section>



    <!-- services -->
    <section v-if="$route.params.addCategory == 'services'">
      <div class="container">
        <div class="row">
        <div class="col-6">
          <div class="form-group">
            <input type="text" placeholder="Title" class="form-control">
          </div>
          <div class="form-group">
            <textarea class="form-control rounded-0" placeholder="Description" rows="3"></textarea>
          </div>
          <div class="form-group">
            <input type="text" placeholder="State" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Email" class="form-control">
          </div>
          <div class="row">
            <div class="col-8">
              <div class="form-group">
                <input type="number" placeholder="Price" style="width: 100%" class="form-control">
              </div>
            </div>
            <div class="col-4">
              <select class="browser-default custom-select">
                <option selected>Birr</option>
                <option value="1">$</option>
                <option value="2">‎€</option>
                <option value="3">£</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <select class="browser-default custom-select">
              <option v-for="(item, index) in services" :key="index">{{item}}</option>
            </select>
          </div>
          <div class="form-group">
            <input type="text" placeholder="City" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Phone" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Name" class="form-control">
          </div>
          <div class="img-list border"></div>
        </div>
      </div>
      <button type="button" style="width: 50%" class="btn btn-outline-primary btn-sm waves-effect">Post</button>
      </div>
    </section>



    <!-- vehicles -->
    <section v-if="$route.params.addCategory == 'Vehicles'">
      <div class="container">
        <div class="row">
        <div class="col-6">
          <div class="form-group">
            <input type="text" placeholder="Title" class="form-control">
          </div>
          <div class="form-group">
            <textarea class="form-control rounded-0" placeholder="Description" rows="3"></textarea>
          </div>
          <div class="form-group">
            <input type="text" placeholder="State" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Email" class="form-control">
          </div>
          <div class="row">
            <div class="col-8">
              <div class="form-group">
                <input type="number" placeholder="Price" style="width: 100%" class="form-control">
              </div>
            </div>
            <div class="col-4">
              <select class="browser-default custom-select">
                <option selected>Birr</option>
                <option value="1">$</option>
                <option value="2">‎€</option>
                <option value="3">£</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <input type="text" placeholder="Make" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Model" class="form-control">
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <select class="browser-default custom-select">
              <option v-for="(item, index) in vehicles" :key="index">{{item}}</option>
            </select>
          </div>
          <div class="form-group">
            <input type="text" placeholder="City" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Phone" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Name" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="VIN" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Year" class="form-control">
          </div>
          <div class="img-list border"></div>
        </div>
      </div>
      <button type="button" style="width: 50%;margin-top: 30px" class="btn btn-outline-primary btn-sm waves-effect">Post</button>
      </div>
    </section>


    <!-- Construction/ Farm Equipment -->
    <section v-if="$route.params.addCategory == 'Construction&FarmEquipment'">
      <div class="container">
        <div class="row">
        <div class="col-6">
          <div class="form-group">
            <input type="text" placeholder="Title" class="form-control">
          </div>
          <div class="form-group">
            <textarea class="form-control rounded-0" placeholder="Description" rows="3"></textarea>
          </div>
          <div class="form-group">
            <input type="text" placeholder="State" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Email" class="form-control">
          </div>
          <div class="row">
            <div class="col-8">
              <div class="form-group">
                <input type="number" placeholder="Price" style="width: 100%" class="form-control">
              </div>
            </div>
            <div class="col-4">
              <select class="browser-default custom-select">
                <option selected>Birr</option>
                <option value="1">$</option>
                <option value="2">‎€</option>
                <option value="3">£</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <input type="text" placeholder="Brand" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="VIN" class="form-control">
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <select class="browser-default custom-select">
              <option v-for="(item, index) in construction_farm" :key="index">{{item}}</option>
            </select>
          </div>
          <div class="form-group">
            <input type="text" placeholder="City" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Phone" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Name" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Year" class="form-control">
          </div>
          <div class="img-list border"></div>
        </div>
      </div>
      <button type="button" style="width: 50%;margin-top: 30px" class="btn btn-outline-primary btn-sm waves-effect">Post</button>
      </div>
    </section>



    <!-- disscusion forum -->
    <section v-if="$route.params.addCategory == 'discussionForum'">
      <div class="container">
        <div class="row">
        <div class="col-6">
          <div class="form-group">
            <input type="text" placeholder="Title" class="form-control">
          </div>
          <div class="form-group">
            <textarea class="form-control rounded-0" placeholder="Description" rows="3"></textarea>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <select class="browser-default custom-select">
              <option v-for="(item, index) in discussionForum" :key="index">{{item}}</option>
            </select>
          </div>
          <div class="img-list border"></div>
        </div>
      </div>
      <button type="button" style="width: 50%;margin-top: 30px" class="btn btn-outline-primary btn-sm waves-effect">Post</button>
      </div>
    </section>



    <!-- Real state -->
    <section v-if="$route.params.addCategory == 'RealEstate'">
      <div class="container">
        <div class="row">
        <div class="col-6">
          <div class="form-group">
            <input type="text" placeholder="Title" class="form-control">
          </div>
          <div class="form-group">
            <textarea class="form-control rounded-0" placeholder="Description" rows="3"></textarea>
          </div>
          <div class="form-group">
            <input type="text" placeholder="State" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Email" class="form-control">
          </div>
          <div class="row">
            <div class="col-8">
              <div class="form-group">
                <input type="number" placeholder="Price" style="width: 100%" class="form-control">
              </div>
            </div>
            <div class="col-4">
              <select class="browser-default custom-select">
                <option selected>Birr</option>
                <option value="1">$</option>
                <option value="2">‎€</option>
                <option value="3">£</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <input type="number" style="width: 100%" placeholder="Bedrooms" class="form-control">
          </div>
          <div class="form-group">
            <input type="number" style="width: 100%" placeholder="Bathrooms" class="form-control">
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <select class="browser-default custom-select">
              <option v-for="(item, index) in realstate" :key="index">{{item}}</option>
            </select>
          </div>
          <div class="form-group">
            <input type="text" placeholder="City" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Phone" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Name" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Square footage" class="form-control">
          </div>
          <div class="img-list border"></div>
        </div>
      </div>
      <button type="button" style="width: 50%;margin-top: 30px" class="btn btn-outline-primary btn-sm waves-effect">Post</button>
      </div>
    </section>



    <!-- Employment -->
    <section v-if="$route.params.addCategory == 'Employment'">
      <div class="container">
        <div class="row">
        <div class="col-6">
          <div class="form-group">
            <input type="text" placeholder="Title" class="form-control">
          </div>
          <div class="form-group">
            <textarea class="form-control rounded-0" placeholder="Description" rows="3"></textarea>
          </div>
          <div class="form-group">
            <input type="text" placeholder="State" class="form-control">
          </div>
          <div class="row">
            <div class="col-8">
              <div class="form-group">
                <input type="text" placeholder="Salary" style="width: 100%" class="form-control">
              </div>
            </div>
            <div class="col-4">
              <select class="browser-default custom-select">
                <option selected>-</option>
                <option >Birr</option>
                <option value="1">$</option>
                <option value="2">‎€</option>
                <option value="3">£</option>
              </select>
            </div>
          </div>
          <select class="browser-default custom-select">
            <option selected>-</option>
            <option >Full time</option>
            <option value="1">Part time</option>
            <option value="2">Contract</option>
            <option value="3">Employee's choice</option>
          </select>
        </div>
        <div class="col-6">
          <div class="form-group">
            <select class="browser-default custom-select">
              <option v-for="(item, index) in employment" :key="index">{{item}}</option>
            </select>
          </div>
          <div class="form-group">
            <input type="text" placeholder="City" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Phone" class="form-control">
          </div>
          <div class="img-list border"></div>
        </div>
      </div>
      <button type="button" style="width: 50%;margin-top: 30px" class="btn btn-outline-primary btn-sm waves-effect">Post</button>
      </div>
    </section>

  </div>
</template>
<script>
export default {
  data() {
    return {
      add: '',
     marchandise: ["Appliances","Clothing","Collecting&art","Computers","Electronices","Furniture","musical instruments","Helth & beauty","Sporting Goods","Garge/yard sales","Free","other"],
      vehicles:["Auto parts","Accessories","Boats","Cars","Motorscycles","RVs","Trucks","Vans","other"],
      rentals:["Apartements","Homes","Rooms for rent","Short term rentals","Vacation rentals"],
      services:["Automotive","computer Repair","creative","Events","Financial","Home Service","Moving & Labor","Legal","Lessons & Training ","Real Estate Agents","Skilled Trades","Other Businesses"],
      construction_farm:["Forestry&Farm","Equipments","Garden Supplies","yard","Heavy Equipment","others","Tractors"],
      community: ["Activities","Artists","Childcare","Classes","General","Groups","Local News","Lost+Found","Missed connection","Musicians","Pets","Politics","Rants & raves","Rideshare","Volunteers"],
      discussionForum:["Android","Apple","Arts","Atheist","Autos","Beauty","Bikes","Celebs","Comp","Cosmos","Diet","Divorce","Dying","Eco","Feedbk","Film","Fixit","Food","Frugal","Gaming","Garden","Haiku","Help","History","Housing","Jobs","Jokes"
      ,"Legal","Linux","Manners","Marriage","Money","Music","Open","Outdoor","Parent","Pets","Philos","Photo","Politics","Psych","Recover","Eligion","Rofo","Science","Spirit","Sports","Super","Tax","Travel","Tv","Vegan","Words","Writing"],
      employment:[
        "Accounting",
        "Adminstrative & office jobs",
        "Advertising & Marketing jobs ",
        "Arts,media & Designen jobs",
        "Biothecnology & pharmaceuticals",
        "Community,social Service & nonprofit",
        "Construction,mining & Trades",
        " Educations,Training & library",
        "Employment placement Agencies",
        "Enginneering",
        "Finanicial & Banking",
        "General Labor",
        "Goverment",
        "Hotels&hospitality",
        "Human Resources(HR)",
        "information Technology(IT) ",
        "installation,maintenance & Repair",
        "insurance",
        "internet & ecommerce",
        "Law enforcement & security",
        "Legal & paralegal",
        "Medical & helthcare",
        "Others",
        "Personal Care,spas & fitness",
        "Professional Services",
        "Real Estate ",
        "Resturant & Beverage",
        "Retail & Wholesale",
        "sales",
        "Science",
        "Sports & recreation ",
        "Telecommunications",
        "Television ,film&Entertainment",
        "Trensportation"
      ],
      realstate: [
        "Commercial Real Estate",
        "Condos for Sale",
        "Duplexes",
        "Homes for Sale",
        "Land for Sale",
        "Others"
      ]
    }
  }
}
</script>
<style scoped>
  .img-list{
    width: 100%;
    height: 25%;
    border-radius: 2px;
  }
</style>
