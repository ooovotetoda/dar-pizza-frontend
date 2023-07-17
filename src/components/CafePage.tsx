import React from 'react';
import CafeItem from "./CafeItem";
import burger from "../images/Burger.png";
import fries from "../images/Fries.png";
import hotdog from "../images/Hotdog.png";
import taco from "../images/Taco.png";
import pizza from "../images/Pizza.png";
import donut from "../images/Donut.png";
import popcorn from "../images/Popcorn.png";
import coke from "../images/Coke.png";
import cake from "../images/Cake.png";
import icecream from "../images/Icecream.png";
import cookie from "../images/Cookie.png";
import flan from "../images/Flan.png";


const CafePage = () => {
  return (
    <section className={"cafe-page"}>
      <CafeItem photo={burger} title={"Бургер"} price={199} alt={"burger"} btnId={"btn1"}/>
      <CafeItem photo={fries} title={"Фри"} price={149} alt={"burger"} btnId={"btn2"}/>
      <CafeItem photo={hotdog} title={"Хотдог"} price={249} alt={"burger"} btnId={"btn3"}/>
      <CafeItem photo={taco} title={"Тако"} price={299} alt={"burger"} btnId={"btn4"}/>
      <CafeItem photo={pizza} title={"Пицца"} price={799} alt={"burger"} btnId={"btn5"}/>
      <CafeItem photo={donut} title={"Донат"} price={149} alt={"burger"} btnId={"btn6"}/>
      <CafeItem photo={popcorn} title={"Попкорн"} price={199} alt={"burger"} btnId={"btn7"}/>
      <CafeItem photo={coke} title={"Кока-кола"} price={149} alt={"burger"} btnId={"btn8"}/>
      <CafeItem photo={cake} title={"Пирог"} price={399} alt={"burger"} btnId={"btn9"}/>
      <CafeItem photo={icecream} title={"Рожок"} price={149} alt={"burger"} btnId={"btn10"}/>
      <CafeItem photo={cookie} title={"Печенье"} price={99} alt={"burger"} btnId={"btn11"}/>
      <CafeItem photo={flan} title={"Флан"} price={249} alt={"burger"} btnId={"btn12"}/>
    </section>
  );
};

export default CafePage;