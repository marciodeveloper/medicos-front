<template>
    <div>
        <h1>Lista de Médicos</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Especialidade</th>
                    <th>CRM</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="medico in medicos" :key="medico.id">
                    <td>{{ medico.nome }}</td>
                    <td>{{ medico.especialidade }}</td>
                    <td>{{ medico.crm }}</td>
                    <td>
                        <router-link :to="'/medicos/' + medico.id + '/edit'">Editar</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import axios from 'axios';

export default {
    computed: {
        ...mapState(['medicos']),
    },
    mounted() {
        this.carregarMedicos();
    },
    methods: {
        ...mapActions(['carregarMedicos']),
        carregarMedicos() {
            axios.get('/api/medicos').then(response => {
                this.medicos = response.data;
            });
        },
    }
};
</script>
