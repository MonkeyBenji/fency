const url = new URL(window.location);
if (
  url.searchParams.get("yearlyKm") === null &&
  window.location.pathname.split("/").filter(Boolean).length === 4
) {
  url.searchParams.set("yearlyKm", 35000);
  url.searchParams.set("duration", 36);
  url.searchParams.set("ownRisk", 135);
  url.searchParams.set("includeReplacementVehicle", "B");
  url.searchParams.set("winterTires", "Y");
  window.location.replace(url);
}
