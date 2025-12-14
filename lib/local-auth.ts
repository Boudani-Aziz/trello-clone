export const LOCAL_ORG_ID = "local-org";
export const LOCAL_ORG_NAME = "Local Workspace";
export const LOCAL_USER = {
  id: "local-user",
  name: "Local User",
  imageUrl: "/logo.svg",
};

export const getLocalAuth = () => ({
  userId: LOCAL_USER.id,
  orgId: LOCAL_ORG_ID,
});

export const getLocalUser = () => ({
  id: LOCAL_USER.id,
  firstName: LOCAL_USER.name,
  lastName: "",
  imageUrl: LOCAL_USER.imageUrl,
});
