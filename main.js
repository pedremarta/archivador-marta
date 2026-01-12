

// 1. SCROLL TO TOP - Botón para volver arriba
// ============================================
/*document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (scrollTopBtn) {
        // Mostrar/ocultar botón según scroll
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        // Al hacer clic, volver arriba suavemente
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});


// 2. CONTADOR DE ELEMENTOS - Cuenta cards automáticamente
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const bookCount = document.getElementById('bookCount');
    
    if (bookCount) {
        // Contar cuántas cards hay en la página
        const cards = document.querySelectorAll('.card');
        const count = cards.length;
        
        // Actualizar el texto con el número
        if (count > 0) {
            bookCount.textContent = `${count} ${count === 1 ? 'libro' : 'libros'} en la biblioteca`;
        } else {
            bookCount.textContent = 'No hay libros aún';
        }
    }
});


// 3. EFECTO HOVER MEJORADO - Animación sutil en cards
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        // Cuando el ratón entra
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#ffffff';
        });
        
        // Cuando el ratón sale
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#F5F5F5';
        });
    });
});


// 4. FILTRO SIMPLE POR TAGS (opcional, puedes activarlo)
// ============================================
// Descomenta este código si quieres filtrar por tags

/*
document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.tag');
    const cards = document.querySelectorAll('.card');
    
    tags.forEach(tag => {
        tag.style.cursor = 'pointer';
        
        tag.addEventListener('click', function() {
            const tagText = this.textContent;
            
            cards.forEach(card => {
                const cardTags = Array.from(card.querySelectorAll('.tag')).map(t => t.textContent);
                
                if (cardTags.includes(tagText)) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                } else {
                    card.style.opacity = '0.3';
                }
            });
        });
    });
    
    // Doble clic en cualquier sitio para resetear filtro
    document.addEventListener('dblclick', function() {
        cards.forEach(card => {
            card.style.opacity = '1';
        });
    });
});
*/


// 5. ANIMACIÓN DE ENTRADA - Cards aparecen suavemente
// ============================================
/*document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    // Añadir animación inicial
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        
        // Aparecer con delay progresivo
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100); // 100ms entre cada card
    });
});*/

document.querySelector('.add-tab').addEventListener('click', function() {
    alert('Aquí podrías añadir una nueva sección');
    // O redirigir a una página de "crear nueva sección"
});


