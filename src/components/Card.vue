<template>
  <v-card
      class="mx-auto rounded-lg"
      hover
      max-width="300"
  >
    <v-card
        elevation="0"
        :to="{
                name: 'FilmsDetail',
                params: { id: list.id },
              }"
    >
      <v-img
          class="white--text align-end"
          height="400px"
          :src="this.URL+this.list.poster_path"
      >
        <v-progress-circular
            class="px-3 mb-2 ml-2"
            :value="100"
            size="50"
            color="white"
        >{{ list.vote_average }}
        </v-progress-circular>
      </v-img>
      <v-card-title>{{ list.title }}</v-card-title>
      <v-card-text>
        <div>{{ list.release_date }}</div>
      </v-card-text>
    </v-card>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-chip-group
          active-class="red accent-4 white--text"
          column
      >
        <v-chip>
          <v-icon
        >mdi-heart
        </v-icon>
        </v-chip>
      </v-chip-group>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ['list','search'],
  data: () => ({
    URL: "https://www.themoviedb.org/t/p/w440_and_h660_face",
  }),
  methods: {}
}
</script>
