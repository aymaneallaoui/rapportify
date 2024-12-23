'use client'
import { useEffect } from "react"
import Tracker from '@openreplay/tracker'
import { v4 as uuidV4 } from 'uuid'

const tracker = new Tracker({
    projectKey: "CoSpMVVUbB5bZ16Q8jjl",
    ingestPoint: "https://openreplay.akera.me/ingest",
})

function defaultGetUserId() {
    return uuidV4()
}

const Openreplay = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userId = defaultGetUserId() // declare userId within this scope
            tracker.start()
            tracker.setUserID(userId)
        }
    }, [])

    return null
}

export default Openreplay
