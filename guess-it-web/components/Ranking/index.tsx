import React, { useState, useEffect, useContext } from 'react'
import { api, ranking } from '../../services/api'
import axios from 'axios'
import { RankingContainer, RankingGrid } from './styles'
import { TimerContext } from '../../contexts/TimerContext'

import { User } from '../../@types/types'

export default function Ranking() {
  const [data, setData] = useState({ ranking: [] })
  const { timeToHit } = useContext(TimerContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryResult = await axios.post(api, { query: ranking })
        const result = queryResult.data.data
        setData({ ranking: result.ranking })
      } catch (err) {
        console.log('Erro')
      }
    }

    fetchData()
  }, [timeToHit])

  return (
    <RankingContainer>
      <h1>Ranking</h1>
      <RankingGrid>
        <p>Nome</p>
        <p>Número de tentativas</p>
        <p>Tempo de acerto(segundos)</p>
        {data && (
          <>
            {data.ranking.map((user: User) => (
              <>
                <span>{user.name || '*'}</span>
                <span>{user.attemptsToHitTheNumber || '*'}</span>
                <span>{user.timeToHitTheNumber || '*'}</span>
              </>
            ))}
          </>
        )}
      </RankingGrid>
      {/* <p>{JSON.stringify(data, null, 2)}</p> */}
    </RankingContainer>
  )
}
