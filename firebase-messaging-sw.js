// firebase-messaging-sw.js - VERSIÓN CORREGIDA
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// CONFIGURACIÓN COMPLETA (igual que en tu app)
firebase.initializeApp({
  apiKey: "AIzaSyDH-Ii_v4nHkBv1-0exU7kvyrcK-vf0SnU",
  authDomain: "maicol-114de.firebaseapp.com",
  projectId: "maicol-114de",  // ← ¡IMPORTANTE! Agregar esto
  storageBucket: "maicol-114de.firebasestorage.app",
  messagingSenderId: "770237885252",
  appId: "1:770237885252:web:a4d98332eb4c74a4f30511",
  measurementId: "G-Z8V3X8W8G1"
});

const messaging = firebase.messaging();

// Manejo de mensajes en segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log("📩 Mensaje recibido en segundo plano:", payload);

  const notificationTitle = payload.notification?.title || "Alerta médica BB-8";
  const notificationOptions = {
    body: payload.notification?.body || "El paciente tiene valores críticos que requieren atención inmediata",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/39/BB-8_Star_Wars_icon.png",
    badge: "https://upload.wikimedia.org/wikipedia/commons/3/39/BB-8_Star_Wars_icon.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
