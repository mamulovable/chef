import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";

const http = httpRouter();

// HTTP endpoint to seed templates
http.route({
  path: "/seed-templates",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    try {
      await ctx.runMutation(api.seedTemplates.seedBuiltInTemplates, {});
      return new Response(JSON.stringify({ success: true, message: "Templates seeded successfully" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error seeding templates:", error);
      return new Response(JSON.stringify({ success: false, error: String(error) }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }),
});

export default http;