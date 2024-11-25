// NAME: HomeWhereYouBelong
// AUTHOR: yodaluca23
// DESCRIPTION: Move Home Button Next to Navigation on Spotify v1.2.46+.

(function HomeWhereYouBelong() {
    function waitForElements() {
        const homeButton = document.querySelector('button[aria-label="Home"]');
        const containerDiv = document.querySelector('div.custom-navlinks-scrollable_container');

        if (homeButton && containerDiv) {
            containerDiv.prepend(homeButton);
            containerDiv.style.display = 'flex';
            containerDiv.style.alignItems = 'center';
            console.log("[HomeWhereYouBelong] Home button successfully moved.");
            observer.disconnect();
        }
    }

    const observer = new MutationObserver(waitForElements);
    observer.observe(document.body, { childList: true, subtree: true });

	waitForElements();
})();
