import React from "react";
import Article from '../components/Article'

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    autor: " Jan Nowak",
    text:
      " 1111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores earum quo nesciunt esse recusandae aliquam adipisci rem. Iste incidunt laborum eaque autem vitae beatae quibusdam itaque, alias perspiciatis, totam saepe.Cum optio veritatis omnis totam pariatur delectus voluptate mollitia provident nulla? Minima temporibus, quo libero atque nisi ducimus earum veritatis! Nemo atque praesentium necessitatibus, repellat reprehenderit magnam perferendis accusamus deleniti. ",
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego",
    autor: " Pawel Kwiatkowski",
    text:
      " 2222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores earum quo nesciunt esse recusandae aliquam adipisci rem. Iste incidunt laborum eaque autem vitae beatae quibusdam itaque, alias perspiciatis, totam saepe.Cum optio veritatis omnis totam pariatur delectus voluptate mollitia provident nulla? Minima temporibus, quo libero atque nisi ducimus earum veritatis! Nemo atque praesentium necessitatibus, repellat reprehenderit magnam perferendis accusamus deleniti. ",
  },
  {
    id: 3,
    title: "Czym jest teoria Farb",
    autor: " Piotr Kowalski",
    text:
      " 3333 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores earum quo nesciunt esse recusandae aliquam adipisci rem. Iste incidunt laborum eaque autem vitae beatae quibusdam itaque, alias perspiciatis, totam saepe.Cum optio veritatis omnis totam pariatur delectus voluptate mollitia provident nulla? Minima temporibus, quo libero atque nisi ducimus earum veritatis! Nemo atque praesentium necessitatibus, repellat reprehenderit magnam perferendis accusamus deleniti. ",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => 
  <Article key={article.id} {...article}/>);
  return <div className="home">{artList}</div>;
};

export default HomePage;
