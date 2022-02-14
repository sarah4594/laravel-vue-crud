<template>
    <div>
        <h3 class="text-center mt-8">
            Create Patient for {{ owner.first_name }} {{ owner.last_name }}
        </h3>
        <div class="row mt-12">
            <div class="col-md-6">
                <form @submit.prevent="addPatient">
                    <input
                        type="hidden"
                        name="owner_id"
                        v-model="patient.owner_id"
                    />
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="mt-5 md:mt-0 md:col-span-2">
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
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded text-white mt-8"
                    >
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
            owner: {},
        };
    },
    created() {
        this.axios.get(`/owners/${this.$route.params.owner_id}`).then((res) => {
            this.patient.owner_id = res.data.owner.id;
        });
    },
    methods: {
        addPatient() {
            this.axios
                .post("/patients", this.patient)
                .then((res) =>
                    this.$router.push({
                        name: "owners:edit",
                        params: { id: res.data.owner_id },
                    })
                )
                .catch((err) => console.log(err))
                .finally(() => (this.loading = false));
        },
    },
};
</script>
