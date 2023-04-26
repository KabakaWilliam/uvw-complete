import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "y/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  auth: publicProcedure.query(async ({ ctx }) => {
    const tempToken = "zehni@sanid.qa" + ":" + "dev123";
    const encodedToken = Buffer.from(tempToken, "utf8").toString("base64");

    // http://hapondo-api-staging.eba-me3khgci.me-south-1.elasticbeanstalk.com/admin
    const res = await fetch("http://localhost:8000/api/portal/login", {
      method: "POST",
      headers: {
        Authorization: `Basic ${encodedToken}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);

    return res;
  }),
});
