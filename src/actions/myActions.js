import axios from 'axios'

export const getDemoAction = () => {
    return {
        type: "GET_DEMO",
        payload: {
            name: 'Teerapong Singthong',
            status: 'Employed'
        }
    }
}
