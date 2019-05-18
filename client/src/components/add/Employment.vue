<template>
    <div>
    <section>
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
    data(){
        return {
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
