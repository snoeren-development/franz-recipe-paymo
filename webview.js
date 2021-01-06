module.exports = Franz => {
    /**
     * Get the notification count.
     *
     * @return void
     */
    function getNotifications() {
        const badge = document.querySelector('.notifications-MuiBadge-colorError');

        if (badge && badge.innerText) {
            Franz.setBadge(parseInt(badge.innerText));
        }
    }

    Franz.loop(getNotifications);
}
