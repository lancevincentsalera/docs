window.addEventListener("DOMContentLoaded", () => {
  const selection = { service: "", method: "" }

  try {
    const raw = localStorage.getItem("grpcui-selection")
    if (raw) {
      Object.assign(selection, JSON.parse(raw))
    }
  } catch {
    console.warn("Could not parse grpcui-selection from localStorage")
  }

  const { service: svc, method: mtd } = selection;
  if (!svc || !mtd) return;

  const svcEl = document.getElementById("grpc-service");
  const mtdEl = document.getElementById("grpc-method");

  if (!svcEl || !mtdEl) return;

  svcEl.value = svc;
  svcEl.dispatchEvent(new Event("change", { bubbles: true }));

  setTimeout(() => {
    mtdEl.value = mtd;
    mtdEl.dispatchEvent(new Event("change"));
  }, 100);
});