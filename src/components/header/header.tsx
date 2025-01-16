import { Logo } from "../logo/logo";
import { MobileMenu } from "./mobile-menu";

export function Header() {
    return (
        <header className="h-16 flex items-center w-full mb-8">
            <div className="flex justify-between items-center w-full">
                <Logo />
                <MobileMenu />
            </div>
        </header>
    );
}
