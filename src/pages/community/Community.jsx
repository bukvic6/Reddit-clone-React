import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CommunityService from '../../services/CommunityService'

export default function Community() {

    const [community, setCommunity] = useState({})
    const { id } = useParams()

    useEffect(() => {
        if ( id ) {
            CommunityService.getCommunityById(id).then(res => {
                console.log(res)
                setCommunity(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
    },[ id ]);
  return (
    <div>
        <h2> Welcome to community {community.name}</h2>
    </div>
  )
}
