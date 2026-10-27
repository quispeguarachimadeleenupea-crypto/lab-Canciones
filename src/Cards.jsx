import { useState } from "react";

const Cards = ({nombre, img, onLike }) => {
     
    const [Likes, setLikes] = useState(0);

    const handleClick = () => {
        setLikes(Likes + 1);
        onLike();
    }
  return (
     <div style={{ border: '1px solid #0e0a0a', 
                   padding: "20px",
                   margin: "10px",
                   borderRadius: "10px",
                   alignItems: "center",
                   textAlign: "center",
                   }}>

        {/* Imagenes*/}
        <img alt={nombre} src={img} widt="150px" height="150px" />
         <h3>{nombre}</h3>
         <button
            style={{
                width: "100px",
                padding: '8px',
                margin: '10px',
                backgroundColor: 'rgb(236, 166, 13)',
                border: 'none',
                borderRadius: '5px',
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
            }}
            onClick={handleClick}
         >
            Like {Likes}
            </button>
            {Likes >= 3 && <p style={{color: "red"}}> ¡Muy Popular!</p>}
    </div>
  );
};

export default Cards;