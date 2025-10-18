// Simple script to seed templates
import { ConvexHttpClient } from "convex/browser";
import { api } from "./convex/_generated/api";

const client = new ConvexHttpClient(process.env.CONVEX_URL!);

async function seedTemplates() {
  try {
    console.log("Seeding templates...");
    await client.mutation(api.seedTemplates.seedBuiltInTemplates, {});
    console.log("Templates seeded successfully!");
  } catch (error) {
    console.error("Error seeding templates:", error);
  }
}

seedTemplates();

