import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "./Home.module.css";

export default function BuySection() {
  const alias = "natalia.laplata";

  async function copyAliasToClipboard() {
    try {
      await navigator.clipboard.writeText(alias);

      const toastElement = document.getElementById("liveToast");
      if (toastElement) {
        const toast = new bootstrap.Toast(toastElement);
        toast.show();
      }
    } catch (err) {
      console.error("Error al copiar:", err);

      // Fallback para navegadores más viejos
      const textArea = document.createElement("textarea");
      textArea.value = alias;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
  }

  return (
    <div className="p-0 m-auto row justify-content-center row-gap-5">
      <section>
        <ol
          style={{
            lineHeight: "28px",
            textAlign: "justify",
            paddingLeft: "1rem",
          }}
        >
          <li>
            Antes de efectuar la compra escribinos <u>natalia_rq@hotmail.com</u>{" "}
            para coordinar la entrega. Si residís en el casco urbano de La
            Plata, el envío es gratis; ya que es un producto platense.
          </li>
          <li>
            Efectuá la transferencia a la cuenta con los siguientes datos:
          </li>
          <ul>
            <li>
              <u>Alias:</u> {alias}
              <i
                className="ms-3 fs-5 bi bi-clipboard d-none d-sm-inline"
                style={{ cursor: "pointer" }}
                onClick={copyAliasToClipboard}
              ></i>
              <br />
              <button
                className={`d-sm-none btn btn-sm text-white-50 ${styles.smCopyButton}`}
                onClick={copyAliasToClipboard}
              >
                Copiar Alias
              </button>
            </li>
            <li>
              <u>Titular:</u> Natalia Romina Quatela
            </li>
            <li>
              <u>Banco:</u> Banco de la Provincia de Buenos Aires
            </li>
          </ul>

          <li>
            Compartinos el comprobante a <u>natalia_rq@hotmail.com</u>
          </li>
          <li>!Y listo! Ya estás listo para empezar a disfrutar del TV Box.</li>
        </ol>
      </section>
    </div>
  );
}
