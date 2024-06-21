import { writable } from 'svelte/store';

export const isSidebarOpen = writable(false);
export const theme = writable('default');
export const screenWidth = writable(768);

export function toggleSidebar() {
  isSidebarOpen.update(open => !open);
}

export function toggleTheme() {
  theme.update((currentTheme: string) => (currentTheme === 'default' ? 'dark' : 'default'));
}

export function setTheme(newTheme: string) {
  theme.set(newTheme);
}

export function updateScreenWidth(width: number) {
  screenWidth.set(width);
}