<template>
  <v-container fluid class="guest d-flex secondarybg">
    <div class="guest__background"></div>
    <v-row class="align-center">
      <v-container class="my-5 col-md-8">
        <div class="pa-2 mt-3">
          <v-layout row wrap>
            <v-row class="text-center" justify="center">
              <v-flex xs12 md12 prominent>
                <div class="green--text text-center">
                  <v-icon>mdi-user</v-icon>
                  <h2>Members:</h2>
                </div>
              </v-flex>

              <div v-for="(user, index) in members" :key="index">
                <v-flex color="primary " class="infomemb ma-5" shaped>
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
                    <v-btn x-small color="pirmary" class="grey--text">
                      contact
                    </v-btn>
                    <v-spacer></v-spacer>

                    <div class="socinfo">
                      <v-icon class="icons">mdi-facebook</v-icon>
                      <v-icon class="icons">mdi-whatsapp</v-icon>
                      <v-icon class="icons">mdi-twitter</v-icon>
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
// import WaveSvg from "@/components/svg/WaveSvg";
// import GuestSvg from "@/components/svg/GuestSvg";

export default {
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
          logo:
            "https://scontent.fcmn1-1.fna.fbcdn.net/v/t1.0-1/s200x200/124578344_1639598462877599_7328331849061986962_n.jpg?_nc_cat=104&ccb=2&_nc_sid=7206a8&_nc_eui2=AeFm2KxCHdAunU2hOdD5xC5vEBUaltdsyBQQFRqW12zIFHw426glJBdEfkFm4OkdIuNvFe3wn1fOiJ0Vd3Jir1ov&_nc_ohc=Z_VP8OTg9wMAX8XlXXN&_nc_ht=scontent.fcmn1-1.fna&tp=7&oh=c0cfaa6b16097812e5029d13303b86d2&oe=5FE04B2A",
          dev: "vue js  seo "
        },
        {
          username: "abdo oumousa",
          logo:
            "https://scontent.fcmn1-1.fna.fbcdn.net/v/t1.0-9/29684185_383022288834203_3147485681066627222_n.jpg?_nc_cat=100&ccb=2&_nc_sid=174925&_nc_eui2=AeHZp8QkkTJgjOsdofpGLOTGLncDjkJnKt0udwOOQmcq3XK64r6J2RjWlCRRKfdSdeZFZTStaFuSbZvBB39pBSLb&_nc_ohc=wk7J-jecADUAX9EA0fi&_nc_ht=scontent.fcmn1-1.fna&oh=62ae5d01b956b1ce91853fa4a0487fbd&oe=5FDEFF07",
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
