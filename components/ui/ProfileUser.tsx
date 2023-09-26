"use client";

import React from "react";
import { User } from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function ProfilePicture() {
  const { data: session } = useSession();

  return (
    <User
      name={session?.user.username}
      description={session?.user.email}
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      }}
    />
  );
}
