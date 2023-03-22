<script setup lang="ts">
import UnidadesMedidaSelect from '@/components/UnidadesMedidaSelect.vue';
import useUnidadesMedida from '@/composables/useUnidadesMedida';
import type Ingrediente from '@/interfaces/Ingrediente';
import { ref, computed, reactive } from 'vue';
const dialog = ref(false);
const name = ref('');
let ingrediente: Ingrediente = reactive<Ingrediente>({} as Ingrediente);
let ingredientes: Ingrediente[] = reactive<Ingrediente[]>([]);

const { unidadesMedida } = useUnidadesMedida();
const file = ref<File[]>([]);
const imageSrc = ref("");
const formTitle = computed(() => {
  return name.value ? 'Editar Ingrediente' : 'Nuevo Ingrediente';
});

const save = () => {
  console.log(ingrediente);
  dialog.value = false;
  ingredientes.push(ingrediente);

  console.log(ingredientes);
  ingrediente = {} as Ingrediente;
};
const onFileChanged = (event: any) => {
  const aux = event.target.files[0];
  if (file.value) {
    const reader = new FileReader();
    reader.readAsDataURL(aux);
    reader.onload = (e) => {
      if (e.target) {
        imageSrc.value = e.target?.result + "";
        ingrediente.Imagen = e.target?.result + "";
      }
    };
  }
};

</script>
<template>
  <div>
    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col cols="12">
          <h1 class="text-center">Lista de ingredientes</h1>
        </v-col>
        <v-col cols="12">
          <v-btn color="secondary" @click="dialog = true">
            <v-icon start icon="mdi-plus"></v-icon>
            Nuevo Ingrediente
          </v-btn>
        </v-col>

        <v-col cols="12">
          <v-card style="width: 400px; height: 200px">
    <v-row no-gutters>
      <v-col cols="6">
        <v-img src="https://via.placeholder.com/200x200" height="200"></v-img>
      </v-col>
      <v-col cols="6">
        <v-card-title class="text-center">Titulo</v-card-title>
        <v-card-text class="card-text overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus et, consectetur provident sequi eaque a saepe animi aut ducimus ullam, voluptatem quos laborum. Cum possimus commodi veritatis incidunt. Minus.</v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn icon color="primary">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon color="error">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>

        </v-col>

      </v-row>
    </v-container>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-center">
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" @submit.prevent>
            <v-text-field v-model="ingrediente.Nombre" label="Nombre"></v-text-field>
            <v-textarea v-model="ingrediente.Descripcion" label="Descripción"></v-textarea>
            <v-text-field type="number" v-model="ingrediente.Cantidad" label="Cantidad"></v-text-field>
            <!-- <v-select v-model="ingrediente.IdUnidadMedida" item-title="state" item-value="abbr" :items="unidadesMedida" label="Unidad de medida" /> -->
            <UnidadesMedidaSelect :lista="unidadesMedida" />
            <v-file-input @change="onFileChanged" prepend-icon="mdi-camera" label="Seleccionar archivo(s)"
              accept=".png, .jpg" />
            <v-img v-if="typeof ingrediente.Imagen === 'string'" :src="ingrediente.Imagen"></v-img>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Cancelar</v-btn>
          <v-btn color="blue darken-1" text @click="save">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<style>
.card-text {
  height: 75px; /* Altura máxima del texto */
}

.overflow-hidden {
  overflow: hidden; /* Ocultar el texto que se desborda */
  text-overflow: ellipsis; /* Mostrar puntos suspensivos si el texto se desborda */
}

.v-btn {
  margin: 0 5px; /* Espacio entre los botones */
}

</style>