import { z } from "@hono/zod-openapi";

export const BaseUnicodeVersionFileSchema = z.object({
  name: z.string().openapi({
    description: "The name of the file or directory.",
  }),

  path: z.string().openapi({
    description: "The path to the file or directory.",
  }),
});

export interface UnicodeVersionFile {
  name: string;
  path: string;
  children?: UnicodeVersionFile[];
}

export const UnicodeVersionFileSchema: z.ZodType<UnicodeVersionFile> = z.object({
  name: z.string().openapi({
    description: "The name of the file or directory.",
  }),

  path: z.string().openapi({
    description: "The path to the file or directory.",
  }),

  children: z
    .array(z.lazy(() => UnicodeVersionFileSchema))
    .optional()
    .openapi({
      description: "The children of the directory, if it is a directory.",
      type: "array",
      items: {
        $ref: "#/components/schemas/UnicodeVersionFile",
      },
    }),
}).openapi("UnicodeVersionFile");
