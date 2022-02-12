<template>
    <div>
        <h3 class="text-center">Edit Owner</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateOwner">
                    <div class="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="owner.name"
                        />
                    </div>
                    <div class="form-group">
                        <label>Species</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="owner.species"
                        />
                    </div>
                    <div class="form-group">
                        <label>Owner</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="owner.owner"
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
            owner: {},
        };
    },
    created() {
        this.axios.get(`/api/owners/${this.$route.params.id}`).then((res) => {
            this.owner = res.data;
        });
    },
    methods: {
        updateProduct() {
            this.axios
                .patch(`/api/owners/${this.$route.params.id}`, this.owner)
                .then((res) => {
                    this.$router.push({ name: "owners:list" });
                });
        },
    },
};
</script>
