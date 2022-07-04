FROM node:18-alpine
WORKDIR /app/src

RUN npm i -g pnpm

COPY . .

EXPOSE 3000/tcp
ENTRYPOINT pnpm run dev
