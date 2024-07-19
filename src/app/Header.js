import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.container}>
        <div className="img">
        <Image
      width={85} 
      height={85}
      position= 'left'
      margin-left= 'auto'
      src={"https://img.freepik.com/vetores-premium/vector-de-design-do-logotipo-da-nota-e-da-caneta_1009807-2713.jpg?w=740"} className="img"/>
        </div>
     
        <ul className={styles.socialLinks}>
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
              <span>Sobre</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/schiaparelli/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
              <span>Serviços</span>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
              <span>Comunidade</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
              <span>Seja membro(a)!</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}