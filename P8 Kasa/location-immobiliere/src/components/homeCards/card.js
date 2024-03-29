import React from 'react';
import { Link } from 'react-router-dom';
import styles from './card.module.scss';

// Importation des PropTypes pour définir les types de données attendus pour les propriétés //
import PropTypes from 'prop-types';

const Card = ({ id, title, cover }) => {
  // Les propriétés id, title et cover sont passées en tant qu'arguments au composant Card //

  return (
    // Utilisation de React Router Link pour créer un lien vers la page de location basée sur l'ID //
    <div className={styles.card}>
      <Link to={`/rental/${id}`} className={styles.card_Link}>
        <div className={styles.card_Overlay}></div>
        <img src={cover} alt='logement' className={styles.card_Cover} />
        <p className={styles.card_Title}>{title}</p>
      </Link>
    </div>
  );
};

// Définition des PropTypes pour spécifier les types attendus des propriétés //
Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;