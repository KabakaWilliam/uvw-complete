import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "y/server/api/trpc";

export const adminRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAllProfiles: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.profile.findMany();
  }),
  addNewProfile: publicProcedure
    .input(z.object({}))
    .mutation(({ input, ctx }) => {
      return;
    }),
});
