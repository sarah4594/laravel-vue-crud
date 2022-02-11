import AllPatients from "../components/patients/AllPatients.vue";
import CreatePatient from "../components/patients/CreatePatient.vue";
import EditPatient from "../components/patients/EditPatient.vue";
import defineRoutes from "./defineRoutes";

export default function (basePath) {
    return defineRoutes(basePath, [
        {
            name: "list",
            path: "/",
            component: AllPatients,
        },
        {
            name: "create",
            path: "/create",
            component: CreatePatient,
        },
        {
            name: "edit",
            path: "/edit/:id",
            component: EditPatient,
        },
    ]);
}
