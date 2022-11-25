document.addEventListener("DOMContentLoaded", function () {
    var User = /** @class */ (function () {
        function User(credito, numeroTelefono, nomeUtente) {
            this.credito = 0;
            this.numeroChiamate = 0;
            this.credito = credito;
            this.numeroTelefono = numeroTelefono;
            this.nomeUtente = nomeUtente;
        }
        User.prototype.ricarica = function (unaRicarica) {
            this.credito = this.credito + unaRicarica;
        };
        User.prototype.chiamata = function (minutiDurata) {
            this.numeroChiamate++;
            if ((+minutiDurata / 60) * 0.2 <= this.credito) {
                this.credito -= (+minutiDurata / 60) * 0.2;
                this.credito = +this.credito.toFixed(2);
            }
            else {
                alert("fatti una ricarica");
                this.numeroChiamate--;
            }
        };
        User.prototype.numero404 = function (creditoRes) {
            alert("il tuo credito residuo \u00E8: ".concat(creditoRes, " \u20AC"));
        };
        User.prototype.getNumeroChiamate = function () {
            alert("Oggi hai effettuato: ".concat(this.numeroChiamate, " chiamate"));
        };
        User.prototype.azzeraChiamate = function () {
            this.numeroChiamate = 0;
        };
        return User;
    }());
    var PrimoUtente = new User(0, 3394578230, "Flavio");
    var SecondoUtente = new User(0, 3335566889, "Alessandro");
    var TerzoUtente = new User(0, 3249988777, "Alessia");
    console.log(PrimoUtente);
    console.log(SecondoUtente);
    console.log(TerzoUtente);
    var telefono = document.querySelector("#numero");
    var utenteLoggato = document.querySelector("#utente");
    var dispCredito = document.querySelector("#displayCredito");
    var dieciEuro = document.querySelector("#dieci");
    var ventiEuro = document.querySelector("#venti");
    var cinqueantaEuro = document.querySelector("#cinquanta");
    var login = document.querySelector("#login");
    var logout = document.querySelector("#logout");
    var chiamato = document.querySelector("#numeroChiam");
    var secondi = document.querySelector("#secondiChiam");
    var inoltra = document.querySelector("#inoltraChiam");
    var infoChiam = document.querySelector("#infoChiamate");
    var azzera = document.querySelector("#azzeraChiam");
    if ((logout !== null && login !== null) ||
        (dieciEuro !== null && login !== null) ||
        (ventiEuro !== null && login !== null) ||
        (cinqueantaEuro !== null && login !== null)) {
        login.addEventListener("click", function () {
            if (+telefono.value === PrimoUtente.numeroTelefono || +telefono.value === SecondoUtente.numeroTelefono || +telefono.value === TerzoUtente.numeroTelefono) {
                dieciEuro.style.display = "inline-block";
                ventiEuro.style.display = "inline-block";
                cinqueantaEuro.style.display = "inline-block";
                login.style.display = "none";
                telefono.disabled = true;
                logout.style.display = "inline-block";
                chiamato.style.display = "block";
                secondi.style.display = "block";
                inoltra.style.display = "block";
                infoChiam.style.display = "inline-block";
                azzera.style.display = "inline-block";
                if (+telefono.value === PrimoUtente.numeroTelefono) {
                    utenteLoggato.innerText = " ".concat(PrimoUtente.nomeUtente);
                    dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(PrimoUtente.credito, "\u20AC");
                }
                else if (+telefono.value === SecondoUtente.numeroTelefono) {
                    utenteLoggato.innerText = " ".concat(SecondoUtente.nomeUtente);
                    dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(SecondoUtente.credito, "\u20AC");
                }
                else if (+telefono.value === TerzoUtente.numeroTelefono) {
                    utenteLoggato.innerText = " ".concat(TerzoUtente.nomeUtente);
                    dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(TerzoUtente.credito, "\u20AC");
                }
            }
            else {
                alert("Non sei nostro cliente");
            }
        });
    }
    if ((logout !== null && login !== null) ||
        (dieciEuro !== null && login !== null) ||
        (ventiEuro !== null && login !== null) ||
        (cinqueantaEuro !== null && login !== null)) {
        logout.addEventListener("click", function () {
            if (dieciEuro.style.display === "inline-block") {
                dieciEuro.style.display = "none";
                ventiEuro.style.display = "none";
                cinqueantaEuro.style.display = "none";
                login.style.display = "inline-block";
                telefono.disabled = false;
                logout.style.display = "none";
                chiamato.style.display = "none";
                secondi.style.display = "none";
                inoltra.style.display = "none";
                infoChiam.style.display = "none";
                azzera.style.display = "none";
                telefono.value = "";
                utenteLoggato.innerText = "";
                dispCredito.innerText = "";
            }
        });
    }
    dieciEuro.addEventListener("click", function () {
        if (+telefono.value === PrimoUtente.numeroTelefono) {
            PrimoUtente.ricarica(10);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(PrimoUtente.credito, "\u20AC");
        }
        else if (+telefono.value === SecondoUtente.numeroTelefono) {
            SecondoUtente.ricarica(10);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(SecondoUtente.credito, "\u20AC");
        }
        else if (+telefono.value === TerzoUtente.numeroTelefono) {
            TerzoUtente.ricarica(10);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(TerzoUtente.credito, "\u20AC");
        }
        else {
            alert("Non sei un nostro cliente");
        }
    });
    ventiEuro.addEventListener("click", function () {
        if (+telefono.value === PrimoUtente.numeroTelefono) {
            PrimoUtente.ricarica(20);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(PrimoUtente.credito, "\u20AC");
        }
        else if (+telefono.value === SecondoUtente.numeroTelefono) {
            SecondoUtente.ricarica(20);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(SecondoUtente.credito, "\u20AC");
        }
        else if (+telefono.value === TerzoUtente.numeroTelefono) {
            TerzoUtente.ricarica(20);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(TerzoUtente.credito, "\u20AC");
        }
        else {
            alert("Non sei un nostro cliente");
        }
    });
    cinqueantaEuro.addEventListener("click", function () {
        if (+telefono.value === PrimoUtente.numeroTelefono) {
            PrimoUtente.ricarica(50);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(PrimoUtente.credito, "\u20AC");
        }
        else if (+telefono.value === SecondoUtente.numeroTelefono) {
            SecondoUtente.ricarica(50);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(SecondoUtente.credito, "\u20AC");
        }
        else if (+telefono.value === TerzoUtente.numeroTelefono) {
            TerzoUtente.ricarica(50);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(TerzoUtente.credito, "\u20AC");
        }
        else {
            alert("Non sei un nostro cliente");
        }
    });
    inoltra.addEventListener("click", function () {
        if (+telefono.value === PrimoUtente.numeroTelefono && +chiamato.value !== 404) {
            PrimoUtente.chiamata(Math.abs(+secondi.value));
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(PrimoUtente.credito, "\u20AC");
        }
        else if (+telefono.value === SecondoUtente.numeroTelefono && +chiamato.value !== 404) {
            SecondoUtente.chiamata(Math.abs(+secondi.value));
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(SecondoUtente.credito, "\u20AC");
        }
        else if (+telefono.value === TerzoUtente.numeroTelefono && +chiamato.value !== 404) {
            TerzoUtente.chiamata(Math.abs(+secondi.value));
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(TerzoUtente.credito, "\u20AC");
        }
        else if (+telefono.value === PrimoUtente.numeroTelefono && +chiamato.value === 404) {
            PrimoUtente.numero404(PrimoUtente.credito);
        }
        else if (+telefono.value === SecondoUtente.numeroTelefono && +chiamato.value === 404) {
            SecondoUtente.numero404(SecondoUtente.credito);
        }
        else if (+telefono.value === TerzoUtente.numeroTelefono && +chiamato.value === 404) {
            TerzoUtente.numero404(TerzoUtente.credito);
        }
    });
    infoChiam.addEventListener("click", function () {
        if (+telefono.value === PrimoUtente.numeroTelefono) {
            return PrimoUtente.getNumeroChiamate();
        }
        else if (+telefono.value === SecondoUtente.numeroTelefono) {
            return SecondoUtente.getNumeroChiamate();
        }
        else if (+telefono.value === TerzoUtente.numeroTelefono) {
            return TerzoUtente.getNumeroChiamate();
        }
    });
    azzera.addEventListener("click", function () {
        if (+telefono.value === PrimoUtente.numeroTelefono) {
            PrimoUtente.azzeraChiamate();
            alert("Sono state azzerate le chiamate");
        }
        else if (+telefono.value === SecondoUtente.numeroTelefono) {
            SecondoUtente.azzeraChiamate();
            alert("Sono state azzerate le chiamate");
        }
        else if (+telefono.value === TerzoUtente.numeroTelefono) {
            TerzoUtente.azzeraChiamate();
            alert("Sono state azzerate le chiamate");
        }
    });
});
