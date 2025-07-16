import { BlogRouter, MainRouter } from "./routes";

export const subdomains = {
  main: {
    subdomain: "www",
    router: MainRouter,
    main: true,
  },
  blog: {
    subdomain: "blog",
    router: BlogRouter,
    main: false,
  },
};

export function getRouter() {
  const subdomain = getSubdomain(window.location.hostname);
  if (subdomain === "blog") {
    return subdomains["blog"].router;
  } else {
    return subdomains["main"].router;
  }
}

function getSubdomain(hostname) {
  const parts = hostname.split(".");
  let subdomain = "";
  if (hostname.includes("localhost")) {
    if (parts.length === 2) {
      subdomain = parts[0];
    }
  } else if (parts.length > 2) {
    subdomain = parts[0]; // return subdomain
  }
  console.log(subdomain);
  return subdomain;
}
