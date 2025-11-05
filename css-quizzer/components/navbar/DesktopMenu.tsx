import Link from "next/link";
import links from "./Links.json";

const DesktopMenu = () => {
    return (
        <div className="hidden h-auto items-center gap-2 justify-center lg:flex text-sm">
            {links.map((link, id) => (
                <Link href={link.href} key={id} className="px-[16px] font-semibold py-[8px] font-sm text-gray-200 rounded-[7px] hover:text-[#141a30] hover:bg-gray-200 dark:hover:bg-slate-700 dark:hover:text-gray-200 transition-colors duration-200">
                    {link.name}
                </Link>
            ))}
        </div>
    )
}
export default DesktopMenu
