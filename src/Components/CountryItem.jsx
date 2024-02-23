/* eslint-disable react/prop-types */
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span role="img">
        <img src={country.emoji} height={24} width={24} />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
