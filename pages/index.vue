<template>
  <div>
    <v-list>
      <v-list-item align="start" v-for="(item, i) in getList" :key="i">
        <v-list-item-title>{{ item }}</v-list-item-title>
        <v-btn color="primary" @click="remove()" depressed>Delete</v-btn>
      </v-list-item>
    </v-list>

    <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog transition="dialog-bottom-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="green" v-bind="attrs" v-on="on">Add</v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark>Add new item</v-toolbar>
              <v-card-text>
                <div>
                  <v-text-field
                    v-model="newName"
                    color="success"
                  ></v-text-field>
                </div>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  color="green"
                  text
                  @click="(dialog.value = false), saveItem()"
                  >Save</v-btn
                >
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>

      <v-col cols="auto">
        <v-dialog transition="dialog-top-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" v-bind="attrs" v-on="on">Show Items</v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark>Items Count</v-toolbar>
              <v-card-text>
                <div class="text-h2 pa-12">{{ getList.length }}</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      newName: "",
    };
  },
  computed: {
    getList() {
      return this.$store.state.list;
    },
  },
  methods: {
    saveItem() {
      this.$store.commit("addNewItem", this.newName);
      this.newName = "";
    },
    remove(item: string) {
      this.$store.commit("removeItem", item);
    },
  },
});
</script>
<style lang="scss" scoped>
.v-list-tile {
  display: block;
}
</style>