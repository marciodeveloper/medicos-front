import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
        medicos: [],
        medicoSelecionado: null,
    },
    mutations: {
        setMedicos(state, medicos) {
            state.medicos = medicos;
        },
        setMedicoSelecionado(state, medico) {
            state.medicoSelecionado = medico;
        },
    },
    actions: {
        carregarMedicos(context) {
            // Carregar a lista de médicos da API
            this.axios.get('/api/medicos').then(response => {
                context.commit('setMedicos', response.data);
            });
        },
        selecionarMedico(context, medico) {
            context.commit('setMedicoSelecionado', medico);
        },
    }
});
