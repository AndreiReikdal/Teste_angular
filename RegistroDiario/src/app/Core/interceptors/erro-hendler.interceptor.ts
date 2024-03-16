import { HttpInterceptorFn } from '@angular/common/http';

export const erroHendlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
