// NAME: HomeWhereYouBelong
// AUTHOR: yodaluca23
// DESCRIPTION: Move Home Button Next to Navigation on Spotify v1.2.46+.

(function HomeWhereYouBelong() {
    function waitForElements() {
        const homeButton = document.querySelector('button[aria-label="Home"]');
        const goForwardButton = document.querySelector('button[aria-label="Go forward"]');

        if (homeButton && goForwardButton) {
            goForwardButton.parentNode.insertBefore(homeButton, goForwardButton.nextSibling);

            console.log("[HomeWhereYouBelong] Home button successfully moved.");
            observer.disconnect();
        }

    }

    const observer = new MutationObserver(waitForElements);
    observer.observe(document.body, { childList: true, subtree: true });

	waitForElements();
})();
