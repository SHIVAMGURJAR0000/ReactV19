import styles from "./Netflix.module.css"; // we can name anything in place of style
import styled from "styled-components";

export const SeriesCard=({data})=>{
  

    

 const{id, img_url, name, rating, description, cast, genre, watch_url}= data;
 
    // const btn_style = {};
    //styled component
    //two ways through object or literals (i like object way)
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
       
        <p >Summary:{description} </p>
        <p >Genere: {genre}</p>
        <p >Caste: {cast}</p>
      
        <a href={watch_url} target='_blank'>
            {/* <button style={
              btn_style
            }>Watch Now</button> */}
            <ButtonShivam>Watch</ButtonShivam>
        </a>
        </div>
       
    </li>);
}