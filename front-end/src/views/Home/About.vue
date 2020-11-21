<template>
  <div class="home ma-0 pa-0">
    <section class="first-section2 d-flex justify-center">
      <div class="first-section2__background2">
        <WaveSvg :fillColor="$theme.currentTheme.bg" />
      </div>
      <v-row class="first-section__header">
        <v-col class="ml-10 align-self-center">
          <h1 class="first-section__title display-2 pb-2 ">
            About
          </h1>
          <h4 class=" pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum
            earum ipsum necessitatibus suscipit illum laborum dolore inventore
            blanditiis ratione! Mollitia voluptates commodi quisquam explicabo
            officiis veritatis. Numquam, at consectetur.
          </h4>
          <div>
            <v-btn
              elevation="0"
              rounded
              dark
              class="mt-4 py-6 px-12"
              color="warning"
            >
              about us
              <v-icon size="40">mdi-arrow-right-bold-circle</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col class="align-self-end">
          <SocialSvg width="550" height="400" />
        </v-col>
      </v-row>
    </section>
    <AboutMembers />
  </div>
</template>

<script>
import WaveSvg from "@/components/svg/WaveSvg";
import SocialSvg from "@/components/svg/SocialSvg";
import AboutMembers from "@/components/HomeComponents/MembersAbout";
export default {
  name: "About",
  components: {
    WaveSvg,
    SocialSvg,
    AboutMembers
  }
};
</script>
<style lang="scss" scoped>
.home {
  .first-section2 {
    min-height: 80vh;
    position: relative;
    &__background2 {
      width: 100vw;
      height: 100px;
      z-index: 5;
      position: absolute;
      bottom: -100px;
      left: 0;
    }
  }
}
</style>
