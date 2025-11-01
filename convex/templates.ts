import { query, mutation, action } from "./_generated/server";
import { v } from "convex/values";

// Get all templates, optionally filtered by category
export const getAllTemplates = query({
  args: { 
    category: v.optional(v.string()),
    includeUserTemplates: v.optional(v.boolean()),
  },
  returns: v.array(v.object({
    _id: v.id("templates"),
    _creationTime: v.number(),
    name: v.string(),
    description: v.string(),
    category: v.string(),
    thumbnailUrl: v.optional(v.string()),
    previewUrl: v.optional(v.string()),
    aiTags: v.array(v.string()),
    isBuiltIn: v.boolean(),
    creatorId: v.optional(v.id("convexMembers")),
    version: v.number(),
    metadata: v.optional(v.object({
      techStack: v.array(v.string()),
      features: v.array(v.string()),
      estimatedBuildTime: v.optional(v.string()),
      templatePath: v.optional(v.string()),
      snapshotFile: v.optional(v.string()),
    })),
  })),
  handler: async (ctx, args) => {
    if (args.category) {
      const templates = await ctx.db.query("templates")
        .withIndex("byCategory", (q) => q.eq("category", args.category!))
        .collect();
      return templates;
    } else if (!args.includeUserTemplates) {
      const templates = await ctx.db.query("templates")
        .withIndex("byBuiltIn", (q) => q.eq("isBuiltIn", true))
        .collect();
      return templates;
    } else {
      const templates = await ctx.db.query("templates").collect();
      return templates;
    }
  },
});

// Get a specific template by ID
export const getTemplate = query({
  args: { templateId: v.id("templates") },
  returns: v.union(
    v.object({
      _id: v.id("templates"),
      _creationTime: v.number(),
      name: v.string(),
      description: v.string(),
      category: v.string(),
      thumbnailUrl: v.optional(v.string()),
      previewUrl: v.optional(v.string()),
      templateSnapshotId: v.optional(v.id("_storage")),
      aiTags: v.array(v.string()),
      isBuiltIn: v.boolean(),
      creatorId: v.optional(v.id("convexMembers")),
      version: v.number(),
      metadata: v.optional(v.object({
        techStack: v.array(v.string()),
        features: v.array(v.string()),
        estimatedBuildTime: v.optional(v.string()),
        templatePath: v.optional(v.string()),
        snapshotFile: v.optional(v.string()),
      })),
    }),
    v.null()
  ),
  handler: async (ctx, args) => {
    return await ctx.db.get(args.templateId);
  },
});

// Get templates by AI tags (for agent to find relevant templates)
export const getTemplatesByAiTags = query({
  args: { 
    tags: v.array(v.string()),
    limit: v.optional(v.number()),
  },
  returns: v.array(v.object({
    _id: v.id("templates"),
    _creationTime: v.number(),
    name: v.string(),
    description: v.string(),
    category: v.string(),
    thumbnailUrl: v.optional(v.string()),
    previewUrl: v.optional(v.string()),
    aiTags: v.array(v.string()),
    isBuiltIn: v.boolean(),
    creatorId: v.optional(v.id("convexMembers")),
    version: v.number(),
    metadata: v.optional(v.object({
      techStack: v.array(v.string()),
      features: v.array(v.string()),
      estimatedBuildTime: v.optional(v.string()),
      templatePath: v.optional(v.string()),
      snapshotFile: v.optional(v.string()),
    })),
  })),
  handler: async (ctx, args) => {
    const templates = await ctx.db.query("templates")
      .withIndex("byBuiltIn", (q) => q.eq("isBuiltIn", true))
      .collect();
    
    // Filter templates that have matching AI tags
    const matchingTemplates = templates.filter(template => 
      args.tags.some(tag => 
        template.aiTags.some(aiTag => 
          aiTag.toLowerCase().includes(tag.toLowerCase()) ||
          tag.toLowerCase().includes(aiTag.toLowerCase())
        )
      )
    );
    
    // Sort by relevance (number of matching tags)
    matchingTemplates.sort((a, b) => {
      const aMatches = args.tags.filter(tag => 
        a.aiTags.some(aiTag => 
          aiTag.toLowerCase().includes(tag.toLowerCase()) ||
          tag.toLowerCase().includes(aiTag.toLowerCase())
        )
      ).length;
      const bMatches = args.tags.filter(tag => 
        b.aiTags.some(aiTag => 
          aiTag.toLowerCase().includes(tag.toLowerCase()) ||
          tag.toLowerCase().includes(aiTag.toLowerCase())
        )
      ).length;
      return bMatches - aMatches;
    });
    
    return args.limit ? matchingTemplates.slice(0, args.limit) : matchingTemplates;
  },
});

