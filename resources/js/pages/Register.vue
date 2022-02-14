<template>
    <div>
        <h2>Registration</h2>
        <form @submit="onSubmit" @reset="onReset">
            <div>
                <label
                    >Name
                    <input
                        id="name"
                        name-="name"
                        v-model="form.name"
                        type="text"
                        class="border"
                        placeholder="Enter name"
                        :state="errors && !errors.name"
                    />
                </label>
            </div>
            <div>
                <label
                    >Email
                    <input
                        id="email"
                        name="email"
                        v-model="form.email"
                        type="email"
                        class="border"
                        placeholder="Enter email"
                        :state="errors && !errors.email"
                    />
                </label>
            </div>

            <div>
                <label
                    >Password >
                    <input
                        class="border"
                        name="password"
                        id="password"
                        v-model="form.password"
                        placeholder="Enter Password"
                        type="password"
                        :state="errors && !errors.password"
                /></label>
            </div>
            <div>
                <label
                    >Confirm Password
                    <input
                        class="border"
                        name="password"
                        id="password_confirmation"
                        v-model="form.password_confirmation"
                        placeholder="Confirm Password"
                        type="password"
                        :state="errors && !errors.password"
                /></label>
            </div>
            <button type="submit" class="bg-blue-500">Register</button>
            <button type="reset" class="border">Reset</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                email: "",
                name: "",
                password: "",
                password_confirmation: "",
            },
            errors: null,
        };
    },
    components: {},
    methods: {
        onSubmit(event) {
            event.preventDefault();
            axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
                axios
                    .post("/register", {
                        ...this.form,
                    })
                    .then(() => {
                        this.$router.push("/");
                    })
                    .catch((err) => {
                        this.errors = err.response.data.errors;
                    });
            });
        },
        onReset(event) {
            event.preventDefault();
            // Reset our form values
            this.form.email = "";
            this.form.name = "";
            this.form.password = null;
            this.form.password_confirmation = null;
        },
    },
};
</script>

<style></style>
