import styled from "styled-components";

const StyledWeather = styled.div`
    width: 100%;
    height: 200vh;
    background-position: center;
    background-size: cover;
    background-image: url("https://cdn.wallpapersafari.com/80/81/4VKLIo.jpg");

  .overlay {
    width: 100%;
    height: 200vh;
    z-index: 0.9;
    background-color: rgba(3, 2, 2, 0.2);
  }

  h2 {
    font-family: Gumela;
    font-size: bold;
  }
  h1 {
    text-align: center;
    font-size: 40px;
    color: antiquewhite;
    padding-top: 10%;
    padding-bottom: 3%;
    margin: 0% !important;
    font-family: Gumela;
  }
  .search-container {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
  .search-input {
    width: 40vw;
    height:5vh;
    border-radius: 10px;
    border: none;
  }

.section {
    width: 40%;
    height:40vh;
    padding: 2rem;
    display: flex;
    justify-content: center;
    border-radius: 5.7rem;
    color: white;
}
  .section__temperature {
    display: flex;
    align-items: center;
    gap: 6rem;
    justify-content: center;
    background-color: rgba(53, 157, 231, 0.7);
}
.container  {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: initial;
    flex-direction: column;
    padding-top: 4rem;
}
  .search-button {
    background: linear-gradient(102.57deg,#5abdef,#e58d12 100%,#f5bb3d 0);
    border-radius: 4.25rem;
    font-size: 1rem;
    color: rgb(5, 5, 5);
    letter-spacing: .03125rem;
    font-weight: bold;
    height: 2.5rem;
    width: 7rem;
    cursor: pointer;
    font-family: Basis-regular;
    border: none;
  }
  .five-day-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.5rem;
    padding: 4%;
    padding-left: 6%;
  }
  .current-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40vw;
    height:0vh;
    border-radius: 20px;
  }
  .Name {
    font-size: 40px;
    font-weight: 600;
    text-align: start;
    font-family: Gumela;
  }
.icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.temperature>h1 {
    font-size: 60px;
}
.image-icon {
    width: 70%;
}
.main-container {
  display: flex;
  flex-direction: row;
  gap:100px;
  padding-top: 3rem;
  padding-bottom: 40px;
}
.left-container {
  width: 30vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:stretch;
  border-radius: 50px;
  padding-left: 50px;
}
.right {
  padding: 0 45px 0px;
  transition: all .3s;
  margin: 20px;
  background-color: white;
  border-radius: 160px;
  width: 30vw;  
}
.bottom-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    padding-top: 10%;
    padding-left: 4%;
    height: 80vh;
    width:89vw;

;

}
.inside-container {
    width: 13vw;
    height:15vh;
    padding-top: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 0%;
    display: flex;
    flex-direction: column;
    border-radius: 1.7rem;
    color: white;
    font-size: 30px;
    justify-content: center;
    align-items: center;
    font-family: Gumela;
    font-weight: bold;
    background-color: rgba(53, 157, 231, 0.7);
}
.min-temp {
    padding-top: 10px;
    font-size: 20px;
    font-weight: 800;
}
.max-temp {
    font-size: 20px;
    font-weight: 800;
}
.five-day-header {
    font-size: 40px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Gumela;
    border-radius: 20%;
    color: #f8f3f7;
    opacity: 0.9;
}
.inside-five-container {
    width: 15vw;
    height:28vh;
    padding-top: 1rem;
    padding-bottom: 0%;
    display: flex;
    flex-direction: column;
    border-radius: 1.7rem;
    color: white;
    font-size: 30px;
    align-items: center;
    font-family: Gumela;
    font-weight: bold;
    background-color: rgba(23, 4, 22, 0.7);
}
.card-content {
    font-size: 20px;
    font-weight: bold;
    font-family: Gumela;
    padding-top: 6%;
    word-spacing: 5px;
}
.five-image-icon {
    width: 50%;
}
.card-content-title {
    font-size: 25px;
    font-weight: bold;
    font-family: Gumela;
    color: #25d1d4;
    padding-top: 3%;
}
.inside-icon {
    width: 40px;
}

// Media query for small devices

@media screen and (max-width:490px) {
    width: 100%;
    height: 390vh;
    .overlay {
        height: 390vh;
    }
    .five-day-container {
    display: grid;
    padding-left: 15%;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    gap: 2rem;
    }
    .inside-five-container {
    width: 55vw;
    height:38vh;
    padding: 2rem;
    padding-bottom: 0%;
    background-color: rgba(23, 4, 22, 0.7);
}
.section {
    width: 50%;
    height:35vh;
    padding: 2rem;
    display: flex;
    font-size: 10px;
    justify-content: center;
    border-radius: 5.7rem;
    color: white;
}
.icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
  .section__temperature {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 10px;
    justify-content: center;
    background-color: rgba(53, 157, 231, 0.7);
}
.bottom-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    height: 80vh;
    align-items: center;
    padding-left: 12%;
;

}
h1 {
    font-size: 27px !important;
}
.five-day-header {
    font-size: 30px;
    padding: 3%;
}
.title {
    font-size: 20px;
}
.min-temp {
    padding-top: 2px;
    font-size: 11px;
    font-weight: 800;
}
.max-temp {
    font-size: 11px;
    font-weight: 800;
}

  }

  // Media query for large devices

  @media screen and (max-width: 900px) and (min-width: 500px) {
    width: 100%;
    height: 390vh;
    .overlay {
        height: 390vh;
    }
    .five-day-container {
    display: grid;
    padding-left: 5%;
    grid-template-columns: repeat(2, 0.4fr);
    width: 100%;
    gap: 3rem;
    }
    .inside-five-container {
    width: 25vw;
    height:38vh;
    padding: 1rem;
    padding-bottom: 0%;
    background-color: rgba(23, 4, 22, 0.7);
}
.section {
    width: 50%;
    height:35vh;
    padding: 2rem;
    display: flex;
    font-size: 10px;
    justify-content: center;
    border-radius: 5.7rem;
    color: white;
}
.icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
  .section__temperature {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 10px;
    justify-content: center;
    background-color: rgba(53, 157, 231, 0.7);
}
.bottom-container {
    display: grid;
    grid-template-columns: repeat(2, 0.4fr);
    gap: 1rem;
    height: 80vh;
    align-items: center;
    padding-left: 12%;
    /* padding: 10%; */
;

}
h1 {
    font-size: 27px !important;
}
.five-day-header {
    font-size: 30px;
    padding: 3%;
}
.title {
    font-size: 20px;
}
.min-temp {
    padding-top: 2px;
    font-size: 11px;
    font-weight: 800;
}
.max-temp {
    font-size: 11px;
    font-weight: 800;
}

  }

  // Media query for Extra-large devices


@media screen and (max-width: 1150px) and (min-width: 900px) {
    width: 100%;
    height: 390vh;
    .overlay {
        height: 390vh;
    }

.section {
    width: 50%;
    height:35vh;
    padding: 2rem;
    display: flex;
    font-size: 10px;
    justify-content: center;
    border-radius: 5.7rem;
    color: white;
}
.icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
  .section__temperature {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 10px;
    justify-content: center;
    background-color: rgba(53, 157, 231, 0.7);
}
.bottom-container {
    display: grid;
    grid-template-columns: repeat(2, 0.4fr);
    gap: 1rem;
    height: 80vh;
    align-items: center;
    padding-left: 33%;
    /* padding: 10%; */
;

}
h1 {
    font-size: 27px !important;
}
.five-day-header {
    font-size: 30px;
    padding: 3%;
}
.title {
    font-size: 20px;
}
.min-temp {
    padding-top: 2px;
    font-size: 11px;
    font-weight: 800;
}
.max-temp {
    font-size: 11px;
    font-weight: 800;
}
.day-temp {
    font-size: 15px;
}
.card-content {
    font-size: 15px;

}
.card-content-title {
    font-size: 15px;

}
  }
`;

export default StyledWeather;