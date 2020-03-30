import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import image from './cryptomonedas.png';
import Form from './components/Form';
import Axios from 'axios';
import Quotation from './components/Quotation';
import Spinner from './components/Spinner';


const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue',cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 3.5rem;
  margin-top: 5rem;
  margin-bottom: 3.5rem;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {

  const [currency, setCurrency] = useState(''); 

  const [cryptocurrency, setCryptocurrency] = useState('');
  const [result, setResult] = useState({});

  const [charge, setCharge] = useState(false);

  useEffect(()=>{

    const quoteCrypto = async () =>{
      //Evitamos la ejecucion la primera vez
      if(currency === '') return;
  
      //Consultar la API para obtener la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;
    
      const result = await Axios.get(url);

      //Mostrar spinner
      setCharge(true);

      //Ocultar el spinner y mostrar el resultado
      setTimeout(()=>{

        //cambiar el estado de cargando
        setCharge(false);


        // guardar cotizacion
        setResult(result.data.DISPLAY[cryptocurrency][currency]);
      },3000)
    
      // console.log(result);
      // console.log(result.data.DISPLAY);
      // console.log(result.data.DISPLAY[cryptocurrency][currency]);

      // console.log('cotizando');
    }
    quoteCrypto();

  },[currency,cryptocurrency]);

  //Mostrar el spinner o resultado

  const component = (charge) ? <Spinner /> :  <Quotation result={result} /> ;


  return (
    <Container>

      <div>
        <Image
          src={image}
          alt="image crypto"
        />
      </div>

      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>


        <Form
          setCurrency={setCurrency}
          setCryptocurrency={setCryptocurrency}
        />
       {component}

      </div>

    </Container>
  );
}

export default App;
