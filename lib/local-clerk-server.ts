import { getLocalAuth, getLocalUser } from "./local-auth";

export const auth = () => getLocalAuth();

export const currentUser = async () => getLocalUser();
