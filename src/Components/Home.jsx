import Carousel from "./Carousel";
import { useState } from "react";
import BuySection from "./BuySection";
import logo from "../Assets/Logo.png";
import ToastAlternative from "./ToastAlternative";
import styles from "./Home.module.css";

export default function Home() {
  const [showQr, setShowQr] = useState(false);

  return (
    <div className="bg-dark p-4 text-white">
      <div
        className={`row m-auto border border-white rounded-4 row-gap-5 text-white-50 ${styles.customContainer}`}
        style={{
          boxShadow: "0px 0px 20px 4px rgba(194, 194, 194, 0.5)",
          fontFamily: "math",
        }}
      >
        <section className="d-flex align-items-center column-gap-3">
          <img src={logo} alt="Logo" height={70} />
          <h1 className="mb-0 text-white">TV Box</h1>
        </section>
        <h3 className={styles.title}>
          Transformá cualquier televisor con entrada HDMI en un verdadero Smart
          TV con el dispositivo TV Box MXQ Pro 6K.{" "}
        </h3>
        <section>
          <p style={{ textAlign: "justify" }} className={styles.paragraph}>
            Disfrutá de una experiencia de streaming ultra fluida con resolución
            6K, conectividad WiFi 5G y acceso directo a tus apps favoritas como
            Netflix, YouTube, Magis TV, Kodi y más. Ideal para disfrutar de
            series, películas,{" "}
            <b>
              <u>fútbol libre</u>
            </b>
            , videos y contenido en vivo desde la comodidad de tu hogar. <br />
            Incluye control remoto, fuente de alimentación, cable HDMI y es
            compatible con una amplia variedad de formatos multimedia.
            <br />
            <br />
            Características principales: <br />
          </p>
          <ul style={{ textAlign: "justify" }} className={styles.paragraph}>
            <li>Resolución Ultra HD 6K para imágenes nítidas y realistas.</li>
            <li>Procesador de alto rendimiento con soporte para WiFi 5G.</li>
            <li>Compatible con Netflix, YouTube, Kodi, Magis TV y más.</li>
            <li>
              Sistema Android para descargar aplicaciones desde Play Store.
            </li>
          </ul>
          <p
            style={{ textAlign: "justify" }}
            className={`${styles.paragraph} mb-0`}
          >
            Incluye control remoto, cable HDMI y cargador. Fácil instalación y
            configuración rápida. <br />
            Ya sea para mirar tus series favoritas, jugar en pantalla grande o
            transformar tu TV antigua, esta TV Box es una solución versátil y
            económica.
          </p>
        </section>

        <Carousel />
        <section className="row text-white">
          <span className="text-center" style={{ fontSize: "18px" }}>
            ¡Conseguí el tuyo por sólo
          </span>
          <span className="text-center fs-1 fw-bold">$ 40.000!</span>
        </section>
        {showQr && <BuySection />}
        {!showQr && (
          <button
            className="btn btn-success fw-bold m-auto py-2 col-10"
            style={{ fontSize: "17px", maxWidth: "300px" }}
            onClick={() => setShowQr(true)}
          >
            COMPRAR
          </button>
        )}
      </div>
      <ToastAlternative />
    </div>
  );
}
