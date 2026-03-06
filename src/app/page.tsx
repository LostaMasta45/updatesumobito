"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, MessageCircle, Instagram, Code, Facebook, Smartphone, ChevronDown, Users } from "lucide-react";
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
        id: "grup-wa-komunitas",
        label: "GRUP WA KOMUNITAS",
        subLabel: "Grup WA Official",
        icon: Users,
        colorClass: "from-[#25D366] to-[#128C7E]", // WhatsApp Green
        shadowClass: "shadow-[0_8px_30px_rgb(37,211,102,0.25)]",
        iconBg: "bg-white/20 text-white",
        textColor: "text-white",
        children: [
            {
                id: "grup-wa-2",
                label: "GRUP WA UPDATE SUMOBITO 2",
                subLabel: "Update Sumobito 2",
                url: "https://chat.whatsapp.com/GOY1ekDpq7E22deykKWwOJ?mode=wwc",
            },
            {
                id: "grup-wa-1",
                label: "GRUP WA UPDATE SUMOBITO 1",
                subLabel: "Update Sumobito 1",
                url: "https://chat.whatsapp.com/G3sNqN7LQGJGM4yFFnfebq",
                isFull: true
            },
            {
                id: "grup-wa-jual-beli",
                label: "GRUP WA JUAL BELI SUMOBITO",
                subLabel: "Jual Beli Sumobito",
                url: "https://chat.whatsapp.com/IfUEBB59L2pC85P0bA2RMp?mode=wwc",
            },
            {
                id: "grup-wa-kuliner",
                label: "GRUP WA KULINER SUMOBITO",
                subLabel: "Kuliner Sumobito",
                url: "https://chat.whatsapp.com/DdP1nDCK9dp2ada3hm7kne?mode=wwc",
            }
        ]
    },
    {
        id: "wa-minto",
        label: "NOMOR WHATSAPP MINTO",
        subLabel: "WA Admin Official",
        url: "https://api.whatsapp.com/send/?phone=62895623834500&text=Halo+Minto&type=phone_number&app_absent=0",
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
        url: "https://www.instagram.com/updatesumobito",
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
        url: "https://www.tiktok.com/@updatesumobito",
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
        url: "https://www.facebook.com/groups/303799680277553",
        icon: Facebook,
        colorClass: "from-[#1877F2] to-[#0C5AB3]", // Facebook Blue
        shadowClass: "shadow-[0_8px_30px_rgb(24,119,242,0.3)]",
        iconBg: "bg-white/20 text-white",
        textColor: "text-white"
    }
];

