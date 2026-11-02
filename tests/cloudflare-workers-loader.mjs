// Node cannot load Workers runtime built-ins. vinext's tracing integration
// imports `cloudflare:workers` and no-ops when `tracing` is absent, so the
// tests resolve it to an empty module.
export async function resolve(specifier, context, nextResolve) {
  if (specifier === "cloudflare:workers") {
    return { url: "data:text/javascript,export {};", shortCircuit: true };
  }
  return nextResolve(specifier, context);
}
