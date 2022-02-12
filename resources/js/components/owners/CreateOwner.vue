<template>
    <div>
        <h3 class="text-center">Create Owner</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addOwner">
                    <div class="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="owner.name"
                        />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="owner.email"
                        />
                    </div>
                    <div class="form-group">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="owner.phone_number"
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
            owner: {},
        };
    },
    methods: {
        addOwner() {
            this.axios
                .post("/api/owners", this.owner)
                .then(() => this.$router.push({ name: "owners:list" }))
                .catch((err) => console.log(err))
                .finally(() => (this.loading = false));
        },
    },
};
</script>