// Dark background graphic with premium noise and animated glow
const BackgroundGlow = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#120e0c]">
        {/* Animated Glow 1 */}
        <motion.div
            animate={{
                scale: [1, 1.1, 1],
                opacity: [0.35, 0.45, 0.35],
                x: [0, 20, 0],
                y: [0, -20, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#36271c] rounded-full blur-[130px]"
        />

        {/* Animated Glow 2 */}
        <motion.div
            animate={{
                scale: [1, 1.2, 1],
                opacity: [0.25, 0.35, 0.25],
                x: [0, -20, 0],
                y: [0, 20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#4a3424] rounded-full blur-[120px]"
        />

        {/* Subtle SVG Grain Texture */}
        <div
            className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
    </div>
);

const LinkItemCard = ({ link, itemVars }: { link: any, itemVars: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (link.children) {
        return (
            <motion.div variants={itemVars} className="flex flex-col">
                <h3 className="text-center font-semibold text-[#ebdcd0]/90 text-[13px] sm:text-[15px] tracking-[0.2em] uppercase mb-3 drop-shadow-sm pb-1 border-b border-[#ebdcd0]/20 mx-auto w-fit">
                    {link.label}
                </h3>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="group block w-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#161210] text-left"
                >
                    <div className={cn(
                        "relative flex items-stretch rounded-2xl overflow-hidden border border-white/20 transition-all duration-300",
                        link.colorClass.startsWith("bg-") ? link.colorClass : `bg-gradient-to-r ${link.colorClass}`,
                        link.shadowClass,
                        "hover:scale-[1.015] active:scale-[0.99] hover:shadow-2xl cursor-pointer"
                    )}>
                        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>

                        <div className="flex items-center justify-center p-4 border-r border-white/10 bg-black/10 z-10 backdrop-blur-md relative">
                            <div className={cn("p-2 rounded-[14px] shadow-sm backdrop-blur-sm", link.iconBg)}>
                                <link.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                            </div>
                        </div>

                        <div className="flex flex-1 items-center px-4 sm:px-5 py-3 sm:py-4 z-10 relative overflow-hidden">
                            <div className="flex flex-1 min-w-0 items-center justify-between">
                                <div className="flex flex-col truncate pr-2">
                                    <span className={cn("font-bold text-[14.5px] sm:text-[17px] tracking-wider drop-shadow-sm truncate", link.textColor)}>
                                        {link.subLabel}
                                    </span>
                                    <span className="text-[10px] sm:text-[11px] font-medium text-white/70 uppercase tracking-widest mt-0.5 opacity-90">
                                        {link.children.length} Komunitas
                                    </span>
                                </div>

                                {/* Enhanced UX affordance for Dropdown */}
                                <div className="flex items-center gap-2">
                                    <span className="hidden sm:inline-block text-[10px] font-bold text-white/60 uppercase tracking-wider bg-black/20 px-2 py-1 rounded-md backdrop-blur-md border border-white/5">
                                        {isOpen ? "TUTUP" : "LIHAT"}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={cn("flex-shrink-0 p-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 shadow-sm", link.textColor)}
                                    >
                                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 opacity-90" strokeWidth={2.5} />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            className="flex flex-col overflow-hidden"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="pl-4 pr-1 space-y-3 relative border-l-2 border-white/10 ml-6 pb-2">
                                {link.children.map((child: any) => (
                                    <a
                                        key={child.id}
                                        href={child.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn("group block w-full outline-none relative", child.isFull && "cursor-not-allowed")}
                                        onClick={(e) => child.isFull && e.preventDefault()}
                                    >
                                        <div className="absolute left-[-18px] top-1/2 w-4 border-t-2 border-white/10 -translate-y-1/2"></div>
                                        <div className={cn(
                                            "relative flex items-center p-3 sm:p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300",
                                            child.isFull ? "opacity-70 grayscale-[30%]" : "hover:bg-white/10 hover:border-white/20 active:scale-[0.98]"
                                        )}>
                                            <div className="p-2 mr-3 sm:mr-4 rounded-lg bg-[#25D366]/20 text-[#25D366] shadow-[0_0_15px_rgba(37,211,102,0.2)]">
                                                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </div>
                                            <div className="flex-1 flex justify-between items-center">
                                                <span className="font-semibold text-[13px] sm:text-sm text-[#ebdcd0] tracking-wide">
                                                    {child.subLabel}
                                                </span>
                                                {child.isFull && (
                                                    <span className="flex-shrink-0 px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold bg-red-500/80 text-white uppercase tracking-wider shadow-sm">
                                                        Penuh
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    }

    return (
        <motion.div variants={itemVars} className="flex flex-col">
            <h3 className="text-center font-semibold text-[#ebdcd0]/90 text-[13px] sm:text-[15px] tracking-[0.2em] uppercase mb-3 drop-shadow-sm pb-1 border-b border-[#ebdcd0]/20 mx-auto w-fit">
                {link.label}
            </h3>

            <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#161210]"
            >
                <div className={cn(
                    "relative flex items-stretch rounded-2xl overflow-hidden border border-white/20 transition-all duration-300",
                    link.colorClass.startsWith("bg-") ? link.colorClass : `bg-gradient-to-r ${link.colorClass}`,
                    link.shadowClass,
                    link.isFull ? "opacity-80 grayscale-[40%]" : "hover:scale-[1.015] active:scale-[0.99] hover:shadow-2xl cursor-pointer",
                    link.isFull && "cursor-not-allowed"
                )}>
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>

                    <div className="flex items-center justify-center p-4 border-r border-white/10 bg-black/10 z-10 backdrop-blur-md relative">
                        <div className={cn("p-2 rounded-[14px] shadow-sm backdrop-blur-sm", link.iconBg)}>
                            <link.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                        </div>
                    </div>

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
    );
};

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
                        <LinkItemCard key={link.id} link={link} itemVars={itemVars} />
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
