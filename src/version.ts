import pkg from "../package.json" with { type: "json" };

/** Current package version, exported for easy verification in preview installs. */
export const version: string = pkg.version;
