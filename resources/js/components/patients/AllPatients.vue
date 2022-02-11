<template>
    <div>
        <h2 class="text-center">Patient List</h2>

        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Species</th>
                    <th>Owner</th>
                    <!-- <th>Actions</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="patient in patients" :key="patient.id">
                    <td>{{ patient.id }}</td>
                    <td>{{ patient.name }}</td>
                    <td>{{ patient.detail }}</td>
                    <td>
                        <div class="btn-group" role="group">
                            <router-link
                                :to="{
                                    name: 'patients:edit',
                                    params: { id: patient.id },
                                }"
                                class="btn btn-success"
                                >Edit</router-link
                            >
                            <button
                                class="btn btn-danger"
                                @click="deletePatient(patient.id)"
                            >
                                Delete
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            patients: [],
        };
    },
    created() {
        this.axios.get("/api/patients/").then((response) => {
            this.patients = response.data;
        });
    },
    methods: {
        deletePatient(id) {
            this.axios.delete(`/api/patients/${id}`).then(() => {
                let i = this.patients.map((data) => data.id).indexOf(id);
                this.patients.splice(i, 1);
            });
        },
    },
};
</script>
