import http from 'api'

const getProject = () => http.send({
    url: '/offline_video/project/',
    method:'GET',
    params: {
        many: true
    }
})

export default {
    getProject
}