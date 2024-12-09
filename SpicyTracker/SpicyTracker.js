// NAME: SpicyTracker
// AUTHOR: yodaluca23
// DESCRIPTION: Remove tracking parameter "?si=" from Spotify share links.

(function SpicyTracker() {

    // Override clipboard write function
    const originalWriteText = navigator.clipboard.writeText;
    navigator.clipboard.writeText = function (text) {
        // Check if the text contains the '?si=' parameter
        if (text.includes('?si=')) {
            // Remove the '?si=' parameter and anything following it
            const cleanedText = text.replace(/(\?si=[^&]*)/g, '');
            return originalWriteText.call(navigator.clipboard, cleanedText);
        }

        // If no modification needed, just call the original function
        return originalWriteText.call(navigator.clipboard, text);
    };

    console.log("[SpicyTracker v1.0] Overwrote clipboard function.");
    
})();