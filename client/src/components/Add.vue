<template>
    <div>
        <community v-if="$route.params.addCategory == 'Community'"></community>
        <construction-farm v-if="$route.params.addCategory == 'Construction&FarmEquipment'"></construction-farm>
        <discussion-forum v-if="$route.params.addCategory == 'discussionForum'"></discussion-forum>
        <employment v-if="$route.params.addCategory == 'Employment'"></employment>
        <marchandise v-if="$route.params.addCategory == 'marchandise'"></marchandise>
        <real-estate v-if="$route.params.addCategory == 'RealEstate'"></real-estate>
        <rentals v-if="$route.params.addCategory == 'rentals'"></rentals>
        <services v-if="$route.params.addCategory == 'services'"></services>
        <vehicles v-if="$route.params.addCategory == 'Vehicles'"></vehicles>

    </div>
</template>
<script>
import Community from './add/Community'
import ConstructionFarm from './add/ConstructionFarm'
import DiscussionForum from './add/DiscussionForum'
import Employment from './add/Employment'
import Marchandise from './add/Marchandise'
import RealEstate from './add/RealEstate'
import Rentals from './add/Rentals'
import Services from './add/Services'
import Vehicles from './add/Vehicles'

export default {
    components: {
      Community,ConstructionFarm, DiscussionForum, Employment, Marchandise, RealEstate, Rentals, Services, Vehicles
    }
}
</script>