// Create a new template (for user-created templates)
export const createTemplate = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    category: v.string(),
    thumbnailUrl: v.optional(v.string()),
    previewUrl: v.optional(v.string()),
    templateSnapshotId: v.optional(v.id("_storage")),
    aiTags: v.array(v.string()),
    metadata: v.optional(v.object({
      techStack: v.array(v.string()),
      features: v.array(v.string()),
      estimatedBuildTime: v.optional(v.string()),
      templatePath: v.optional(v.string()),
      snapshotFile: v.optional(v.string()),
    })),
  },
  returns: v.id("templates"),
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Must be authenticated to create templates");
    }
    
    return await ctx.db.insert("templates", {
      ...args,
      isBuiltIn: false,
      creatorId: identity.subject as any,
      version: 1,
    });
  },
});

// Update a template
export const updateTemplate = mutation({
  args: {
    templateId: v.id("templates"),
    name: v.optional(v.string()),
    description: v.optional(v.string()),
    category: v.optional(v.string()),
    thumbnailUrl: v.optional(v.string()),
    previewUrl: v.optional(v.string()),
    templateSnapshotId: v.optional(v.id("_storage")),
    aiTags: v.optional(v.array(v.string())),
    metadata: v.optional(v.object({
      techStack: v.array(v.string()),
      features: v.array(v.string()),
      estimatedBuildTime: v.optional(v.string()),
      templatePath: v.optional(v.string()),
      snapshotFile: v.optional(v.string()),
    })),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Must be authenticated to update templates");
    }
    
    const template = await ctx.db.get(args.templateId);
    if (!template) {
      throw new Error("Template not found");
    }
    
    // Only allow updates to user-created templates or if user is admin
    if (!template.isBuiltIn && template.creatorId !== identity.subject) {
      throw new Error("Not authorized to update this template");
    }
    
    const { templateId, ...updateData } = args;
    await ctx.db.patch(templateId, {
      ...updateData,
      version: template.version + 1,
    });
    
    return null;
  },
});

// Delete a template
export const deleteTemplate = mutation({
  args: { templateId: v.id("templates") },
  returns: v.null(),
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Must be authenticated to delete templates");
    }
    
    const template = await ctx.db.get(args.templateId);
    if (!template) {
      throw new Error("Template not found");
    }
    
    // Only allow deletion of user-created templates
    if (template.isBuiltIn) {
      throw new Error("Cannot delete built-in templates");
    }
    
    if (template.creatorId !== identity.subject) {
      throw new Error("Not authorized to delete this template");
    }
    
    await ctx.db.delete(args.templateId);
    return null;
  },
});

// Track template usage
export const trackTemplateUsage = mutation({
  args: {
    templateId: v.id("templates"),
    chatId: v.id("chats"),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Must be authenticated to track template usage");
    }
    
    await ctx.db.insert("userTemplateUsage", {
      userId: identity.subject as any,
      templateId: args.templateId,
      chatId: args.chatId,
      usedAt: Date.now(),
    });
    
    return null;
  },
});

// Get user's template usage history
export const getUserTemplateUsage = query({
  args: {},
  returns: v.array(v.object({
    _id: v.id("userTemplateUsage"),
    _creationTime: v.number(),
    userId: v.id("convexMembers"),
    templateId: v.id("templates"),
    chatId: v.id("chats"),
    usedAt: v.number(),
    template: v.object({
      _id: v.id("templates"),
      name: v.string(),
      description: v.string(),
      category: v.string(),
      thumbnailUrl: v.optional(v.string()),
    }),
  })),
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return [];
    }
    
    const usage = await ctx.db.query("userTemplateUsage")
      .withIndex("byUser", (q) => q.eq("userId", identity.subject as any))
      .order("desc")
      .collect();
    
    // Get template details for each usage
    const usageWithTemplates = await Promise.all(
      usage.map(async (usageItem) => {
        const template = await ctx.db.get(usageItem.templateId);
        return {
          ...usageItem,
          template: template ? {
            _id: template._id,
            name: template.name,
            description: template.description,
            category: template.category,
            thumbnailUrl: template.thumbnailUrl,
          } : null,
        };
      })
    );
    
    return usageWithTemplates.filter(item => item.template !== null) as any[];
  },
});

// Initialize built-in templates (admin function)
export const initializeBuiltInTemplates = action({
  args: {},
  returns: v.null(),
  handler: async (ctx) => {
    // This function is deprecated - use seedBuiltInTemplates mutation instead
    console.log("initializeBuiltInTemplates is deprecated. Use seedBuiltInTemplates mutation instead.");
    return null;
  },
});
