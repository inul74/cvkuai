import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { db } from "@/db";
import { getAuthUser } from "@/lib/kinde";
import { generateDocUUID } from "@/lib/helper";
import {
  createDocumentTableSchema,
  DocumentSchema,
  documentTable,
} from "@/db/schema/document";

const documentRoute = new Hono().post(
  "/create",
  zValidator("json", createDocumentTableSchema),
  getAuthUser,
  async (c) => {
    try {
      const user = c.get("user");
      const { title } = c.req.valid("json") as DocumentSchema;
      const userId = user.id;
      const authorName = `${user.given_name} ${user?.family_name}`;
      const authorEmail = user.email as string;
      const documentId = generateDocUUID();

      const newDoc = {
        title: title,
        userId: userId,
        documentId: documentId,
        authorName: authorName,
        authorEmail: authorEmail,
      };

      const [data] = await db.insert(documentTable).values(newDoc).returning();
      return c.json(
        {
          success: "ok",
          data,
        },
        { status: 200 }
      );
    } catch (error) {
      return c.json(
        {
          success: false,
          message: "Failed to create document",
          error: error,
        },
        500
      );
    }
  }
);

export default documentRoute;
