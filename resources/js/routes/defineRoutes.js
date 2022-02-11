export default function (basePath, routes) {
    return routes.map((route) => ({
        name: `${basePath}:${route.name}`,
        path: `/${basePath}${route.path}`,
        component: route.component,
    }));
}
