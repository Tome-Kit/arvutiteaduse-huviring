print("Tere")

name = input("Mis on sinu nimi? ")

print("Kas su nimi on tõesti " + name + "?")
if len(name) > 10:
    print("Sul on pikk nimi.")
else:
    print("Sul on lühike nimi.")
lengthOfNAme = len(name)
if lengthOfNAme > 10:
    print("Sul on pikk nimi.")
elif lengthOfNAme > 5:
      print("Sul on keskmise pikkusega nimi.")
else:
    print("Sul on lühike nimi.")
