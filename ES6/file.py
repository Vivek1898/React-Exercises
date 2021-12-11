import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="myuser",
  password="mypass"
)

mycursor = mydb.cursor()

mycursor.execute("SHOW DATABASES")

for x in mycursor:
  print(x)