import React, { useState, useEffect } from 'react'
import { api, ranking } from '../../services/api'
import axios from 'axios'
import { RankingContainer, RankingGrid } from './styles'

import { User } from '../../@types/types'

export default function Ranking() {
  const [data, setData] = useState({ ranking: [] })

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
  })

  return (
    <RankingContainer>
      <h1>Ranking</h1>
      <RankingGrid>
        <p>Nome</p>
        <p>Número de tentativas</p>
        <p>Tentativas para acertar</p>
        <p>Tempo para acertar</p>
        <p>Xp</p>
        {data && (
          <>
            {data.ranking.map((user: User) => (
              <>
                <span>{user.name || '*'}</span>
                <span>{user.attemptsNumber || '*'}</span>
                <span>{user.attemptsToHitTheNumber || '*'}</span>
                <span>{user.timeToHitTheNumber || '*'}</span>
                <span>{user.xp || '*'}</span>
              </>
            ))}
          </>
        )}
      </RankingGrid>
      {/* <p>{JSON.stringify(data, null, 2)}</p> */}
    </RankingContainer>
  )
}
