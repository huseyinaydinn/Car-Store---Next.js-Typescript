import Link from "next/link"
import Image from "next/image"

import { footerLinks } from "@/constants"

const Footer = () => {
    return (
        <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col justify-start items-start gap-6">
                    <Image src="/logo.svg" alt="logo" width={118} height={18} />
                    <p className="text-base text-gray-700">
                        CarStore 2023 <br />
                        All rights reserved &copy;
                    </p>
                </div>

                <div className="footer__links">
                    {footerLinks.map((link) => (
                        <div key={link.title} className="footer__link">
                            <h3 className="font-bold">{link.title}</h3>
                            {link.links.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className="text-gray-500 cursor-pointer"
                                >{item.title}</Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center gap-x-5 gap-y-2 flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 text-center">

                <p>@2023 CarStore. All Right Reserved.</p>

                <Link href="/" className="text-gray-500" >
                    Privacy Policy
                </Link>
                <Link href="/" className="text-gray-500" >
                    Terms of Use
                </Link>
            </div>

        </footer>
    )
}

export default Footer