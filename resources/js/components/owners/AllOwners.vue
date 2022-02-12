<template>
    <div>
        <h2 class="text-center">Owner List</h2>

        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="owner in owners" :key="owner.id">
                    <td>{{ owner.id }}</td>
                    <td>{{ owner.name }}</td>
                    <td>{{ owner.email }}</td>
                    <td>{{ owner.phone_number }}</td>
                    <td>
                        <div class="btn-group" role="group">
                            <router-link
                                :to="{
                                    name: 'owners:edit',
                                    params: { id: owner.id },
                                }"
                                class="btn btn-success"
                                >Edit</router-link
                            >
                            <button
                                class="btn btn-danger"
                                @click="deleteOwner(owner.id)"
                            >
                                Delete
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="px-4 py-2 bg-blue-500 hover:bg-blue-600">
            <router-link :to="{ name: 'owners:create' }" class="text-white">
                Add Owner</router-link
            >
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            owners: [],
        };
    },
    created() {
        this.axios.get("/api/owners/").then((response) => {
            this.owners = response.data;
        });
    },
    methods: {
        deleteOwner(id) {
            this.axios.delete(`/api/owners/${id}`).then(() => {
                let i = this.owners.map((data) => data.id).indexOf(id);
                this.owners.splice(i, 1);
            });
        },
    },
};
</script>
