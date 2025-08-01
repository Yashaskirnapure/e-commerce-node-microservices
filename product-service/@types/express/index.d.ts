// @types/express/index.d.ts
import 'express';

declare global {
	namespace Express {
		interface Request {
			userId?: number;
			role?: string;
		}
	}
}

export {}