"use client"

import Image from "next/image";
import style from "./Navbar.module.scss"
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProviders, signIn, signOut } from "next-auth/react"

const Navbar = () => {

    const isLoggedIn = true
    const [providers,setProviders] = useState(null)
    const [toggleMenu,setToggleMenu] = useState(false)

    useEffect(()=>{

        (async()=>{
            const response = await getProviders()
            setProviders(response)
        })();

    },[])

    return (
        <>

        <nav 
         className={
        `${style.Navbar} ${toggleMenu?style.on:style.off}`
         }
        >

            <Link className={style.icon} href={"/"}>
            <Image
             src="/assets/images/logobold.jfif"
             alt=""
             width={25}
             height={25}
            />
            <h1>Ortuk</h1>
            </Link>

                
            {isLoggedIn?
            
            <>

            <Link href="/">
            <button className={style.navButtonDark} onClick={()=>{setToggleMenu(false)}}>
                Create post
            </button>
            </Link>
            
            <button className={style.navButtonLight} onClick={()=>{setToggleMenu(false)}}>
                Sign out
            </button>

            <Link href="/">
            <div className={style.profile} onClick={()=>{setToggleMenu(false)}}>
                <Image
                 src={"/assets/images/user.png"}
                 fill
                 style={{objectFit:"fill"}}
                />
            </div>
            </Link>

            <div 
             className={`${style.burger} ${toggleMenu?style.burgerOn:style.burgerOff}`}
             onClick={()=>{
                if(toggleMenu){setToggleMenu(false)}
                else{setToggleMenu(true)}
             }}
            >
                <div/>
                <div/>
                <div/>
            </div>

            </>

            :
            
            <>
            {providers &&
            Object.values(providers).map((provider)=>(
                <button
                 type="button"
                 key={provider.name}
                 onClick={()=>signIn(provider.id)}
                 className={style.navButtonDark}
                >
                    Sign In
                </button>
            ))
            }
            </>
            
            }
                

        </nav>
        
        </>
    );
}
 
export default Navbar;