import { useEffect, useReducer, useState } from 'react'
import './App.css'

const RANDOM_NUMBER_API = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'

const getRandomNumber = async () => {
	const res = await fetch(RANDOM_NUMBER_API)
	const number = await res.text()

	// devuelve un string Ej: 120\n
	// + convierte el string a número
	return +number
}

function App() {
	
	const [number, setNumber] = useState()
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState()
	const [key, forceRefetch] = useReducer((x) => x+1, 0)

	useEffect(() => {
		setIsLoading(true)
		getRandomNumber()
			.then(setNumber)
			.catch(error => setError(error.message))
	}, [key])

	useEffect(() => {
		if(number) setIsLoading(false)
	}, [number])

	useEffect(() => {
		if(error) setIsLoading(false)
	}, [error])

	return (
		<div className="App App-header">
			{	
				isLoading 
					? <h2>Cargando...</h2>
					: <h2>Número Aleatorio: {number}</h2>
			}
			{
				!isLoading && error && <h3>{error}</h3>
			}
			<button onClick={forceRefetch} disabled={isLoading}> 
			{
				isLoading
					? '...'
					: 'Nuevo Número'
			}
			</button>
		</div>
	)	
}

export default App
