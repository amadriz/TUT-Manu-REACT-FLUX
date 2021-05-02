import React, { useContext, useEffect } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
//APP CONTEXT CONECTA LOS COMPONENTES CON EL FLUX
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, []);

	return (
		<Jumbotron>
			<h1>Listado de personajes</h1>
			<span>{JSON.stringify(store.favorites)}</span>
			<ul>
				{store.peopleList.map((item, index) => {
					return (
						<li key={index}>
							<span>{item.name}</span>
							{store.favorites.includes(item.name) ? null : (
								<Button onClick={() => actions.setFavorites(item.name)} variant="outline-primary">
									Agregar
								</Button>
							)}
						</li>
					);
				})}
			</ul>
		</Jumbotron>
	);
};
