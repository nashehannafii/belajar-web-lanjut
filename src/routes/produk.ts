import { Elysia } from "elysia";
import { db } from "../db/index";
import { produkTable } from "../db/schema";
import { eq } from 'drizzle-orm';

export const produkRoute = new Elysia({
    prefix: "/produk"
});

produkRoute.get("/", async () => {
    const data = await db.select().from(produkTable);
    return data;
})

produkRoute.get("/:id", async ({ params}) => {
    const id = params.id;
    const data = await db.select()
        .from(produkTable)
        .where(eq(produkTable.id, id));
    return data;
})

// Buat CRUD untuk produk
// 1. Create produk
// 2. Read produk [sudah]
// 3. Update produk
// 4. Delete produk 