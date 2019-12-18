#! /usr/bin/env bash

function askForNAme() {
    echo "Tere"

}


countCharacter() {
    local numberOfOccurencies=0
    for ((numberOfCharacter=1; numberOfCharacter<=${lengthOfName};
	  numberOfCharacter++))
    do
	character=`expr substr "$1" $numberOfCharacter 1`
	echo "14: " $2 ", sõne: " $1
	if test "$character" == "$2"
	then
	    echo "17"
	    let "numberOfOccurencies++"
	fi
    done
    echo $numberOfOccurencies
}
    echo -n "Mis on sinu nimi? "
    read name
    echo "Kas su nimi on tõesti" $name?

    if test "${#name}" -gt 10
    then
	echo "See on pikk nimi."
    else
	echo "See on lühike nimi."
    fi

    lengthOfName="${#name}"
    echo ${lengthOfName}
    if test "${lengthOfName}" -gt 10
    then
	echo "See on pikk nimi."
    elif test "${lengthOfName}" -gt 5
    then
	echo "See on keskmise pikkusega nimi."
    else
	echo "See on lühike nimi."
    fi

    case "${LengthOfName}" in
	10)
	    echo "Nii palju on meie majal korruseid."
	    ;;
	5)
	    echo "Nii palju eri numbreid tunneb arvuti."
	    ;;
	*)
	    echo "Öösiti on külmem kui väljas."
	    ;;
    esac

numberOfOccurencies="$(countCharacter ${name} "t")"

echo "Sinu nimes sisaldub t-täht $numberOfOccurencies korral."


