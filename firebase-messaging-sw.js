// Importa Firebase dentro del service worker
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js");

// Configuración de Firebase (solo se usa senderId aquí)
firebase.initializeApp({
  messagingSenderId: "770237885252"
});

// Inicializa messaging
const messaging = firebase.messaging();

// Listener de mensajes cuando la app está cerrada
messaging.onBackgroundMessage((payload) => {
  console.log("Mensaje recibido en segundo plano:", payload);

  const notificationTitle = payload.notification?.title || "Alerta médica";
  const notificationOptions = {
    body: payload.notification?.body || "Tienes una nueva alerta.",
    icon: "/icon.png" // opcional
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});