import React, { useState } from 'react'
import { PlayingGuess, InputPlayer, PressToPlay } from './styles'
import { BiGame } from 'react-icons/bi'
import { BiLogOutCircle } from 'react-icons/bi'
import { GiDiceFire } from 'react-icons/gi'
import { motion } from 'framer-motion'

export default function PlayingContainer() {
  const [nameInserted, setNameInserted] = useState(false)
  const [name, setName] = useState('')
  const [randomNumber, setRandomNumber] = useState(1)
  return (
    <PlayingGuess
      as={motion.section}
      transition={{ delay: 0.5, duration: 0.5 }}
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '100%' },
      }}
      initial="hidden"
      animate="show"
    >
      <img src="logo.svg" alt="" />
      <h3>Tente a sorte, dê o seu palpite! [Guess It]</h3>
      {nameInserted ? (
        <h3>Nickname: {name}</h3>
      ) : (
        <p>
          Para começar a jogar basta inserir seu nome abaixo e clicar em jogar
        </p>
      )}
      {/* <LabelPlayer htmlFor="name">Comece a jogar:</LabelPlayer> */}
      <InputPlayer
        className="name"
        type="text"
        placeholder="nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={nameInserted}
      />
      <PressToPlay
        className={!nameInserted ? '' : 'orange'}
        onClick={
          !nameInserted
            ? () => name.length !== 0 && setNameInserted(!nameInserted)
            : () => {
                setName('')
                setNameInserted(!nameInserted)
              }
        }
      >
        {!nameInserted ? <BiGame /> : <BiLogOutCircle />}
        {!nameInserted ? 'Jogar' : 'Sair'}
      </PressToPlay>
      {nameInserted && (
        <PressToPlay
          onClick={() => setRandomNumber(Math.floor(Math.random() * 1000) + 1)}
        >
          <GiDiceFire />
          Iniciar
        </PressToPlay>
      )}
      <ol>
        <li>Insira um número entre 1 e 1000;</li>
        <li>Espere o computador gerar um número;</li>
        <li>Dê um palpite se o número é maior, menor ou igual;</li>
      </ol>
    </PlayingGuess>
  )
}
