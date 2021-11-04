# 12factors

1. Codebase
	* Der Code wird mithilfe von Github versioniert.
2. Dependencies
	* Alle benötigten Abhängigkeiten werden mittels der 'docker-compose' Datei installiert.
3. Config
	* Die Konfiguration ist in den Eigenschaften der NodeJS-App gespeichert
4. Backing services **(Nicht eingebaut)**
	* Bei diesem Microservice wurde kein anderer Service verwendet.
	Jedoch wäre es möglich (als Erweiterung des Microservice) eine Datenbank hinzuzufügen um bereits 	abgefragte Städte zu speichern.
5. Build, release, run **(Nicht eingebaut)**
	* Es wurde kein CI/CD eingebaut.
6. Processes
	* Der Mircoservice läuft auf einem einzelnen Docker-Container.
	Falls der Punkt 4. Backing Services eingebaut würde, wäre es sinnvoll einen eigenen Docker-Container für die Datenbank zu verwenden.
7. Port binding
	* Der verwendete Port wird in der 'docker-compose' Datei konfiguriert.
8. Concurrency **(Nicht eingebaut)**
	* Nicht wirklich möglich für diesen Service
9. Disposability **(Nicht eingebaut)**
	* Start des Service bzw. eine Abfrage dauert nicht recht lange.
10. Dev/prod parity
	* Es gibt keinen Unterschied zwischen Development und Production
11. Logs
	* Es wird derzeit nur der Start des Microservices geloggt. Eine Idee wäre es noch die einzelnen Abfragen zu loggen.
12. Admin process **(Nicht eingebaut)**
	* Dieser Mircorservice besitzt keine verschiedenen User.