CREATE DATABASE music;
USE music;

CREATE TABLE songs (
  id INT,
  artist_name VARCHAR(40),
  track_name VARCHAR(40),
  track_id VARCHAR(30),
  track_popularity INT,
  artist_id VARCHAR(30)
);

LOAD DATA LOCAL INFILE './Unpopular songs database - songs.csv'
INTO TABLE songs
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(id, artist_name, track_name, track_id, track_popularity, artist_id);