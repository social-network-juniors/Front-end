import React, { useEffect, useState } from 'react'

export default function GroupPage(props) {
    useEffect(() => {
        console.log('load')
    }, [])
    return (
        <div>
            <div>{props.match.params.id}</div>
        </div>
    )
}
