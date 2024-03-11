<template>
    <div>
        <h1>Editar Médico</h1>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" id="nome" v-model="medico.nome" class="form-control">
            </div>
            <div class="form-group">
                <label for="especialidade">Especialidade</label>
                <input type="text" id="especialidade" v-model="medico.especialidade" class="form-control">
            </div>
            <div class="form-group">
                <label for="crm">CRM</label>
                <input type="text" id="crm" v-model="medico.crm" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Salvar</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            medico: {},
        };
    },
    methods: {
        onSubmit() {
            // Enviar os dados do formulário para a API
            this.axios.put('/api/medicos/' + this.$route.params.id, this.medico).then(response => {
                // Redirecionar para a lista de médicos
                this.$router.push('/medicos');
            });
        },
        mounted() {
            // Carregar o médico específico para edição
            this.axios.get('/api/medicos/' + this.$route.params.id).then(response => {
                this.medico = response.data;
            });
        }
    }
};
</script>
