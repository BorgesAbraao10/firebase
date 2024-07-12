import { useState } from "react";

import { db } from "./firebaseConnection";
import { doc, setDoc, collection, addDoc, getDoc } from "firebase/firestore";
import "./app.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  async function handleAdd() {
    // await setDoc(doc(db, "posts", "12345"), {
    //   titulo: titulo,
    //   autor: autor,
    // })
    //   .then(() => {
    //     console.log("DADOS REGISTRADO NO BANCO");
    //   })
    //   .catch((error) => {
    //     console.log("GEROU ERRO" + error);
    //   });

    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor,
    })
      .then(() => {
        console.log("CADASTRADO COM SUCESSO");
        setAutor("");
        setTitulo("");
      })
      .catch((error) => {
        console.log("ERRO" + error);
      });
  }

  async function buscarPost() {
    const postRef = doc(db, "posts", "NaK2rBuv1rCiZv0yvLIo");

    await getDoc(postRef).then((snapshot) => {
      setAutor(snapshot.data().autor);
      setTitulo(snapshot.data().titulo);
    });
  }

  return (
    <div>
      <h1>React JS + Firebase :) </h1>
      <div className="container">
        <label>Titulo:</label>
        <textarea
          type="text"
          placeholder="digite o titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label>Autor:</label>
        <input
          type="text"
          placeholder="Autor do post"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar post</button>
      </div>
    </div>
  );
}

export default App;
