<template>
    <div>
        <h3 class="text-center">Create Patient</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addPatient">
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
                        Create
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
    methods: {
        addProduct() {
            this.axios
                .post("/api/patients", this.patient)
                .then(() => this.$router.push({ name: "patients:list" }))
                .catch((err) => console.log(err))
                .finally(() => (this.loading = false));
        },
    },
};
</script>
