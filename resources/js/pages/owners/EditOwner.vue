<template>
    <div>
        <h3 class="text-center mt-8">Update Owner</h3>
        <div class="row mt-12">
            <div class="col-md-6">
                <form @submit.prevent="updateOwner">
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="mt-5 md:mt-0 md:col-span-2">
                            <div class="grid grid-cols-8 gap-6">
                                <div class="col-span-4 sm:col-span-3">
                                    <label
                                        for="first-name"
                                        class="block text-sm font-medium text-gray-700"
                                        >First Name</label
                                    >
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autocomplete="given-name"
                                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        v-model="owner.first_name"
                                    />
                                </div>

                                <div class="col-span-4 sm:col-span-3">
                                    <label
                                        for="last-name"
                                        class="block text-sm font-medium text-gray-700"
                                        >Last Name</label
                                    >
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autocomplete="family-name"
                                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        v-model="owner.last_name"
                                    />
                                </div>

                                <div class="col-span-4 sm:col-span-3">
                                    <label
                                        for="email-address"
                                        class="block text-sm font-medium text-gray-700"
                                        >Email address</label
                                    >
                                    <input
                                        type="text"
                                        name="email-address"
                                        id="email-address"
                                        autocomplete="email"
                                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        v-model="owner.email"
                                    />
                                </div>

                                <div class="col-span-4 sm:col-span-3">
                                    <label
                                        for="phone-number"
                                        class="block text-sm font-medium text-gray-700"
                                        >Phone Number</label
                                    >
                                    <input
                                        type="text"
                                        name="phone-number"
                                        id="email-address"
                                        autocomplete="phone number"
                                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        v-model="owner.phone_number"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded text-white mt-8"
                    >
                        Update Owner
                    </button>
                </form>

                <div>
                    <h2 class="text-center mb-8">Patient List</h2>

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
                                        Name
                                    </th>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Species
                                    </th>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Color
                                    </th>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Birthday
                                    </th>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr
                                    v-for="patient in patients"
                                    :key="patient.id"
                                >
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                    >
                                        {{ patient.id }}
                                    </td>
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                    >
                                        {{ patient.name }}
                                    </td>
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                    >
                                        {{ patient.species }}
                                    </td>
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                    >
                                        {{ patient.color }}
                                    </td>
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                    >
                                        {{ patient.birthday }}
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
                                                    name: 'patients:edit',
                                                    params: { id: patient.id },
                                                }"
                                                class="px-4 py-2 bg-green-400 hover:bg-green-500 text-white rounded"
                                                >Edit</router-link
                                            >
                                            <button
                                                class="px-4 py-2 ml-2 bg-rose-400 hover:bg-rose-500 text-white rounded"
                                                @click="
                                                    deletePatient(patient.id)
                                                "
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
                        :to="{
                            name: 'patients:create',
                            params: { owner_id: owner.id },
                        }"
                        class="text-white flex mt-8"
                    >
                        <div
                            class="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded"
                        >
                            Add Patient
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            owner: {},
            patients: [],
        };
    },
    created() {
        this.axios.get(`/owners/${this.$route.params.id}`).then((res) => {
            this.owner = res.data.owner;
            this.patients = res.data.patients;
        });
    },
    methods: {
        updateOwner() {
            this.axios
                .patch(`/owners/${this.$route.params.id}`, this.owner)
                .then((res) => {
                    this.$router.push({ name: "owners:list" });
                });
        },
        deletePatient(id) {
            this.axios.delete(`/patients/${id}`).then(() => {
                let i = this.patients.map((data) => data.id).indexOf(id);
                this.patients.splice(i, 1);
            });
        },
    },
};
</script>
