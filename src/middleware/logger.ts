import { Request, Response, NextFunction } from 'express'

const loggerMiddleware = (req: Request, resp: Response, next: NextFunction) => {
    if (Boolean(process.env.DEV)) {
        console.log('Request logged:', req.method, req.path);
    }
    // console.log('resp', resp.req.url );
    next();
}

export default loggerMiddleware