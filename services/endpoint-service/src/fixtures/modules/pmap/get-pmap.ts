const pMapModule = import('p-map').then((mod) => mod.default);

export const getPMap = () => pMapModule;
