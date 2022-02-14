<template>
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
                            Owner
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="patient in patients" :key="patient.id">
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
                            {{ patient.owner }}
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
        <router-link
            :to="{ name: 'patients:create' }"
            class="text-white flex mt-8"
        >
            <div class="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded">
                Add Patient
            </div>
        </router-link>
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
        this.axios.get("/patients/").then((response) => {
            this.patients = response.data;
        });
    },
    methods: {
        deletePatient(id) {
            this.axios.delete(`/patients/${id}`).then(() => {
                let i = this.patients.map((data) => data.id).indexOf(id);
                this.patients.splice(i, 1);
            });
        },
    },
};
</script>
