sudo su
su postgres
psql -U login -d table
ALTER TABLE cars ALTER COLUMN description TYPE varchar (1000000);