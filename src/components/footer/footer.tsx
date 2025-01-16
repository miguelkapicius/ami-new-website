import Link from "next/link";
import { Logo } from "../logo/logo";
import { MapPin, Phone } from "lucide-react";
import { Separator } from "../ui/separator";

export function Footer() {
    const year = new Date().getFullYear().toString();

    return (
        <footer className="flex flex-col gap-6 bg-zinc-950 px-6 pt-12 pb-6 text-background">
            <div className="flex items-center justify-center">
                <Logo />
            </div>
            <div className="flex flex-col items-center text-sm">
                <nav>
                    <ul className="flex gap-6">
                        <li>
                            <Link href={"#"}>Sobre</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Tratamentos</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Separator />
            <div className="text-xs flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <MapPin className="size-5" /> Av. Pref. Carlos Ferreira
                    Lopes, 703 - Sala 105
                </div>
                <div className="flex items-center gap-2">
                    <Phone className="size-5" /> (11) 99892-5510
                </div>
            </div>
            <Separator />
            <span className="text-xs text-center opacity-60">
                &#169; {year} Todos os direitos reservados.
            </span>
        </footer>
    );
}
