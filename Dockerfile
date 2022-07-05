FROM node:18-alpine
WORKDIR /app/src
ENV CI=1

RUN npm i -g pnpm

COPY . .

RUN pnpm install

EXPOSE 3000/tcp
ENTRYPOINT pnpm run dev
