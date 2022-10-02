<template>
  <v-container>
    <v-card
        min-height="500"
        md="3"
        sm="2"
    >
      <v-row class="mt-3">
        <v-col
            cols="4"
            md="3"
            sm="2"
        >
          <v-img
              class="white--text align-end ml-2"
              height="500px"
              width="400px"
              :src="URL+detail.poster_path"
          >
          </v-img>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title class="text-xl-h4">
              {{ detail.title }}
            </v-card-title>
            <v-card-text class="text-sm-body-2">
              {{ detail.tagline }}
            </v-card-text>
            <v-card-text>
              <div>{{ detail.release_date }}</div>
            </v-card-text>
            <v-card-text class="black--text text-lg-h6">
              {{ detail.overview }}
            </v-card-text>
          </v-card>
          <v-row class="mt-2 mb-2">
            <v-col
                cols="4"
                md="3"
                sm="3"
                class="my-auto"
            >
              <strong class="pt-3">Original Language:</strong>
              {{ detail.original_language }}
            </v-col>
            <v-col
                cols="4"
                md="4"
                sm="4"
            >
              <strong>
                Vote Average:
              </strong>
              <v-progress-circular
                  class="px-3 "
                  :value="100"
                  size="60"
                  color="red"
              >{{ detail.vote_average }}
              </v-progress-circular>
            </v-col>
            <v-col>
              <strong>
                Vote Count:
              </strong>
              <v-progress-circular
                  class="px-3 "
                  :value="100"
                  size="60"
                  color="red"
              >{{ detail.vote_count }}
              </v-progress-circular>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="mt-4">
            <v-col
                cols="4"
                md="3"
                sm="3"
                class="my-auto"
                v-if="detail.homepage"
            >
              <strong class="pt-3">Home Page:</strong>
              <v-btn
                  :href="detail.homepage"
                  target="_blank"
                  icon
                  color="black"
              >Link
              </v-btn>
            </v-col>
            <v-col
                cols="4"
                md="4"
                sm="4"
            >
              <strong>
                Runtime:
              </strong>
              <v-progress-circular
                  class="px-3"
                  :value="100"
                  size="60"
                  color="red"
              >{{ detail.runtime }}
              </v-progress-circular>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import Card from "@/components/Card";
import {mapState} from "vuex";
import axios from "axios";
export default {
  components: {
    Card
  },
  data: () => ({
    URL: "https://www.themoviedb.org/t/p/w440_and_h660_face/",
    detail: [],
    result: [],
    id: '',
    adres: '',
    api_key: "c46fe44e506fa85f374fae117ed26e81",
  }),
  computed: {
    ...mapState({
      PopulerFilms: 'PopulerFilms',
    }),
  },
  methods: {
    getDetail() {
      this.adres = 'https://api.themoviedb.org/3/movie/' + this.id + '?api_key=' + this.api_key;
      axios.get(this.adres).then(res => {
        this.detail = res.data;
      })
    },
  },
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    this.getDetail();
  },
}
</script>