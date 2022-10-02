<template>
  <div class="">
    <v-container>
      <v-row>
        <v-col
            class="mt-5"
            v-for="list in PopulerFilms"
            :key="list.id"
            cols="12"
            md="3"
            sm="6"
        >
          <Card  :list="list"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import {mapState} from 'vuex';
import Card from "@/components/Card";
import axios from "axios";
export default {
  name: 'Home',
  components: {
    Card
  },
  computed: {
    ...mapState({
      PopulerFilms: 'PopulerFilms',

    }),
  },
  data: () => ({
    api_key: "c46fe44e506fa85f374fae117ed26e81",

  }),
  methods: {

  },
  mounted() {
    this.$store.dispatch('getPopulerFilms');
  },
}
</script>
