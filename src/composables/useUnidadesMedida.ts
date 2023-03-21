import { useQuery } from "@tanstack/vue-query";
import foodsApi from "@/api/foods-api";
import type { UnidadMedida } from "@/interfaces/UnidadMedida";
import { useUnidadesMedidaStore } from "@/stores/unidadesMedidaStore";
import { storeToRefs } from "pinia";
import { watch } from "vue";
import type { IRespuestaService } from "@/interfaces/IRespuestaHTTP";

const getUnidadesMedida = async (): Promise<UnidadMedida[]> => {
    const { data } = await foodsApi.get<IRespuestaService>(`/unidades-medida`);
    console.log(data);
    
    return data.data;
}
const useUnidadesMedida = () => {

    const store = useUnidadesMedidaStore();
    const { unidadesMedida } = storeToRefs(store);

    const { isLoading, data } = useQuery(
        ['getClientes', 1],
        () => getUnidadesMedida()
    );

    watch(data, unidades => {
        if (unidades) {
            store.setUnidadesMedida(unidades);
        }
    });


    return {
        isLoading,
        unidadesMedida
    }
}
export default useUnidadesMedida;