const ws = new WebSocket('ws://localhost');
const form = document.getElementById('notification-form');

ws.onmessage = ({ data: notification }) => {
	alert(notification);
};

form.addEventListener('submit', e => {
	e.preventDefault();

	const notificationText = form.elements.text.value;
	ws.send(notificationText);
});
