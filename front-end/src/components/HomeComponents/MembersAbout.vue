<template>
  <v-container fluid class="guest d-flex secondarybg">
    <div class="guest__background">
      <WaveSvg :fillColor="$theme.currentTheme.secondarybg" />
    </div>
    <v-row class="align-center">
      <v-container class="my-5 col-md-12">
        <div class="">
          <v-layout row wrap>
            <v-row class="text-center" justify="center">
              <v-flex xs12 md12 prominent>
                <div class="orange--text text-center">
                  <h2><v-icon>mdi-account</v-icon> Members:</h2>
                </div>
              </v-flex>

              <div v-for="(user, index) in members" :key="index">
                <v-flex color="primary " class="infomemb ma-5 col-md-10" shaped>
                  <div rounded class="pa-1  col-md-12 pa-5">
                    <span
                      ><v-img
                        class="rounded-circle d-inline-block imagelogo mt-3"
                        height="100"
                        width="100"
                        :src="user.logo"
                        :v-bind:src="user.logo"
                      ></v-img
                    ></span>
                    <v-spacer></v-spacer>
                    <span class="text-center" size="18">{{
                      user.username
                    }}</span>
                    <p style="font-size:11px" class="grey--text">
                      {{ user.dev }}
                    </p>
                    <v-btn x-small color="pirmary" class="orange--text">
                      contact
                    </v-btn>
                    <v-spacer></v-spacer>

                    <div class="socinfo">
                      <v-icon class="icons blue--text">mdi-facebook</v-icon>
                      <v-icon class="icons green--text">mdi-whatsapp</v-icon>
                      <v-icon class="icons light-green--text"
                        >mdi-twitter</v-icon
                      >
                    </div>
                  </div>
                </v-flex>
              </div>
            </v-row>
          </v-layout>
        </div>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import WaveSvg from "@/components/svg/WaveSvg";
// import GuestSvg from "@/components/svg/GuestSvg";

export default {
  computed: {
    WaveSvg
  },
  data() {
    return {
      members: [
        {
          username: "youssef elhaimer",
          logo: "https://profile.youssefelhaimer.online/libs/uplaod/prof.png",
          dev: "vue js  seo "
        },
        {
          username: "abdelhadi sabani",
          logo: "https://avatars3.githubusercontent.com/u/33328081?s=120&v=4",
          dev: "vue js  seo "
        },
        {
          username: "abdo oumousa",
          logo: "https://avatars1.githubusercontent.com/u/59849890?s=460&v=4",
          dev: "vue js  seo "
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.guest {
  min-height: 80vh;
  position: relative;
  padding: 100px 0 60px 0;
  z-index: 1;
  .image {
    svg {
      width: 500px;
    }
  }
  &__background {
    width: 100vw;
    z-index: 2;
    position: absolute;
    bottom: -10vw;
    left: 0;
  }
}
.imagelogo {
  border: 1px solid gray;
  box-shadow: 5px 5px 8px black;
}
.infomemb {
  box-shadow: 3px 4px 7px black;
  border-top-left-radius: 25px;
}
.socinfo .icons {
  margin: 10px;
}
</style>
