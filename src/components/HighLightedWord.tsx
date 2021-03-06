import React, { FC } from 'react'
import { highlightMatch } from '../utils/highLightMatch'

interface HighlightedWordProps {
  word: string
  searchToCompare: string
}

const HighLightedWord: FC<HighlightedWordProps> = ({ word, searchToCompare }) => {
  const [strongText, normalText] = highlightMatch(word, searchToCompare)

  return (
    <span>
      <strong className='black'>{strongText}</strong>
      {`${normalText}\u00A0`}
    </span>
  )
}

export default HighLightedWord
