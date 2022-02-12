<template>
    <div>
        <h3 class="text-center">Edit Patient</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updatePatient">
                    <div class="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="patient.name"
                        />
                    </div>
                    <div class="form-group">
                        <label>Species</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="patient.species"
                        />
                    </div>
                    <div class="form-group">
                        <label>Owner</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="patient.owner"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Update
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            patient: {},
        };
    },
    created() {
        this.axios.get(`/api/patients/${this.$route.params.id}`).then((res) => {
            this.patient = res.data;
        });
    },
    methods: {
        updatePatient() {
            this.axios
                .patch(`/api/patients/${this.$route.params.id}`, this.patient)
                .then((res) => {
                    this.$router.push({ name: "patients:list" });
                });
        },
    },
};
</script>
