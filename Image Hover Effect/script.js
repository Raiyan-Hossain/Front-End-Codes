function resetScroll(index) {
    var scrollableElement = document.getElementById('scrollable-' + index);
    if (scrollableElement) {
        scrollableElement.scrollTop = 0;
    }
}