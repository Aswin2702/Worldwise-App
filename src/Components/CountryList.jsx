/* eslint-disable react/prop-types */
import { useCities } from "../Contexts/CitiesContext";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

function CountryList() {
  const { cities, isLoading } = useCities();
  const countries = cities.reduce((arr, curr) => {
    if (!arr.map((c) => c.country).includes(curr.country)) {
      return [
        ...arr,
        { country: curr.country, emoji: curr.emoji, id: curr.id },
      ];
    } else {
      return arr;
    }
  }, []);

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message={"Add your first city by clicking a city on the map"} />
    );
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
