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
    </div>
</template>
<script>
export default {
    data(){
        return {
            construction_farm:["Forestry&Farm","Equipments","Garden Supplies","yard","Heavy Equipment","others","Tractors"]
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
