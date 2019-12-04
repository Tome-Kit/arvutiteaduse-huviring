def askForName():
 name = input("Mis on sinu nimi? ")
 lengthOfName = len(name)

 if lengthOfName > 10:
    print("sul on pikk nimi.")
 elif lengthOfName > 5:
    print ("Sul on keskimse pikkusega nimi.")
 else:
    print("Sul on lühike nimi.")

 numberOfOccurencies = countCharacter(name, "t")
 sentences = "Sinu nimes esineb t-täht {0} korral."
 print(sentences.format(numberOfOccurencies))
     
def countCharacter(string, character):
    numberOfOccurencies = 0
    lengthOfString= len(string)
    for index in range(0, lengthOfString):
     if string[index] == character:
            numberOfOccurencies += 1
    return numberOfOccurencies

    index = 0
    while index < lengthOfStrings:
        if string[index] == character:
            numberOfOccurencies += 1
        index += 1

askForName()
