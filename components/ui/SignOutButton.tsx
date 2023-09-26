"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { signOut } from "next-auth/react";

function SignOutButton() {
  return (
    <>
      <Button
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/`,
          })
        }
      >
        Sign Out
      </Button>
    </>
  );
}

export default SignOutButton;
