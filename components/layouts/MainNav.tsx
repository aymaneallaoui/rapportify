// @ts-nocheck
"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Skeleton,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";
import { signOut, useSession } from "next-auth/react";
import Logo from "../icons/Logo";

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isFetchingSession, setIsFetchingSession] = React.useState(false);

  const { data: session } = useSession({
    onUnauthenticated: () => setIsFetchingSession(false),
    onAuthenticated: () => setIsFetchingSession(false),
  });

  const menuItems = ["Profile", "Dashboard", "Activity"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-6 text-text"
        justify="center"
      >
        <NavbarItem>
          <Link color="primary" href="#">
            <Button variant="ghost" radius="full" color="primary">
              Features
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            <Button variant="ghost" radius="full" color="primary" data-hover>
              Pricing
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {/* {session?.user && (
            <User
              name={session?.user.username}
              description={session?.user.email}
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              }}
            />
          )} */}
          {session?.user === undefined && isFetchingSession ? (
            <Skeleton className="rounded-lg">
              <Button variant="ghost" color="primary" data-hover disabled>
                Loading...
              </Button>
            </Skeleton>
          ) : session?.user ? (
            <>
              <Dropdown placement="bottom-start">
                <DropdownTrigger>
                  <User
                    as="button"
                    avatarProps={{
                      isBordered: true,
                      src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                    }}
                    className="transition-transform"
                    description={session.user.email}
                    name={session.user.username}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-bold">Signed in as</p>
                    <p className="font-bold">{session.user.username}</p>
                  </DropdownItem>
                  <DropdownItem key="settings">My Settings</DropdownItem>

                  <DropdownItem key="system">Generate New Rapport</DropdownItem>

                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem
                    key="logout"
                    color="danger"
                    onClick={() =>
                      signOut({
                        redirect: true,
                        callbackUrl: `${window.location.origin}/login`,
                      })
                    }
                  >
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </>
          ) : (
            <Link href="/login">
              <Button variant="shadow" color="primary" data-hover>
                Login
              </Button>
            </Link>
          )}
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
