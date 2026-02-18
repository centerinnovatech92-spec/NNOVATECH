window.onload = function () {
    const loginForm = document.getElementById("loginForm");
    const usuarioInput = document.getElementById("usuario");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    const mensaje = document.getElementById("mensaje");
    const submitBtn = loginForm.querySelector("button");
    const loginCard = document.querySelector(".login-card");

    // VALIDACIÓN EN TIEMPO REAL
    function validarCampos() {
        let valido = true;

        if (usuarioInput.value.trim().length < 4) {
            usuarioInput.classList.add("invalid");
            usuarioInput.classList.remove("valid");
            valido = false;
        } else {
            usuarioInput.classList.add("valid");
            usuarioInput.classList.remove("invalid");
        }

        if (passwordInput.value.trim().length < 6) {
            passwordInput.classList.add("invalid");
            passwordInput.classList.remove("valid");
            valido = false;
        } else {
            passwordInput.classList.add("valid");
            passwordInput.classList.remove("invalid");
        }

        submitBtn.disabled = !valido;
    }

    usuarioInput.addEventListener("input", validarCampos);
    passwordInput.addEventListener("input", validarCampos);

    // MOSTRAR / OCULTAR CONTRASEÑA
    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        } else {
            passwordInput.type = "password";
            this.innerHTML = '<i class="fa-solid fa-eye"></i>';
        }
    });

    // SUBMIT LOGIN
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (submitBtn.disabled) return;

        const usuario = usuarioInput.value.trim();
        const password = passwordInput.value.trim();

        // ANIMACION BOTON
        submitBtn.classList.add("loading");

        setTimeout(() => {
            submitBtn.classList.remove("loading");

            if (usuario === "admin" && password === "123456") {
                mensaje.className = "success";
                mensaje.textContent = "Login correcto. Redirigiendo...";
                loginCard.style.transform = "scale(1.05) rotate(-1deg)";
                setTimeout(() => {
                    window.location.href = "inicio.html";
                }, 700);
            } else {
                mensaje.className = "error";
                mensaje.textContent = "Credenciales incorrectas";
                loginCard.animate([
                    { transform: 'translateX(0px)' },
                    { transform: 'translateX(-10px)' },
                    { transform: 'translateX(10px)' },
                    { transform: 'translateX(-10px)' },
                    { transform: 'translateX(10px)' },
                    { transform: 'translateX(0px)' }
                ], { duration: 400 });
            }
        }, 600);
    });
};
