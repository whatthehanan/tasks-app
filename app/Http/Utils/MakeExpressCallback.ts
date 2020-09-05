import { Request, Response } from 'express';

export interface DecodedRequest extends Request {
  user?: any;
}

export interface HttpResponse {
  body: object;
  headers?: object;
  statusCode?: number;
}

export const makeExpressCallback = (controller: any) => {
  return (req: DecodedRequest, res: Response) => {
    const httpRequest = makeHttpRequest(req);

    controller(httpRequest)
      .then((httpResponse: HttpResponse) => {
        const headers = httpResponse.headers || {
          'Content-Type': 'application/json',
        };
        const statusCode = httpResponse.statusCode || 200;

        res.set(headers);
        res.type('json');
        res.status(statusCode).send(httpResponse.body);
      })
      .catch((err: Error) => {
        return res.status(500).json({
          statuts: 'error',
          message: err.message,
        });
      });
  };
};

function makeHttpRequest(req: DecodedRequest) {
  return {
    body: req.body,
    query: req.query,
    params: req.params,
    ip: req.ip,
    method: req.method,
    path: req.path,
    headers: {
      'Content-Type': req.get('Content-Type'),
      Referer: req.get('referer'),
      'User-Agent': req.get('User-Agent'),
    },
    user: req.user,
  };
}
