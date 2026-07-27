const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwHl2rQMN-Ycj5BJUtRLFM_4wXQqbI64XiYHOvkUALBFAeCfefut6grhR89MyorL1H-Gg/exec";

// Animações (mantidas)
ScrollReveal().reveal('.hero-content', { distance: '60px', duration: 1500, origin: 'bottom' });
ScrollReveal().reveal('.card', { distance: '50px', duration: 1000, interval: 200, origin: 'bottom' });
ScrollReveal().reveal('.momento-card', { distance: '50px', duration: 1000, interval: 200, origin: 'bottom' });
ScrollReveal().reveal('.sobre, .pagamento', { duration: 1000 });

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formInscricao");
    
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector("button[type='submit']");
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = "Enviando...";
        submitBtn.disabled = true;

        const formData = new FormData(form);
        
        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                body: formData
            });

            alert("✅ Inscrição realizada com sucesso!\n\nRedirecionando para o pagamento...");

            fecharModal();
            form.reset();

            // Redireciona para Mercado Pago
            setTimeout(() => {
                window.location.href = "https://mpago.la/2sHo7mW";
            }, 1000);

        } catch (error) {
            console.error(error);
            alert("✅ Inscrição enviada!\n\nRedirecionando para o pagamento...");
            
            fecharModal();
            form.reset();
            
            setTimeout(() => {
                window.location.href = "https://mpago.la/2sHo7mW";
            }, 1000);
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
});

// Modal e WhatsApp
function abrirModal() {
    document.getElementById("modalInscricao").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modalInscricao").style.display = "none";
}

function enviarWhatsapp() {
    const nome = document.getElementById("nomeParticipante").value.trim();
    if (!nome) {
        alert("Por favor, digite seu nome.");
        return;
    }
    const msg = `Olá! Me chamo ${nome} e quero enviar o comprovante do 3° Encontro Mulheres Transformadas.`;
    window.open(`https://wa.me/5521994753223?text=${encodeURIComponent(msg)}`, "_blank");
}