<template>
    <div>
        <slider></slider>
        <about-we></about-we>
        <customer></customer>
    </div>
</template>

<script>
import Slider from './Slider.vue'
import Customer from './Customer.vue'
import AboutWe from './AboutWe.vue'
export default {
  name: 'Home',
  components: {
    Slider,
    AboutWe,
    Customer
  }
}
</script>
