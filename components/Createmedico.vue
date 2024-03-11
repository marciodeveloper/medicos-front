<template>
    <div>
        <h1>Criar Médico</h1>
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
            medico: {
                nome: '',
                especialidade: '',
                crm: '',
            },
        };
    },
    methods: {
        onSubmit() {
            // Enviar os dados do formulário para a API
            this.axios.post('/api/medicos', this.medico).then(response => {
                // Redirecionar para a lista de médicos
                this.$router.push('/medicos');
            });
        }
    }
};
</script>
