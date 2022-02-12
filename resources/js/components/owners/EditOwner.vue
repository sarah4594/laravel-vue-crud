<template>
    <div>
        <h3 class="text-center">Edit Owner</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateOwner">
                    <div class="form-group">
                        <label>First Name</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="owner.first_name"
                        />
                    </div>
                    <div class="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="owner.last_name"
                        />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input
                            type="email"
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
        updateOwner() {
            this.axios
                .patch(`/api/owners/${this.$route.params.id}`, this.owner)
                .then((res) => {
                    this.$router.push({ name: "owners:list" });
                });
        },
    },
};
</script>
