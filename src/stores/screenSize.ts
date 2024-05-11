// stores/screenSize.js
import { writable } from 'svelte/store';

// Initial value and writable store
export const isMobile = writable(false);

// Function to update the store based on screen size
export function checkScreenSize() {
  isMobile.set(window.innerWidth <= 900);
}

// Event listener for window resize
export function setupScreenSizeListener() {
  // Check if code is running in a browser environment
  if (typeof window !== 'undefined') {
    // Initialize store based on initial window size
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup the event listener when the app is unloaded
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }

  // Return a no-op function if code is running in an environment without window (e.g., SSR)
  return () => {};
}