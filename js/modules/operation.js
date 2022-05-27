export default function initOperation() {
    const operation = document.querySelector('[data-week]');
    const daysWeek = operation.dataset.week.split(', ').map(Number);
    const hours = operation.dataset.hour.split(', ').map(Number);
    const now = new Date();
    const dayWeek = now.getDay();
    const hour = now.getHours();

    const dayWeekOpen = daysWeek.indexOf(dayWeek) !== -1;
    const hourOpen = hour >= hours[0] && hour < hours[1];

    if (dayWeekOpen && hourOpen) {
        operation.classList.add('open');
    }
}