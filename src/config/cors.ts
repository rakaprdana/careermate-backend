import { CorsOptions } from "cors";

const allowedOrigin = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://career-mate-pi.vercel.app/",
];

const corsOptions: CorsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: null | Error, allow?: boolean) => void
  ) => {
    if (!origin || allowedOrigin.indexOf(origin) !== 1) {
      callback(null, true);
    } else {
      callback(
        new Error(`CORS error: Origin ${origin} is not allowed by CORS policy`)
      );
    }
  },
  methods: ["GET", "PUT", "POST", "DELETE"],
  credentials: true,
  optionsSuccessStatus: 200,
};

export default corsOptions;
