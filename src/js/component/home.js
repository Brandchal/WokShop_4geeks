import React, { useState, useEffect } from "react";
import PropsTypes from "prop-types";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

/* const suma =(a,b)=>{
    return
    a + b
    } */

/*En la props Img colocamos un operador ternario, que en caso que este vacido muestre una imagen
    de lo contrario ": props.img" muestre la imagen que se le esta pasando al componente*/
/*Evento onClick:*/
function Home(props) {
	const [count, setCount] = useState(0);
	//camelCase

	//En la etiqueta span podemos ver el ejemplo de 3 manera de concatenar texto con variables.
	/* <span>{`Count: ${count}`}</span>
			<span>Count: {count}</span>
			<span>>{"Count: " + count}</span> */

	useEffect(() => {
		//Efectos secundarios:
		const URL = "https://reqres.in/api/users?page=2";
		//Configuración
		const additionalSettigs = {
			headers: {
				method: "GET",
				"Content-Type": "application/json"
			}
		};
		//Promesa:
		fetch(URL, additionalSettigs)
			.then(response => response.json())
			.then(data => {
				console.log(">>DATA API: ", data);
			});
	}, []);
	return (
		<div className="text-center mt-5">
			<h1>{props.title}</h1>
			<span>{`Count: ${count}`}</span>
			<p>
				{/*   Condicional que el contador al ser mayor de 2, muestre la imagen, pero notar que tiene doble 
                validación que es que este vacida */}
				{count > 2 ? (
					<img
						src={
							props.img === ""
								? "https://www.fondoshd.mx/descargar.php?id=4401&resolucion=480x800"
								: props.img
						}
					/>
				) : null}
			</p>
			<a
				href="#"
				/* onClick={() => {
					alert("Click");
                }} */
				onClick={() => {
					setCount(count + 1);
				}}
				className="btn btn-success">
				Sumar
			</a>
			<a
				href="#"
				/* onClick={() => {
					alert("Click");
                }} */
				onClick={() => {
					/*  Una validación sencilla que dice que si el count es distinto a 0 reste, de lo contrario no resta. */
					if (count !== 0) setCount(count - 1);
				}}
				className="btn btn-success">
				Restar
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
}

Home.propTypes = {
	title: PropsTypes.string,
	img: PropsTypes.string
};

//Asignamos props a mi componente Home, donde lo podemos reutilizar para modificar mi componente.
const Container = () => {
	return (
		<div>
			<Home
				title="Hola"
				/* 	img={
                "https://www.wallpapertip.com/wmimgs/97-972130_nokia-lumia-520-wallpaper-hd-system-technonet-asteroid.jpg"
            } */
			/>
			{/* <Home
				title="Hola 2"
				img={
					"https://www.wallpapertip.com/wmimgs/44-440164_earth-mobile-wallpaper-hd.jpg"
				}
			/> */}
			<Home title="Hola 3" img={""} />
		</div>
	);
};

export default Container;
