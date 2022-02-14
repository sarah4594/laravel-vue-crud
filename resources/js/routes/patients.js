import ListPatients from "../pages/patients/ListPatients.vue";
import CreatePatient from "../pages/patients/CreatePatient.vue";
import EditPatient from "../pages/patients/EditPatient.vue";
import defineRoutes from "./defineRoutes";

export default function (basePath) {
    return defineRoutes(basePath, [
        {
            name: "list",
            path: "/",
            component: ListPatients,
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
