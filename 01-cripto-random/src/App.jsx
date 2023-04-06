import './App.css'
import useRandom from './hooks/useRandom'

function App() {

	const query = useRandom()

	return (
		<div className="App App-header">
			{	
				query.isFetching 
					? <h2>Cargando...</h2>
					: <h2>Número Aleatorio: {query.data}</h2>
			}
			{
				!query.isFetching && query.isError && <h3>{query.isError}</h3>
			}
			<button onClick={query.refetch} disabled={query.isFetching}> 
			{
				query.isFetching ? '...' : 'Nuevo Número'
			}
			</button>
		</div>
	)	
}

export default App
