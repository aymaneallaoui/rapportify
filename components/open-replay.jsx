'use client'
import { useEffect } from "react"
import Tracker from '@openreplay/tracker'

const tracker = new Tracker({
    projectKey: "H6naHVvsrfibVNQ2jnIY",
    ingestPoint: "https://openreplay.kafka-api.site/ingest",
})

const Openreplay = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            tracker.start()
        }
    }, [])

    return null
}

export default Openreplay 