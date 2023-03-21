import {ref} from 'vue';
import {defineStore} from 'pinia';
import type { UnidadMedida } from '@/interfaces/UnidadMedida';

export const useUnidadesMedidaStore = defineStore('UnidadesMedida', ()=>{
    const unidadesMedida= ref<UnidadMedida[]>([]);
    return{
        //State
        unidadesMedida,

        //Getter

        //Actions
    setUnidadesMedida(newUnidadesMedida:UnidadMedida[]){
        unidadesMedida.value= newUnidadesMedida;
    }
    }
});