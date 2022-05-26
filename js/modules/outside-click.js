export default function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    function handleOutsideClick(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute(outside);

            events.forEach((item) => {
                html.removeEventListener(item, handleOutsideClick);
            });

            callback();
        }
    }

    if (!element.hasAttribute(outside)) {
        events.forEach((item) => {
            setTimeout(() => {
                html.addEventListener(item, handleOutsideClick);
            }, 0)
        });

        element.setAttribute(outside, '');
    }
}