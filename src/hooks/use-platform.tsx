"use client";

import { useState, useEffect } from "react";

export type Platform =
    | "android-app"
    | "ios-app"
    | "mobile-web"
    | "desktop-web";

export type PlatformInfo = {
    platform: Platform;
    isNativeApp: boolean;
    isAndroid: boolean;
    isIOS: boolean;
    isMobile: boolean;
    isDesktop: boolean;
    isWeb: boolean;
};

/**
 * Hook untuk mendeteksi platform yang sedang digunakan
 * Simplified version without Capacitor dependency (web-only)
 */
export function usePlatform(): PlatformInfo {
    const [platformInfo, setPlatformInfo] = useState<PlatformInfo>(() => {
        return {
            platform: "desktop-web",
            isNativeApp: false,
            isAndroid: false,
            isIOS: false,
            isMobile: false,
            isDesktop: true,
            isWeb: true,
        };
    });

    useEffect(() => {
        const isMobileDevice =
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            ) || window.innerWidth < 768;

        const platform: Platform = isMobileDevice ? "mobile-web" : "desktop-web";

        setPlatformInfo({
            platform,
            isNativeApp: false,
            isAndroid: false,
            isIOS: false,
            isMobile: isMobileDevice,
            isDesktop: !isMobileDevice,
            isWeb: true,
        });

        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            const newPlatform: Platform = isMobile ? "mobile-web" : "desktop-web";

            setPlatformInfo(prev => ({
                ...prev,
                platform: newPlatform,
                isMobile: isMobile,
                isDesktop: !isMobile,
            }));
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return platformInfo;
}
