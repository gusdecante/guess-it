import React, { useState, useContext } from 'react'
import { PlayingGuess, InputPlayer, PressToPlay } from './styles'
import { BiGame } from 'react-icons/bi'
import { BiLogOutCircle } from 'react-icons/bi'
// import { GiDiceFire } from 'react-icons/gi'
import { motion } from 'framer-motion'
import { TimerContext } from '../../contexts/TimerContext'
import Timer from '../Timer'

export default function PlayingContainer() {
  const [nameInserted, setNameInserted] = useState(false)
  // const [name, setName] = useState('')
  const { name, setNewName, addUser } = useContext(TimerContext)

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
          Para começar a jogar basta inserir seu nome ou apelido abaixo e clicar
          em jogar
        </p>
      )}
      {/* <LabelPlayer htmlFor="name">Comece a jogar:</LabelPlayer> */}
      <InputPlayer
        className="name"
        type="text"
        placeholder="**nome ou apelido"
        value={name}
        onChange={(e) => setNewName(e.target.value)}
        disabled={nameInserted}
      />
      <PressToPlay
        className={!nameInserted ? '' : 'orange'}
        onClick={
          !nameInserted
            ? () => name.length !== 0 && setNameInserted(!nameInserted)
            : () => {
                addUser()
                setNewName('')
                setNameInserted(!nameInserted)
              }
        }
      >
        {!nameInserted ? <BiGame /> : <BiLogOutCircle />}
        {!nameInserted ? 'Jogar' : 'Sair'}
      </PressToPlay>
      {nameInserted && <Timer />}
      <ol>
        <li>Insira um número entre 1 e 1000;</li>
        <li>Espere o computador gerar um número;</li>
        <li>Dê um palpite se o número é maior, menor ou igual;</li>
      </ol>
    </PlayingGuess>
  )
}
