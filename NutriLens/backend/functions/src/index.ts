// Cloud Functions entry point (BFF). Each callable enforces App Check + auth and keeps the
// OpenAI key server-side via Secret Manager. Deployed separately from the iOS app.
export { analyzeMeal } from "./analyzeMeal";
// export { coachChat } from "./coachChat";       // M10
// export { weeklyReport } from "./weeklyReport";  // M10
