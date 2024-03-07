import { type Streamer } from '../types'

export async function fetchStreamers(): Promise<Streamer[]> {
    return await fetch('http://localhost:5173/streamersData/streamersData.json')
        .then(async response => await response.json() as { Streamers: Streamer[] })
        .then(data => {
            return data.Streamers
        })
        .catch(error => {
            console.error('Error: ', error)
            return []
        })
}
