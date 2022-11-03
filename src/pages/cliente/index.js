export default function handler(req, res) {

    if(req.method === 'GET') {
        handlegGet(req, res)
    } else {
        res.status(405).send
    }

    }
    function randleGet(req, res) {
        res.status(204).json({
            id: 3,
            nome: 'Maria',
            idade: 33,
            email: 'marimaria@maria.com'
    }