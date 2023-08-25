# Verwende ein Basis-Image mit Java (OpenJDK)
FROM adoptopenjdk:11-jre-hotspot

# Setze das Arbeitsverzeichnis innerhalb des Containers
WORKDIR /app

# Installiere erforderliche Pakete und Abhängigkeiten
RUN apt-get update \
  && apt-get install -y wget inotify-tools \
  && rm -rf /var/lib/apt/lists/*

# Lade openapi-generator-cli herunter und installiere es
RUN wget https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/5.3.0/openapi-generator-cli-5.3.0.jar \
  -O openapi-generator-cli.jar

# Erstelle einen Alias für den Befehl "openapi-generator"
RUN echo 'alias openapi-generator="java -jar /app/openapi-generator-cli.jar"' >> ~/.bashrc

# Kopiere die OpenAPI-Spezifikation in den Container
COPY ./src/openapi-spec.yaml /app/openapi-spec.yaml

# Führe den Befehl zum Generieren der Dokumentation aus
CMD inotifywait -e close_write,moved_to,create /app/openapi-spec.yaml && \
  openapi-generator generate -i /app/openapi-spec.yaml -g html -o /app/generated-docs
