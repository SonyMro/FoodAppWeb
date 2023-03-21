<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const open = ref([]);
const enrutador = useRouter();
const rutas = ref(router.getRoutes().filter(r => {
  const partes = r.path.split("/");
  return partes.length === 2 && partes[1].indexOf('*') === -1;
}));


function irARuta(path:string) {
  enrutador.push(path);
}

</script>
<template>
  <v-list v-model:opened="open">
    <v-list-group v-for="r in rutas" :value="r.name" >
      <template v-slot:activator="{ props }">
        <v-list-item
          v-bind="props"
          :title="r.name"
          @click="irARuta( r.path)"
        ></v-list-item>
      </template>

      <v-list-group v-for="s in r.children" :value="s.name">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            :title="s.name"
            @click="irARuta( s.path)"
          ></v-list-item>
        </template>
      </v-list-group>
    </v-list-group>
  </v-list>
</template>


<style></style>
