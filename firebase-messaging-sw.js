// Importa Firebase dentro del service worker (compat v9)
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js");

// Configuración mínima requerida por Firebase Messaging
firebase.initializeApp({
  messagingSenderId: "770237885252"  // <-- ESTA es la única obligatoria
});

// Inicializa messaging
const messaging = firebase.messaging();

// Notificaciones cuando la app está cerrada
messaging.onBackgroundMessage((payload) => {
  console.log("📩 Mensaje recibido en segundo plano:", payload);

  const notificationTitle = payload.notification?.title || "Alerta médica";
  const notificationOptions = {
    body: payload.notification?.body || "El paciente tiene valores críticos.",
    // Si algún día pones un icono, solo lo agregas aquí:
    // icon: "icon.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
