import { Menu } from "lucide-react";
import { Logo } from "../logo/logo";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "../ui/sheet";

export function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
