import React from "react";
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
	return (
		<div className="text-center mt-5">
			<h1>{props.title}</h1>
			<p>
				<img
					src={
						props.img === ""
							? "https://www.fondoshd.mx/descargar.php?id=4401&resolucion=480x800"
							: props.img
					}
				/>
			</p>
			<a
				href="#"
				onClick={() => {
					alert("Click");
				}}
				className="btn btn-success">
				If you see this green button... bootstrap is working
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
				img={
					"https://www.wallpapertip.com/wmimgs/97-972130_nokia-lumia-520-wallpaper-hd-system-technonet-asteroid.jpg"
				}
			/>
			<Home
				title="Hola 2"
				img={
					"https://www.wallpapertip.com/wmimgs/44-440164_earth-mobile-wallpaper-hd.jpg"
				}
			/>
			<Home title="Hola 3" img={""} />
		</div>
	);
};

export default Container;
