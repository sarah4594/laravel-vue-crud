import ExampleComponent from "./components/ExampleComponent.vue";
import patientsRoutes from "./routes/patients";

export const routes = [
    {
        name: "home",
        path: "/",
        component: ExampleComponent,
    },
    ...patientsRoutes("patients"),
];
