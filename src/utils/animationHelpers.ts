
/**
 * Initializes animations by adding necessary classes to the document
 * This ensures animations start in the proper state and elements become visible
 */
export const initializeAnimations = () => {
  // Add a class to indicate JavaScript is loaded
  document.documentElement.classList.add('js-loaded');
  
  // Force all elements to become visible after a short delay in case observer fails
  setTimeout(() => {
    document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-in-right').forEach((el) => {
      el.classList.add('visible');
    });
  }, 1000);
};
