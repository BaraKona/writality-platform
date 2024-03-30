import { signal } from "@preact/signals-react";

export const counter = signal(0);
export const isFullscreen = signal(false);
export const isSidebarOpen = signal(false);

export const path = signal<string | null>(null);
