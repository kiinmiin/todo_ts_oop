import express, { NextFunction, Request, Response } from 'express'
import todoRoutes from './routes/todos'

const app = express()

app.use('/todos', todoRoutes)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.json({message: error.message})
})

app.listen(3011, () => {
    console.log('Server is started at http://localhost:3011')
})