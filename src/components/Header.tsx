import React from "react"

import Image from "next/image"
import Link from "next/link"

const Header = () =>
    <header className="container mx-auto">
        <nav className="pt-10 px-5 lg:px-20">
            <Link href="/">
                <Image src="/images/icon.png" alt="icon" width="64"
                       height="64" />
            </Link>
        </nav>
    </header>

export default Header
