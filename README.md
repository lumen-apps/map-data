# Map Data Repository

Dieses Repository enthält Geodaten zu Bauwerken und Sehenswürdigkeiten im GeoJSON-Format.

## Struktur

- `data/buildings/`: Jede JSON-Datei stellt ein einzelnes Gebäude als GeoJSON-`Feature` dar.
- `data/index.json`: Eine automatisch erstelle `FeatureCollection` mit allen Gebäuden.
- `schema/`: JSON-Schema zur Validierung der Datenstruktur.
- `scripts/`: Hilfsskripte zum Bündeln der Daten.

## Hinweis zu Koordinaten
In GeoJSON werden Koordinaten immer als `[Längengrad (Longitude), Breitengrad (Latitude)]` angegeben (`[lon, lat]`).
