// import React from "./przycisk";
const header = <h1 className="title">Witaj na lekcji 8-9</h1>;

const classBig = "big"

const handleClick = () => alert("klick!")
const main = (
  <div>
    <h1 person="osoby" onClick={handleClick} className="red">Pierwszy artykul</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere
      dolores possimus molestiae, est quas eaque enim reiciendis molestias nobis
      nemo, corporis beatae repellendus repudiandae voluptas dicta maxime neque!
      Molestiae.
    </p>
  </div>
);

const text = "stopka footer";

const largeTxt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, fugit non. Necessitatibus dolorum nesciunt fugiat vitae ipsum deleniti quaerat odio, similique veniam delectus debitis dolorem assumenda obcaecati nemo quod atque."

const footer = (
  <footer>
    <p className={classBig}>{text}</p>
    {largeTxt}
  </footer>
);

const app = [header, main, footer]

ReactDOM.render(app, document.getElementById("root"));
