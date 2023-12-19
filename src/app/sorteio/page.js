"use client";

import participantes from "./participantes";
import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

import Image from "next/image";
import LogotipoSorteio from "../../Assets/Logotipo_sorteio.svg";

import Styles_Sorteio from "./sorteio.module.scss";

export default function Sorteio() {
  const [NameRoller, SetNameRoller] = useState("");
  const [PlaceHolder, SetPlaceHolder] = useState(true);
  const [Winner, SetWinner] = useState([]);
  const [ShowWinner, SetShowWinner] = useState(false);
  const [BaseData, SetBaseData] = useState(false);

  const [isExploding, setIsExploding] = useState(false);
  const [history, setHistory] = useState([]);

  const [Draw, setDraw] = useState(true);

  const [BGWinner, setBGWinner] = useState(false);

  useEffect(() => {
    if (BaseData === true) {
      //console.log(Winner);
      DrawAnimation();
    }
  }, [Winner]);

  // como extra ver se consigo fazer uma abrra que vai enchendo mostrando o tempo e o progresso do aleatório
  // Fazer um array de histórico onde consigo guardar todos os valores de arrays passados e depois ler ele todo e verificar se existe algum valor que se repete consecutivamente

  const DrawAnimation = () => {
    SetPlaceHolder(false);
    let interaction_A = 60;
    let index_A = 0;
    const Show = () => {
      if (interaction_A > 0) {
        if (index_A < participantes.length) {
          SetNameRoller(participantes[index_A]);
          setHistory(history.push(participantes[index_A]));
        } else {
          index_A = 0;
          reShuffleArray(participantes);
          //console.log(participantes);
          SetNameRoller(participantes[index_A]);
          setHistory(history.push(participantes[index_A]));
        }
        index_A++;
        interaction_A--;
        setTimeout(Show, 100);
      } else {
        SetShowWinner(true);

        //console.log(history);
        for (let i = 1; i < history.length - 1; i++) {
          const previousInstance = history[i - 1];
          const currentInstance = history[i];

          if (previousInstance === currentInstance) {
            //console.log("Ups um repete-se");
          } else {
            //console.log("NICE CORREU TUDO BEM (SEM REPETIÇÕES)");
          }
        }
        setHistory([]);
        setIsExploding(true);
        SetNameRoller("");
        SetPlaceHolder("");
        setBGWinner(true);
        setDraw(true);
      }
    };
    Show();
  };

  const randomInteger = Math.floor(
    Math.random() * (participantes.length - 1 - 0 + 1) + 0
  );

  const reShuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      if (i === array.length - 1) {
        let LastPosition = array.slice(-1);
        //console.log(LastPosition[0].num);
        //console.log(j);
        if (LastPosition[0].num === j) {
          //console.log("deu reshuffle prevent");
          reShuffleArray(array);
        }
      }
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    SetBaseData(true);
    SetWinner(participantes[randomInteger]);
  };

  const StartDraw = () => {
    if (Draw) {
      setDraw(false);
      setBGWinner(false);
      SetShowWinner("");
      setIsExploding(false);
      shuffleArray(participantes);
    }
  };

  return (
    <main className={`main`}>
      <section className={Styles_Sorteio.sorteio_container}>
        <div className={Styles_Sorteio.sorteio_header}>
          <div className={Styles_Sorteio.sorteio_title}>Evento</div>
          <div className={Styles_Sorteio.sorteio_logotipo}>
            <Image src={LogotipoSorteio} alt="Logotipo Green Mind" />
          </div>
        </div>
        <div className={Styles_Sorteio.sorteio_display}>
          <div
            className={`${Styles_Sorteio.sorteio_winner_box} ${
              BGWinner === true
                ? Styles_Sorteio.bg_green
                : Styles_Sorteio.bg_gold
            }`}
          >
            <p>
              {PlaceHolder === true ? (
                `Nome X - Num Y`
              ) : PlaceHolder === false ? (
                <>
                  {NameRoller.nome} <span>{NameRoller.apelido}</span>
                  <span> - </span>
                  <span> {NameRoller.num} </span>
                </>
              ) : (
                ""
              )}
              {ShowWinner ? (
                <>
                  {Winner.nome} <span>{Winner.apelido}</span> <span> - </span>
                  <span> {Winner.num} </span>
                </>
              ) : (
                ""
              )}
            </p>
            <span>
              {isExploding && (
                <ConfettiExplosion
                  zIndex="5"
                  duration="3000"
                  particleCount="250"
                  width="1600"
                />
              )}
            </span>
          </div>
          <button
            className={Styles_Sorteio.sorteio_winner_btn}
            onClick={() => {
              StartDraw();
            }}
          >
            Sorteio
          </button>
        </div>
      </section>
    </main>
  );
}
