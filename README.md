# 12 factors Übung
## Name 
City Information Microservice

## Beschreibung
Dieser Microservice ermöglicht es verschiedene Wetterinformationen einer beliebigen Stadt auf der Welt zu erhalten.
Die Städte werden mithilfe einer ID gesucht bzw. gefunden. Die möglichen IDs können in der Datei 'city.list.json.gz' gefunden werden.

Für die verschiedenen Bundeshauptstädte von Österreich können folgende IDs verwendet werden:
- Wien: 2761333
- Graz: 2778067
- Klagenfurt: 7871497
- Linz: 2772400
- Eisenstadt: 2780190
- Salzburg: 2766823
- Bregenz: 2781503
- Sankt Pölten: 2766429
- Innsbruck: 2775220

## Installation
Um diesen Microservice zu installieren, muss der Befehl `docker-compose up` im Hauptverzeichnis in der Kommandozeile aufgerufen werden.

## Benutzung
Nach der Installation kann die Seite (http://localhost:8080/) aufgerufen werden.
Um die Informationen einer Stadt abzufragen, muss man die Seite `http://localhost:8080/city/{ID}`aufrufen ({ID} steht hier für eine beliebige ID einer Stadt).

### Beispielaufruf
Für Wien:
http://localhost:8080/city/2761333

