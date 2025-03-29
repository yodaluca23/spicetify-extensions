// NAME: SpicyTracker
// AUTHOR: yodaluca23
// DESCRIPTION: Remove tracking parameters such as "?si=" from Spotify share links.

(function SpicyTracker() {

    // Save the original writeText function
    const originalWriteText = navigator.clipboard.writeText;

    // Overwrite the writeText function
    navigator.clipboard.writeText = function (text) {
        try {
            // Try to parse the text as a URL
            const url = new URL(text);

            // Clear all parameters, Spotify never uses them other than for tracking I believe create an issue if this is not the case
            url.search = '';

            // Return the cleaned URL
            return originalWriteText.call(navigator.clipboard, url.toString());
            
        } catch (e) {

            // If it's not a valid URL, just call the original function
            return originalWriteText.call(navigator.clipboard, text);
        }
    };

    console.log("[SpicyTracker v2.0] Overwrote clipboard function.");
    
})();
