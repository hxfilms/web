// Botón scroll
const scrollToTopButton = document.getElementById('scroll-to-top');

//Cookies
// Función para establecer una cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; secure; samesite=Lax";
}

// Función para obtener el valor de una cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Función para eliminar una cookie
function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=0; path=/; secure; samesite=Lax';
}

// --- Ejemplo básico de banner de consentimiento ---
document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const rejectCookiesButton = document.getElementById('reject-cookies');

    if (cookieBanner && acceptCookiesButton && rejectCookiesButton) {
        // Verificar si el usuario ya ha aceptado las cookies
        if (!getCookie('cookieConsent')) {
            cookieBanner.style.display = 'block';
        }

        acceptCookiesButton.addEventListener('click', () => {
            setCookie('cookieConsent', 'accepted', 365); // Cookie de consentimiento por 1 año
            cookieBanner.style.display = 'none';
            // Aquí puedes iniciar la carga de cookies no esenciales
            console.log('Cookies aceptadas');
        });

        rejectCookiesButton.addEventListener('click', () => {
            setCookie('cookieConsent', 'rejected', 365); // Recordar rechazo por 1 año
            cookieBanner.style.display = 'none';
            // Aquí puedes evitar la carga de cookies no esenciales
            console.log('Cookies rechazadas');
            // Opcional: Eliminar cualquier cookie no esencial que se haya establecido previamente
            // deleteCookie('nombreDeCookieNoEsencial');
        });
    }
});

// Mostrar/ocultar el botón al hacer scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Cambia 300 al número de píxeles que quieras para que aparezca el botón
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

// Desplazamiento suave al hacer clic en el botón
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const servicioItems = document.querySelectorAll('.servicios-grid .servicio-item');

servicioItems.forEach(item => {
    const image = item.querySelector('img');
    image.addEventListener('click', () => {
        // Cierra cualquier descripción abierta
        servicioItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        // Abre/cierra la descripción del item clickeado
        item.classList.toggle('active');
    });
});




// Nota: El formulario de contacto necesitaría un backend para ser funcional.
// El perfil de Instagram se incrustaría con un código proporcionado por Instagram.
// Asegúrate de reemplazar los placeholders con tus imágenes, videos e información real.
// También necesitarás las imágenes de los iconos de Instagram y WhatsApp (instagram-icon.png, whatsapp-icon.png) en la misma carpeta.