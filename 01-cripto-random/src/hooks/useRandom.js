import {useQuery} from '@tanstack/react-query'

const RANDOM_NUMBER_API = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'

const getRandomNumber = async () => {
	const res = await fetch(RANDOM_NUMBER_API)
	const number = await res.text()

	// devuelve un string Ej: 120\n
	// + convierte el string a número
	return +number
}


export default function useRandom() {

    const query = useQuery(
		['randomNumber'], 
		getRandomNumber
		)

    return query
}

