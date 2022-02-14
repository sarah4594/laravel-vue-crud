<template>
    <div>
        <h5>Login</h5>
        <form @submit.prevent="onSubmit" @reset="onReset">
            <div class="flex flex-col gap-4">
                <label for="email">Email</label>
                <input
                    class="border"
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                />
                <label for="password">Password</label>
                <input
                    class="border"
                    type="password"
                    id="password"
                    v-model="form.password"
                    required
                />
                <button type="submit" class="bg-blue-500">Login</button>
                <button type="reset" class="border">Reset</button>
            </div>
        </form>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            form: {
                email: "",
                name: "",
            },
            serverError: "",
            showDismissibleAlert: false,
        };
    },
    components: {},
    methods: {
        ...mapActions({
            getUser: "auth/getUser",
        }),
        onSubmit(event) {
            this.$validator.validateAll().then((result) => {
                if (!result) {
                    return;
                }
                // event.preventDefault();
                axios
                    .get("http://localhost:8000/sanctum/csrf-cookie")
                    .then(() => {
                        axios
                            .post("/login", {
                                ...this.form,
                            })
                            .then(() => {
                                this.getUser().then((res) => {
                                    this.$router.push("/dashboard");
                                });
                            })
                            .catch((err) => {
                                this.serverError = null;
                                this.$validator.reset();
                                if (
                                    err.response.data &&
                                    err.response.data.msg
                                ) {
                                    this.showDismissibleAlert = true;
                                    this.serverError = err.response.data.msg;
                                }
                            });
                    });
            });
        },
        onReset(event) {
            event.preventDefault();
            // Reset our form values
            this.form.email = "";
            this.form.name = "";
            this.form.password = null;
            this.$nextTick(() => {
                this.$validator.reset();
            });
        },
        validateState(ref) {
            if (
                this.veeFields[ref] &&
                (this.veeFields[ref].dirty || this.veeFields[ref].validated)
            ) {
                return !this.veeErrors.has(ref);
            }
            return null;
        },
    },
};
</script>
