import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.container}>
        <ul className={styles.socialLinks}>
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/schiaparelli/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
        <div className={styles.info}>
          <p>Data de criação: desde 2007 contra o capitalismo.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}