import React, { useState, useEffect } from 'react'
import { fetchPeers } from '../../services/peersService'
import './TopPeers.css'
export const Peers = () => {

  const [peers, setPeers] = useState([]);

  useEffect(() => {
    let mounted = true

    fetchPeers().then((data) => {
      if (mounted) {
        setPeers(data)
      }
    })
    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className='peers-wrapper'>
      <h2 className='peers-title'>Top Peers</h2>
      <div className="peers-container">
        {peers.map((peer, i) => {
          return (
            <button  onClick={null} className='peer' key={peer}>{peer}</button>
          )
        })}
      </div>
    </div>
  )
}