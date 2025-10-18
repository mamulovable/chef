import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Seed the database with built-in templates
export const seedBuiltInTemplates = mutation({
  args: {},
  returns: v.null(),
  handler: async (ctx) => {
    const builtInTemplates = [
      {
        name: "Landing Page",
        description: "A modern, responsive landing page template perfect for businesses, startups, and personal brands.",
        category: "Landing Page",
        aiTags: ["landing page", "homepage", "business", "startup", "marketing", "sales", "conversion", "hero section", "call to action"],
        metadata: {
          techStack: ["React", "TailwindCSS", "Convex"],
          features: ["Hero Section", "Features", "Testimonials", "Contact Form", "Responsive Design"],
          estimatedBuildTime: "2-3 hours",
        },
      },
      {
        name: "Portfolio",
        description: "A professional portfolio template showcasing your work, skills, and achievements.",
        category: "Portfolio",
        aiTags: ["portfolio", "personal", "work", "projects", "skills", "about", "contact", "resume", "freelancer"],
        metadata: {
          techStack: ["React", "TailwindCSS", "Convex"],
          features: ["Project Gallery", "About Section", "Skills", "Contact Form", "Resume Download"],
          estimatedBuildTime: "3-4 hours",
        },
      },
      {
        name: "Blog",
        description: "A content-focused blog template with article management and reader engagement features.",
        category: "Blog",
        aiTags: ["blog", "articles", "content", "writing", "news", "posts", "comments", "categories", "search"],
        metadata: {
          techStack: ["React", "TailwindCSS", "Convex"],
          features: ["Article List", "Article Detail", "Categories", "Search", "Comments", "Admin Panel"],
          estimatedBuildTime: "4-5 hours",
        },
      },
      {
        name: "Storefront",
        description: "An e-commerce storefront template with product catalog, cart, and checkout functionality.",
        category: "Storefront",
        aiTags: ["ecommerce", "store", "shop", "products", "cart", "checkout", "payment", "inventory", "orders"],
        metadata: {
          techStack: ["React", "TailwindCSS", "Convex"],
          features: ["Product Catalog", "Shopping Cart", "Checkout", "Payment Integration", "Order Management"],
          estimatedBuildTime: "6-8 hours",
        },
      },
      {
        name: "Dashboard",
        description: "A comprehensive dashboard template for data visualization, analytics, and admin management.",
        category: "Dashboard",
        aiTags: ["dashboard", "admin", "analytics", "data", "charts", "metrics", "management", "control panel"],
        metadata: {
          techStack: ["React", "TailwindCSS", "Convex"],
          features: ["Data Visualization", "Charts", "Tables", "Filters", "User Management", "Settings"],
          estimatedBuildTime: "5-7 hours",
        },
      },
    ];

    // Check if templates already exist
    const existingTemplates = await ctx.db.query("templates")
      .withIndex("byBuiltIn", (q) => q.eq("isBuiltIn", true))
      .collect();

    if (existingTemplates.length > 0) {
      console.log("Built-in templates already exist, skipping seed");
      return null;
    }

    // Insert built-in templates
    for (const template of builtInTemplates) {
      await ctx.db.insert("templates", {
        ...template,
        isBuiltIn: true,
        creatorId: undefined,
        version: 1,
      });
    }

    console.log(`Seeded ${builtInTemplates.length} built-in templates`);
    return null;
  },
});
