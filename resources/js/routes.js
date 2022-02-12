import ExampleComponent from "./components/ExampleComponent.vue";
import patientsRoutes from "./routes/patients";
import ownersRoutes from "./routes/owners";

export const routes = [
    {
        name: "home",
        path: "/",
        component: ExampleComponent,
    },
    ...patientsRoutes("patients"),
    ...ownersRoutes("owners"),
];
