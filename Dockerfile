FROM ubuntu:20.04
COPY news_translator_front ./news_translator_front
RUN apt update
RUN apt install -y nodejs
RUN apt install -y npm
RUN cd news_translator_front
CMD ["npm", "run", "serve"]
