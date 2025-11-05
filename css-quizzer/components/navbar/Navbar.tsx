import ThemeButton from "./ThemeButton";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
    return (
       <div className="fixed left-0 right-0 top-0 z-50 mx-w-screen bg-primary text-primary-foreground">
           <div className="grid-row-1 mx-auto grid h-full max-w-screen grid-cols-2 items-center px-40 lg:grid-cols-3 bg-[#141a30]">
               <div className="flex justify-between justify-self-start py-3">
                   <Logo />
               </div>
               <DesktopMenu />
               <div className="flex gap-2 justify-self-end">
                   <ThemeButton />
               </div>
           </div>
       </div>
    )
}

export default Navbar
