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

    </div>
</template>
<script>
export default {
    data(){
        return {
            discussionForum:["Android","Apple","Arts","Atheist","Autos","Beauty","Bikes","Celebs","Comp","Cosmos","Diet","Divorce","Dying","Eco","Feedbk","Film","Fixit","Food","Frugal","Gaming","Garden","Haiku","Help","History","Housing","Jobs","Jokes"
      ,"Legal","Linux","Manners","Marriage","Money","Music","Open","Outdoor","Parent","Pets","Philos","Photo","Politics","Psych","Recover","Eligion","Rofo","Science","Spirit","Sports","Super","Tax","Travel","Tv","Vegan","Words","Writing"]
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
