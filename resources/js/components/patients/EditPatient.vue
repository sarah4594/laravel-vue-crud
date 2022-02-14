<template>
    <div>
        <h3 class="text-center mt-8">Update Patient</h3>
        <div class="row mt-12">
            <div class="col-md-6">
                <form @submit.prevent="updatePatient">
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div class="grid grid-cols-8 gap-6">
                                    <div class="col-span-4 sm:col-span-3">
                                        <label
                                            for="name"
                                            class="block text-sm font-medium text-gray-700"
                                            >Name</label
                                        >
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autocomplete="name"
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            v-model="patient.name"
                                        />
                                    </div>

                                    <div class="col-span-4 sm:col-span-3">
                                        <label
                                            for="species"
                                            class="block text-sm font-medium text-gray-700"
                                            >Species</label
                                        >
                                        <select
                                            name="species"
                                            id="species"
                                            autocomplete="species"
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            v-model="patient.species"
                                        >
                                            <option>Dog</option>
                                            <option>Cat</option>
                                            <option>Bird</option>
                                            <option>Hamster</option>
                                            <option>Fish</option>
                                            <option>Reptile</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div class="col-span-4 sm:col-span-3">
                                        <label
                                            for="color"
                                            class="block text-sm font-medium text-gray-700"
                                            >Color</label
                                        >
                                        <select
                                            name="color"
                                            id="color"
                                            autocomplete="color"
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            v-model="patient.color"
                                        >
                                            <option>White</option>
                                            <option>Black</option>
                                            <option>Brown</option>
                                            <option>Red</option>
                                            <option>Gold/Blonde</option>
                                            <option>Gray</option>
                                            <option>White</option>
                                            <option>Tuxedo</option>
                                            <option>Tabby</option>
                                            <option>Tortoiseshell</option>
                                            <option>Calico</option>
                                            <option>Other/Multi</option>
                                        </select>
                                    </div>

                                    <div class="col-span-4 sm:col-span-3">
                                        <label
                                            for="birthday"
                                            class="block text-sm font-medium text-gray-700"
                                            >Birthday</label
                                        >
                                        <input
                                            type="date"
                                            name="birthday"
                                            id="birthday"
                                            autocomplete="birthday"
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            v-model="patient.birthday"
                                        />
                                    </div>
                                    <div class="col-span-4 sm:col-span-3">
                                        <label
                                            for="owner"
                                            class="block text-sm font-medium text-gray-700"
                                            >Owner</label
                                        >
                                        <input
                                            type="text"
                                            name="owner"
                                            id="owner"
                                            autocomplete="owner"
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            v-model="patient.owner"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded text-white mt-8"
                    >
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
