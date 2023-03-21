<script setup lang="ts">
import useUnidadesMedida from '@/composables/useUnidadesMedida';
import type { UnidadMedida } from '@/interfaces/UnidadMedida';
import { toRef } from 'vue';
const { unidadesMedida } = useUnidadesMedida();
interface Props {
  lista: UnidadMedida[]
}
const props = defineProps<Props>();
const items = toRef(props, 'lista');

</script>
<template>
  <v-select item-title="Nombre" item-value="Id" :items="items" label="Unidad de s" />
</template>