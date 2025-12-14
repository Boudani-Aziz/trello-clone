"use server";
import { StripeRedirect } from "./schema";
import { InputType, ReturnType } from "./types";
import { createSafeAction } from "@/lib/create-safe-action";

const handler = async (_data: InputType): Promise<ReturnType> => {
  return { data: "/" };
};

export const stripeRedirect = createSafeAction(StripeRedirect, handler);
