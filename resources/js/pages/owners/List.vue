<template>
    <div>
        <h2 class="text-center mb-8">Owner List</h2>

        <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            ID
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            First Name
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Last Name
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Email
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Phone Number
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="owner in owners" :key="owner.id">
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                        >
                            {{ owner.id }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                        >
                            {{ owner.first_name }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                        >
                            {{ owner.last_name }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                        >
                            {{ owner.email }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                        >
                            {{ owner.phone_number }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                        >
                            <div
                                class="btn-group flex items-center"
                                role="group"
                            >
                                <router-link
                                    :to="{
                                        name: 'owners:edit',
                                        params: { id: owner.id },
                                    }"
                                    class="px-4 py-2 bg-green-400 hover:bg-green-500 text-white rounded"
                                    >Edit</router-link
                                >
                                <button
                                    class="px-4 py-2 ml-2 bg-rose-400 hover:bg-rose-500 text-white rounded"
                                    @click="deleteOwner(owner.id)"
                                >
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <router-link
            :to="{ name: 'owners:create' }"
            class="text-white flex mt-8"
        >
            <div class="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded">
                Add Owner
            </div>
        </router-link>
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
        this.axios.get("/owners/").then((response) => {
            this.owners = response.data;
        });
    },
    methods: {
        deleteOwner(id) {
            this.axios.delete(`/owners/${id}`).then(() => {
                let i = this.owners.map((data) => data.id).indexOf(id);
                this.owners.splice(i, 1);
            });
        },
    },
};
</script>
