// NAME: SpicyTracker
// AUTHOR: yodaluca23
// DESCRIPTION: Remove tracking parameter "?si=" from Spotify share links.

(function SpicyTracker() {

    // Override clipboard write function
    const originalWriteText = navigator.clipboard.writeText;
    navigator.clipboard.writeText = function (text) {
        // Check if the text contains the '?si=' parameter
        if (text.includes('?si=') || text.includes('&si=') || 
           text.includes('?pt=') || text.includes('&pt=') || 
           text.includes('?context=') || text.includes('&context=')) {
           // Remove the '?si=', '&si=', '?pt=', '&pt=', '?context=', '&context=' parameters and anything following them
           const cleanedText = text.replace(/([?&](si|pt|context)=[^&]*)/g, '');
           return originalWriteText.call(navigator.clipboard, cleanedText);
        }


        // If no modification needed, just call the original function
        return originalWriteText.call(navigator.clipboard, text);
    };

    console.log("[SpicyTracker v1.1] Overwrote clipboard function.");
    
})();
