"use client"

import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import {Spacer} from "@nextui-org/spacer";
import React from "react";
import {SearchIcon} from "@nextui-org/shared-icons";
import {siteConfig} from "@/config/site.ts";

export const Navbar = () => {
    const [value, setValue] = React.useState("");

    const searchInput = (
        <div className={"flex flex-row"}>
            <Input
                aria-label="Search"
                labelPlacement="outside"
                placeholder="Tìm kiếm..."
                type="search"
                value={value}
                onValueChange={(value) => setValue(value)}

            />
            <Spacer x={1} />
            <Button
                as={Link}
                href={`/tim-kiem/${value}`}
                color={"primary"}
                isIconOnly={true}
            >
                <SearchIcon />
            </Button>
        </div>

    );

    return (
        <NextUINavbar maxWidth="xl" position="sticky">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <a className="flex justify-start items-center gap-1" href="/">
                        <p className="font-bold text-inherit">AstroFlim</p>
                    </a>
                </NavbarBrand>
                <ul className="hidden lg:flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <a
                                className={clsx(
                                    linkStyles({ color: "foreground" }),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </a>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    {/*<ThemeSwitch />*/}
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>

            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                {/*<ThemeSwitch />*/}
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                {searchInput}
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2
                                        ? "primary"
                                        : index === siteConfig.navMenuItems.length - 1
                                            ? "danger"
                                            : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};