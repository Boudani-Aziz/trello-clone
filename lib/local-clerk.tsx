"use client";
import React, { PropsWithChildren } from "react";
import { LOCAL_ORG_ID, LOCAL_ORG_NAME, LOCAL_USER } from "./local-auth";

type Organization = {
  id: string;
  slug: string;
  name: string;
  imageUrl: string;
};

type Membership = {
  organization: Organization;
};

export const ClerkProvider = ({ children }: PropsWithChildren) => <>{children}</>;
export const ClerkLoaded = ({ children }: PropsWithChildren) => <>{children}</>;
export const ClerkLoading = ({ children }: PropsWithChildren) => <>{children}</>;

const localOrganization: Organization = {
  id: LOCAL_ORG_ID,
  slug: LOCAL_ORG_ID,
  name: LOCAL_ORG_NAME,
  imageUrl: LOCAL_USER.imageUrl,
};

export const OrganizationSwitcher = () => null;
export const UserButton = () => (
  <div className="flex items-center gap-x-2 text-sm text-neutral-600">
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 text-xs font-semibold text-neutral-700">
      {LOCAL_USER.name.charAt(0)}
    </span>
    <span>{LOCAL_USER.name}</span>
  </div>
);

export const useOrganization = () => ({
  organization: localOrganization,
  isLoaded: true,
});

export const useOrganizationList = () => ({
  setActive: () => {},
  isLoaded: true,
  userMemberships: {
    data: [{ organization: localOrganization } as Membership],
    isLoading: false,
  },
});

export const OrganizationProfile = () => (
  <div className="rounded-md border p-4 text-sm text-neutral-700">
    <p className="font-semibold">{LOCAL_ORG_NAME}</p>
    <p className="text-xs text-neutral-500">Local mode (no sign-in required)</p>
  </div>
);

export const OrganizationList = () => (
  <div className="rounded-md border p-4 text-sm text-neutral-700">
    <p className="font-semibold">{LOCAL_ORG_NAME}</p>
    <p className="text-xs text-neutral-500">Single workspace available locally.</p>
  </div>
);

export const SignIn = () => null;
export const SignUp = () => null;
