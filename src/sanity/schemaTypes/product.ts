import { defineType, defineField } from "sanity";

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        defineField({
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
        }),
        defineField({
            name: "name",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: (rule) => rule.required(),
            options: { source: "name", maxLength: 96 }, // ✅ Ensures slug is generated from name
        }),
        defineField({
            name: "image",
            title: "Product Image",
            type: "image",
            validation: (rule) => rule.required(),
            options: { hotspot: true }, // ✅ Enables cropping in Sanity Studio
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number",
            validation: (rule) => rule.required().min(0),
        }),
        defineField({
            name: "quantity",
            title: "Quantity",
            type: "number",
            validation: (rule) => rule.min(0),
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            description: "Detailed description of the product",
        }),
        defineField({
            name: "features",
            title: "Features",
            type: "array",
            of: [{ type: "string" }],
            description: "List of key features of the product",
        }),
        defineField({
            name: "dimensions",
            title: "Dimensions",
            type: "object",
            fields: [
                { name: "height", title: "Height", type: "string" },
                { name: "width", title: "Width", type: "string" },
                { name: "depth", title: "Depth", type: "string" },
            ],
            description: "Dimensions of the product",
        }),
    ],
});
