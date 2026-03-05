"use client";

import { motion } from "framer-motion";
import { Link2, MessageCircle, Instagram, Code, Facebook, Smartphone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const profile = {
    username: "updatesumobito",
    displayName: "updatesumobito",
    category: "Info Sumobito - Berita & Warga",
    bio: [
        "📍 Basecamp Wong Sumobito & sekitarnya",
        "🤍 Wong Sumobito WAJIB FOLLOW 🤩",
        "📇 Kurir Sumobito Hanya di @rayokurir",
        "🎬 Event, Viral, UMKM semua ada"
    ],
    stats: { posts: "144", followers: "3.691", following: "50" },
    avatarUrl: "/profile.png",
};

const links = [
    {
        id: "grup-wa-2",
        label: "GRUP WA UPDATE SUMOBITO 2",
        subLabel: "Update Sumobito 2",
        url: "#",
        icon: Link2,
        colorClass: "from-[#25D366] to-[#128C7E]", // WhatsApp Green
        shadowClass: "shadow-[0_8px_30px_rgb(37,211,102,0.25)]",
        iconBg: "bg-white/20 text-white",
        textColor: "text-white"
    },
    {
        id: "grup-wa-1",
        label: "GRUP WA UPDATE SUMOBITO 1",
        subLabel: "Update Sumobito 1",
        url: "#",
        icon: Link2,
        colorClass: "from-[#25D366] to-[#128C7E]", // WhatsApp Green
        shadowClass: "shadow-[0_8px_30px_rgb(37,211,102,0.25)]",
        iconBg: "bg-white/20 text-white",
        textColor: "text-white",
        isFull: true // Added flag for visual badge
    },
    {
        id: "grup-wa-jual-beli",
        label: "GRUP WA JUAL BELI SUMOBITO",
        subLabel: "FJB Sumobito",
        url: "#",
        icon: Link2,
        colorClass: "from-[#25D366] to-[#128C7E]", // WhatsApp Green (ini juga grup WA)
        shadowClass: "shadow-[0_8px_30px_rgb(37,211,102,0.25)]",
        iconBg: "bg-white/20 text-white",
        textColor: "text-white"
    },
    {
        id: "grup-wa-kuliner",
        label: "GRUP WA KULINER SUMOBITO",
        subLabel: "Kuliner Sumobito",
        url: "#",
        icon: Link2,
        colorClass: "from-[#25D366] to-[#128C7E]", // WhatsApp Green
        shadowClass: "shadow-[0_8px_30px_rgb(37,211,102,0.25)]",
        iconBg: "bg-white/20 text-white",
        textColor: "text-white"
    },
    {
        id: "wa-minto",
        label: "NOMOR WHATSAPP MINTO",
        subLabel: "WA Admin Official",
        url: "https://wa.me/6281234567890",
        icon: MessageCircle,
        colorClass: "from-[#25D366] to-[#128C7E]", // WhatsApp Green
        shadowClass: "shadow-[0_8px_30px_rgb(37,211,102,0.25)]",
        iconBg: "bg-white/20 text-white",
        textColor: "text-white"
    },
    {
        id: "instagram",
        label: "INSTAGRAM OFFICIAL",
        subLabel: "Instagram Official",
        url: "https://instagram.com/updatesumobito",
        icon: Instagram,
        colorClass: "from-[#833AB4] via-[#F56040] to-[#FCAF45]", // Instagram Standard Gradient (Purple to Orange-Yellow)
        shadowClass: "shadow-[0_8px_30px_rgb(131,58,180,0.3)]",
        iconBg: "bg-white/20 text-white",
        textColor: "text-white"
    },
    {
        id: "tiktok",
        label: "TIKTOK OFFICIAL",
        subLabel: "TikTok Official",
        url: "#",
        // Custom SVG for TikTok
        icon: (props: any) => (
            <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
        ),
        colorClass: "bg-black", // TikTok is primarily black
        shadowClass: "shadow-[0_8px_30px_rgb(0,0,0,0.3)]",
        iconBg: "bg-[#25F4EE]/20 text-[#25F4EE]", // Cyan tint for icon
        textColor: "text-white"
    },
    {
        id: "facebook",
        label: "GRUP FACEBOOK OFFICIAL",
        subLabel: "FB Update Sumobito",
        url: "#",
        icon: Facebook,
        colorClass: "from-[#1877F2] to-[#0C5AB3]", // Facebook Blue
        shadowClass: "shadow-[0_8px_30px_rgb(24,119,242,0.3)]",
        iconBg: "bg-white/20 text-white",
        textColor: "text-white"
    }
];

// Dark background graphic
const BackgroundGlow = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#161210]">
        {/* Subtle gradient matching the brown theme */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#36271c] rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#4a3424] rounded-full blur-[120px] opacity-30" />
    </div>
);

export default function Home() {
    const containerVars = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVars = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="theme-biolink min-h-screen text-white font-sans relative overflow-x-hidden selection:bg-[#ebdcd0]/30 selection:text-white">
            <BackgroundGlow />

            <main className="max-w-md mx-auto px-5 py-10 relative">
                {/* Profile Header (Centered Style) */}
                <div className="flex flex-col items-center text-center mb-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative mb-5"
                    >
                        {/* Story Ring matching the brand color */}
                        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#8a6a4d] to-[#4a3424] p-[3px]">
                            <div className="rounded-full bg-[#161210] p-[3px] w-full h-full"></div>
                        </div>

                        <Avatar className="w-24 h-24 sm:w-28 sm:h-28 relative z-10 border border-transparent">
                            <AvatarImage src={profile.avatarUrl} className="object-cover" />
                            <AvatarFallback>US</AvatarFallback>
                        </Avatar>

                        {/* Verified Badge / Decorator (Optional, mimicking reference) */}
                        <div className="absolute bottom-0 right-0 z-20 bg-[#161210] rounded-full p-1 transform translate-x-1/4 translate-y-1/4">
                            <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    <h1 className="font-extrabold text-2xl sm:text-3xl leading-tight mb-3 tracking-tight">
                        @{profile.displayName}
                    </h1>

                    <div className="px-5 py-1.5 rounded-full bg-[#4a3424] text-[#ebdcd0] text-sm sm:text-base font-bold mb-5 shadow-sm inline-flex items-center justify-center">
                        {profile.category}
                    </div>

                    <div className="text-sm sm:text-base space-y-2 text-gray-200 font-medium mb-6">
                        {profile.bio.map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}
                    </div>

                    {/* Premium Profile Statistics */}
                    <div className="flex justify-center gap-3 sm:gap-4 w-full px-2">
                        <div className="flex flex-col items-center justify-center flex-1 py-2 sm:py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-sm">
                            <span className="font-black text-lg sm:text-xl text-[#ebdcd0]">{profile.stats.posts}</span>
                            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-white/50 uppercase mt-0.5">Kiriman</span>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-1 py-2 sm:py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.2)] scale-105 z-10">
                            <span className="font-black text-xl sm:text-2xl text-white">{profile.stats.followers}</span>
                            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-white/70 uppercase mt-0.5">Pengikut</span>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-1 py-2 sm:py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-sm">
                            <span className="font-black text-lg sm:text-xl text-[#ebdcd0]">{profile.stats.following}</span>
                            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-white/50 uppercase mt-0.5">Diikuti</span>
                        </div>
                    </div>
                </div>

                {/* Links List matches image 2 EXACTLY, upgraded premium style */}
                <motion.div
                    variants={containerVars}
                    initial="hidden"
                    animate="visible"
                    className="space-y-6"
                >
                    {links.map((link) => (
                        <motion.div key={link.id} variants={itemVars} className="flex flex-col">
                            {/* Premium Label above button - less bold, more elegant spacing */}
                            <h3 className="text-center font-semibold text-[#ebdcd0]/90 text-[13px] sm:text-[15px] tracking-[0.2em] uppercase mb-3 drop-shadow-sm pb-1 border-b border-[#ebdcd0]/20 mx-auto w-fit">
                                {link.label}
                            </h3>

                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block w-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#161210]"
                            >
                                {/* Premium Button Container with Dynamic Colors */}
                                <div className={cn(
                                    "relative flex items-stretch rounded-2xl overflow-hidden border border-white/20 transition-all duration-300",
                                    link.colorClass.startsWith("bg-") ? link.colorClass : `bg-gradient-to-r ${link.colorClass}`,
                                    link.shadowClass,
                                    link.isFull ? "opacity-80 grayscale-[40%]" : "group-hover:scale-[1.015] group-active:scale-[0.99] group-hover:shadow-2xl cursor-pointer",
                                    link.isFull && "cursor-not-allowed"
                                )}>

                                    {/* Subtle glass overlay highlight top & bottom */}
                                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>

                                    {/* Left Icon Area Area */}
                                    <div className="flex items-center justify-center p-4 border-r border-white/10 bg-black/10 z-10 backdrop-blur-md relative">
                                        <div className={cn("p-2 rounded-[14px] shadow-sm backdrop-blur-sm", link.iconBg)}>
                                            <link.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                                        </div>
                                    </div>

                                    {/* Right Text Area */}
                                    <div className="flex flex-1 items-center px-4 sm:px-5 py-3 sm:py-4 z-10 relative overflow-hidden">
                                        <div className="flex flex-1 min-w-0 items-center justify-between">
                                            <div className="flex items-center gap-2 truncate pr-2">
                                                <span className={cn("font-bold text-[14.5px] sm:text-[17px] tracking-wider drop-shadow-sm truncate", link.textColor)}>
                                                    {link.subLabel}
                                                </span>
                                                {link.isFull && (
                                                    <span className="flex-shrink-0 px-2 py-0.5 rounded-md bg-red-500/90 text-white text-[10px] sm:text-xs font-black tracking-wider uppercase shadow-sm">
                                                        Penuh
                                                    </span>
                                                )}
                                            </div>

                                            {/* Subtle arrow on hover */}
                                            {!link.isFull && (
                                                <div className={cn("opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75 flex-shrink-0", link.textColor)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer Credits */}
                <footer className="mt-14 mb-4 text-center">
                    <p className="text-white/40 text-xs font-medium tracking-wide">
                        &copy; {new Date().getFullYear()} Update Sumobito. All rights reserved.
                    </p>
                </footer>
            </main>
        </div>
    );
}
