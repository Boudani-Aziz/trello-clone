import type { ACTION, ENTITY_TYPE } from "@prisma/client";
import { db } from "./db";
import { getLocalAuth, getLocalUser } from "./local-auth";

type Props = {
  entityId: string;
  entityType: ENTITY_TYPE;
  entityTitle: string;
  action: ACTION;
};

export const createAuditLog = async (props: Props) => {
  try {
    const { orgId } = getLocalAuth();
    const user = getLocalUser();

    const { entityId, entityTitle, entityType, action } = props;

    await db.auditLog.create({
      data: {
        orgId,
        entityId,
        entityType,
        entityTitle,
        action,
        userId: user.id,
        userImage: user?.imageUrl,
        userName: `${user?.firstName}${user?.lastName && `${user.lastName}`}`,
      },
    });
  } catch (error) {
    console.log(`[AUDIT_LOG_ERROR]`, error);
  }
};
