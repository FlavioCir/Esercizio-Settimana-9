document.addEventListener("DOMContentLoaded", function () {
  interface Smartphone {
    credito: number;
    numeroChiamate: number;
  }

  class User implements Smartphone {
    credito = 0;
    numeroChiamate = 0;
    numeroTelefono: number;
    nomeUtente: string;

    constructor(credito: number, numeroTelefono: number, nomeUtente: string) {
      this.credito = credito;
      this.numeroTelefono = numeroTelefono;
      this.nomeUtente = nomeUtente;
    }

    public ricarica(unaRicarica: number): void {
      this.credito = this.credito + unaRicarica;
    }

    public chiamata(minutiDurata: number): void {
      this.numeroChiamate++;
      if ((+minutiDurata / 60) * 0.2 <= this.credito) {
        this.credito -= (+minutiDurata / 60) * 0.2;
        this.credito = +this.credito.toFixed(2);
      } else {
        alert("fatti una ricarica");
        this.numeroChiamate--;
      }
    }

    public numero404(creditoRes: number): void {
      alert(`il tuo credito residuo è: ${creditoRes} €`);
    }

    public getNumeroChiamate(): void {
      alert(`Oggi hai effettuato: ${this.numeroChiamate} chiamate`);
    }

    public azzeraChiamate(): void {
      this.numeroChiamate = 0;
    }
  }

  let PrimoUtente = new User(0, 3394578230, "Flavio");
  let SecondoUtente = new User(0, 3335566889, "Alessandro");
  let TerzoUtente = new User(0, 3249988777, "Alessia");

  console.log(PrimoUtente);
  console.log(SecondoUtente);
  console.log(TerzoUtente);

  let telefono = <HTMLInputElement>document.querySelector("#numero");
  let utenteLoggato = <HTMLElement>document.querySelector("#utente");
  let dispCredito = <HTMLElement>document.querySelector("#displayCredito");

  let dieciEuro = <HTMLElement>document.querySelector("#dieci");
  let ventiEuro = <HTMLElement>document.querySelector("#venti");
  let cinqueantaEuro = <HTMLElement>document.querySelector("#cinquanta");

  let login = <HTMLElement>document.querySelector("#login");
  let logout = <HTMLElement>document.querySelector("#logout");

  let chiamato = <HTMLInputElement>document.querySelector("#numeroChiam");
  let secondi = <HTMLInputElement>document.querySelector("#secondiChiam");
  let inoltra = <HTMLElement>document.querySelector("#inoltraChiam");
  let infoChiam = <HTMLElement>document.querySelector("#infoChiamate");
  let azzera = <HTMLElement>document.querySelector("#azzeraChiam");

  if (
    (logout !== null && login !== null) ||
    (dieciEuro !== null && login !== null) ||
    (ventiEuro !== null && login !== null) ||
    (cinqueantaEuro !== null && login !== null)
  ) {
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
          utenteLoggato.innerText = ` ${PrimoUtente.nomeUtente}`;
          dispCredito.innerText = `Il tuo credito residuo è pari a: ${PrimoUtente.credito}€`;
        }
        else if (+telefono.value === SecondoUtente.numeroTelefono) {
          utenteLoggato.innerText = ` ${SecondoUtente.nomeUtente}`;
          dispCredito.innerText = `Il tuo credito residuo è pari a: ${SecondoUtente.credito}€`;
        }
        else if (+telefono.value === TerzoUtente.numeroTelefono) {
          utenteLoggato.innerText = ` ${TerzoUtente.nomeUtente}`;
          dispCredito.innerText = `Il tuo credito residuo è pari a: ${TerzoUtente.credito}€`;
        }
      } else {
        alert("Non sei nostro cliente");
      }
    });
  }

  if (
    (logout !== null && login !== null) ||
    (dieciEuro !== null && login !== null) ||
    (ventiEuro !== null && login !== null) ||
    (cinqueantaEuro !== null && login !== null)
  ) {
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
      dispCredito.innerText = `Il tuo credito residuo è pari a: ${PrimoUtente.credito}€`
    } else if (+telefono.value === SecondoUtente.numeroTelefono) {
      SecondoUtente.ricarica(10);
      dispCredito.innerText = `Il tuo credito residuo è pari a: ${SecondoUtente.credito}€`
    } else if (+telefono.value === TerzoUtente.numeroTelefono) {
      TerzoUtente.ricarica(10);
      dispCredito.innerText = `Il tuo credito residuo è pari a: ${TerzoUtente.credito}€`
    } else {
      alert("Non sei un nostro cliente");
    }
  });
  ventiEuro.addEventListener("click", function () {
    if (+telefono.value === PrimoUtente.numeroTelefono) {
      PrimoUtente.ricarica(20);
      dispCredito.innerText = `Il tuo credito residuo è pari a: ${PrimoUtente.credito}€`
    } else if (+telefono.value === SecondoUtente.numeroTelefono) {
      SecondoUtente.ricarica(20);
      dispCredito.innerText = `Il tuo credito residuo è pari a: ${SecondoUtente.credito}€`
    } else if (+telefono.value === TerzoUtente.numeroTelefono) {
      TerzoUtente.ricarica(20);
      dispCredito.innerText = `Il tuo credito residuo è pari a: ${TerzoUtente.credito}€`
    } else {
      alert("Non sei un nostro cliente");
    }
  });
  cinqueantaEuro.addEventListener("click", function () {
    if (+telefono.value === PrimoUtente.numeroTelefono) {
      PrimoUtente.ricarica(50);
      dispCredito.innerText = `Il tuo credito residuo è pari a: ${PrimoUtente.credito}€`
    } else if (+telefono.value === SecondoUtente.numeroTelefono) {
      SecondoUtente.ricarica(50);
      dispCredito.innerText = `Il tuo credito residuo è pari a: ${SecondoUtente.credito}€`
    } else if (+telefono.value === TerzoUtente.numeroTelefono) {
      TerzoUtente.ricarica(50);
      dispCredito.innerText = `Il tuo credito residuo è pari a: ${TerzoUtente.credito}€`
    } else {
      alert("Non sei un nostro cliente");
    }
  });

  inoltra.addEventListener("click", function () {
    if (+telefono.value === PrimoUtente.numeroTelefono && +chiamato.value !== 404) {
        PrimoUtente.chiamata(Math.abs(+secondi.value))
        dispCredito.innerText = `Il tuo credito residuo è pari a: ${PrimoUtente.credito}€`
      } else if (+telefono.value === SecondoUtente.numeroTelefono && +chiamato.value !== 404) {
        SecondoUtente.chiamata(Math.abs(+secondi.value))
        dispCredito.innerText = `Il tuo credito residuo è pari a: ${SecondoUtente.credito}€`
      } else if (+telefono.value === TerzoUtente.numeroTelefono && +chiamato.value !== 404) {
        TerzoUtente.chiamata(Math.abs(+secondi.value))
        dispCredito.innerText = `Il tuo credito residuo è pari a: ${TerzoUtente.credito}€`
      }else if (+telefono.value === PrimoUtente.numeroTelefono && +chiamato.value === 404){
          PrimoUtente.numero404(PrimoUtente.credito)
      }else if (+telefono.value === SecondoUtente.numeroTelefono && +chiamato.value === 404){
          SecondoUtente.numero404(SecondoUtente.credito)
      }else if (+telefono.value === TerzoUtente.numeroTelefono && +chiamato.value === 404){
          TerzoUtente.numero404(TerzoUtente.credito)
      }
  });

  infoChiam.addEventListener("click", function () {
    if (+telefono.value === PrimoUtente.numeroTelefono) {
        return PrimoUtente.getNumeroChiamate()
    }else if(+telefono.value === SecondoUtente.numeroTelefono){
        return SecondoUtente.getNumeroChiamate()
    }else if(+telefono.value === TerzoUtente.numeroTelefono){
        return TerzoUtente.getNumeroChiamate()
    }
  });

  azzera.addEventListener("click", function () {
    if (+telefono.value === PrimoUtente.numeroTelefono) {
        PrimoUtente.azzeraChiamate();
        alert("Sono state azzerate le chiamate");
    }else if(+telefono.value === SecondoUtente.numeroTelefono){
        SecondoUtente.azzeraChiamate();
        alert("Sono state azzerate le chiamate");
    }else if(+telefono.value === TerzoUtente.numeroTelefono){
        TerzoUtente.azzeraChiamate();
        alert("Sono state azzerate le chiamate");
    }
  });
});

