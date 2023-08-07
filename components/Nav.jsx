"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react"

const Nav = () => {
    return (
        <nav className="flex justify-end items-center w-full font-semibold p-2 pr-6">

            <div className="flex absolute left-4 items-center gap-1">

                <Image
                 src={"/assets/images/logobold.jfif"}
                 alt="logo"
                 width= {24}
                 height={24}
                />

                <p className="text-lg font-bold hidden md:block">
                    Ortuk
                </p>

            </div>

            <Link href={"/"}>
                Home
            </Link>
            
        </nav>
    );
}
 
export default Nav;