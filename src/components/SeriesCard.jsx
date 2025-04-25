import styles from "./Netflix.module.css"; 
import styled from "styled-components";

export const SeriesCard=({data})=>{
  // Tailwind
  // go to website ans set  https://v3.tailwindcss.com/docs/guides/vite

    

 const{id, img_url, name, rating, description, cast, genre, watch_url}= data;
 
   
        const ButtonShivam = styled.button({
        padding:"1.2rem 2.4rem",
        border: "none",
        fontSize:"1.6rem",
        backgroundColor:`${rating>=8.5? "#7dcea0":"#f7dc6f"}`,
        color:"var(--btn-color)",
        fontWeight: "bold",
        cursor: "pointer",
        });
    

    const ratingClass = rating>=8.5?styles.super_hit: styles.average;
    return (
    <li className={styles.card} key={id}>
        <div>
            <img src={img_url} alt={name} width="40%" height="40%" />
        </div>

        <div className={styles["card-content"]}> 
           
        <h2>Name: {name}</h2>
      
        <h3>Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span> </h3>
       
        <p className="text-3xl font-bold underline" >Summary:{description} </p>
        <p >Genere: {genre}</p>
        <p >Caste: {cast}</p>
      
        <a href={watch_url} target='_blank'>
            
            <ButtonShivam>Watch</ButtonShivam>
        </a>
        </div>
       
    </li>);
}