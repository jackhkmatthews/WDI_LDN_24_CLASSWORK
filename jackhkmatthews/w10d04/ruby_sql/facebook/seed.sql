CREATE TABLE people (
  id serial8 primary key,
  first varchar(20) not null,
  last varchar(20) not null,
  dob date check (dob < '1/1/2004'),
  relationship varchar(50),
  friends int2 default 0,
  city varchar (20)
);

INSERT INTO people (first, last, dob) VALUES ('Alex', 'Chin', '12/27/1987');
INSERT INTO people (first, last) VALUES ('Gerry', 'Mathe');
INSERT INTO people (first, last) VALUES ('Mike', 'Hayden');
