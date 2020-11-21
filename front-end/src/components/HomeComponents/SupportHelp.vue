<template>
  <v-container fluid class="guest d-flex secondarybg">
    <div class=""></div>
    <v-row class="align-center">
      <v-container class="my-5 col-md-12">
        <div class="">
          <v-layout row wrap>
            <v-row class="text-center" justify="center">
              <div v-for="(info, index) in infosupport" :key="index">
                <v-flex
                  color="primary "
                  class="ma-5 "
                  style="width:300px"
                  shaped
                >
                  <v-card class="pa-3">
                    <v-icon size="100">{{ info.logo }}</v-icon>
                    <h3>{{ info.title }}</h3>
                    <p class="text-left grey--text">
                      {{ info.info }}
                    </p>
                    <v-btn x-large outlined color="warning"> Get now </v-btn>
                  </v-card>
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
      infosupport: [
        {
          title: "By Phone",
          logo: "mdi-account",
          info:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae quis corporis eos eius dolores doloremque quae nam quam reprehenderit. Sunt officiis eos in, animi excepturi nulla deserunt totam qui."
        },
        {
          title: "Start a new case",
          logo: "mdi-briefcase-variant",
          info:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae quis corporis eos eius dolores doloremque quae nam quam reprehenderit. Sunt officiis eos in, animi excepturi nulla deserunt totam qui."
        },
        {
          title: "Live Chat",
          logo: "mdi-chat-processing-outline",
          info:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae quis corporis eos eius dolores doloremque quae nam quam reprehenderit. Sunt officiis eos in, animi excepturi nulla deserunt totam qui."
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
