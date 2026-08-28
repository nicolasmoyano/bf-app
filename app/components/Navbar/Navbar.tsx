"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const bookingUrl = "https://calendly.com/brandformstudio/30min";
const menuItems = [
  { label: "Offers", href: "/#offers" },
  { label: "Buyer kit demo", href: "/buyer-kit" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (pathname === "/buyer-kit") return null;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#07110f]/80 px-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Brandform home">
            <span className="grid h-7 w-7 grid-cols-2 gap-0.5 rounded-md bg-emerald-300 p-1.5"><span className="rounded-[1px] bg-slate-950" /><span className="rounded-[1px] bg-slate-950/45" /><span className="rounded-[1px] bg-slate-950/45" /><span className="rounded-[1px] bg-slate-950" /></span>
            <span className="text-sm font-semibold tracking-[-0.02em] text-white">Brandform</span>
          </Link>
          <div className="hidden items-center gap-7 md:flex">{menuItems.map((item) => <a key={item.href} href={item.href} className="text-sm text-slate-400 transition hover:text-white">{item.label}</a>)}</div>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-200 md:inline-flex">Book a call <ArrowUpRight className="h-3.5 w-3.5" /></a>
          <button type="button" className="rounded-lg border border-white/10 p-2 text-slate-300 md:hidden" onClick={() => setIsMenuOpen((open) => !open)} aria-expanded={isMenuOpen} aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}>{isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
        {isMenuOpen && <div className="border-t border-white/10 py-4 md:hidden"><div className="flex flex-col gap-1">{menuItems.map((item) => <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/[0.05] hover:text-white">{item.label}</a>)}<a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-300 px-4 py-3 text-sm font-semibold text-slate-950">Book a free fit call <ArrowUpRight className="h-4 w-4" /></a></div></div>}
      </div>
    </nav>
  );
}
