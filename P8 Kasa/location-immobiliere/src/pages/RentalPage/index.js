//* Importation des modules nécessaires de la bibliothèque React et des styles *//
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

//* Importation des composants nécessaires du projet *//
import Header from "../../components/Header/header";
import Carrousel from "../../components/Carrousel/carrousel";
import Rating from "../../components/Rating/rating";
import Collapse from "../../components/Collapse/collapse";
import Footer from "../../components/Footer/footer";
//* Importation des données (logements) depuis un fichier JSON *//
import accomodationsData from "../../data/logements.json";

const RentalPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  //* Recherche des données du logement correspondant à l'identifiant dans le fichier logements.json *//
  const rentalData = accomodationsData.find(
    (accomodation) => accomodation.id === id
  );

  useEffect(() => {
    //* Vérifie si l'identifiant est valide *//
    if (!rentalData) {
      //* Redirection vers la page d'erreur si l'identifiant n'est pas trouvé *//
      navigate("/error");
    }
  }, [id, navigate, rentalData]);

  //* Condition pour afficher le contenu uniquement si l'identifiant est valide *//
  if (!rentalData) {
    return null;
  }
  const { title, location } = rentalData;

  return (
    <div className={styles.pageContainer}>
      <header>
        <Header />
      </header>
      <main>
        <div>
          <Carrousel pictures={rentalData.pictures} />
        </div>
        <div>
          <div className={styles.divHeadHost}>
            <div>
              <div className={styles.rentalHead}>
                <h1 className={styles.rentalHead_title}>{title}</h1>
                <h2 className={styles.rentalHead_location}>{location}</h2>
              </div>
              <div className={styles.rentalTags}>
                {rentalData.tags.map((tag, index) => (
                  <span className={styles.rentalTags_text} key={index}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.rentalHost}>
              <div className={styles.rentalInformations}>
                <p className={styles.rentalInformations_label}>
                  {rentalData.host.name}
                </p>
                <img
                  className={styles.rentalInformations_pic}
                  src={rentalData.host.picture}
                  alt={`Host: ${rentalData.host.name}`}
                />
              </div>
              <div className={styles.rentalInformations_rating}>
                <Rating rating={rentalData.rating} />
              </div>
            </div>
          </div>
          <div className={styles.rentalCollapses}>
            <Collapse
              customClass={styles.customWidth}
              title="Description"
              content={rentalData.description}
            />
            <Collapse
              customClass={styles.customWidth}
              title="Équipements"
              content={rentalData.equipments}
            />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RentalPage;
