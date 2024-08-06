import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";

const get_detail_schools = async () => {
	var array = [];
	let shareCode = "1q-pfFa5wH9yCOs-1xatlNbU5yErdFo9zjS-9EUZ6260";
	let API_KEY = "AIzaSyAqGzT_Z_iHxt5dhQ6qyUYANUAgm_l9Xmk";
	let sheetName = "1";

	const response = await axios
		.get(
			`https://sheets.googleapis.com/v4/spreadsheets/${shareCode}/values/${sheetName}?alt=json&key=${API_KEY}`
		)
		.then(function (response) {
			const transposedData = response.data.values[0].map((_, colIndex) =>
				response.data.values.map((row) => row[colIndex])
			);
			for (var i = 1; i < transposedData.length; i++) {
				array.push({
					// Cambiar las propiedades del objeto según las nuevas columnas
					nombreEscuela: transposedData[i][0], // Nombre y N° de Escuela
					timestamp: transposedData[i][1], // Timestamp
					emailAddress: transposedData[i][2], // Email Address
					responsableCarga: transposedData[i][3], // Responsable de la carga
					vinculoEscuela: transposedData[i][4], // Vínculo con la escuela
					calle: transposedData[i][5], // Calle y N°
					paraje: transposedData[i][6], // Paraje
					localidad: transposedData[i][7], // Localidad
					codigoPostal: transposedData[i][8], // Código Postal
					departamento: transposedData[i][9], // Departamento
					provincia: transposedData[i][10], // Provincia
					telefono: transposedData[i][11], // Teléfono
					correoEscuela: transposedData[i][12], // Correo electrónico oficial
					nombreDirector: transposedData[i][13], // Nombre del Director/a
					nombrePresidente: transposedData[i][14], // Nombre del Presidente
					responsable1Nombre: transposedData[i][15], // Responsable N° 1 - Nombre
					responsable1DNI: transposedData[i][16], // Responsable N° 1 - DNI
					responsable2Nombre: transposedData[i][17], // Responsable N° 2 - Nombre
					responsable2DNI: transposedData[i][18], // Responsable N° 2 - DNI
					responsable2Vinculo: transposedData[i][19], // Responsable N° 2 - Vinculación
					responsable3Nombre: transposedData[i][20], // Responsable N° 3 - Nombre
					responsable3DNI: transposedData[i][21], // Responsable N° 3 - DNI
					responsable3Vinculo: transposedData[i][22], // Responsable N° 3 - Vinculación
					nombreProyecto: transposedData[i][23], // Nombre del proyecto
					descripcionProblema: transposedData[i][24], // Descripción del problema
					comoElaborado: transposedData[i][25], // Cómo fue elaborado
					relacionProyecto: transposedData[i][26], // Relación con el propósito
					contribucionInnovacion: transposedData[i][27], // Contribución a la innovación
					cantidadAlumnos: transposedData[i][28], // Alumnos (cantidad)
					cantidadExAlumnos: transposedData[i][29], // Ex-alumnos (cantidad)
					cantidadDocentes: transposedData[i][30], // Docentes (cantidad)
					cantidadPadres: transposedData[i][31], // Padres (cantidad)
					cantidadFamilias: transposedData[i][32], // Familias (cantidad)
					otros: transposedData[i][33], // Otros
					objetivosProyecto: transposedData[i][34], // Objetivo/s del proyecto
					descripcionProyecto: transposedData[i][35], // Descripción del proyecto
					resultadosEsperados: transposedData[i][36], // Resultados esperados
					actividades: transposedData[i][37], // Actividades
					asesoramiento: transposedData[i][38], // Asesoramiento técnico
					plazoRealizacion: transposedData[i][39], // Plazo de realización
					presupuestoArchivo: transposedData[i][40], // Archivo de presupuesto
					presupuestoImagenes: transposedData[i][41], // Imágenes de presupuestos
					masDeDiezArchivos: transposedData[i][42], // Más de 10 archivos
					actaCooperadora: transposedData[i][43], // Copia del acta
					actaAsociacion: transposedData[i][44], // Fotocopia del acta de nombramiento
					fotografias: transposedData[i][45], // Fotografías
					cartaColaboracion: transposedData[i][46], // Carta de colaboración
					croquis: transposedData[i][47], // Croquis
				});
			}
		});
	console.log(array);

	return array;
};

const Home = () => {
	const [schools, setSchools] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const data = await get_detail_schools();
			setSchools(data); // Guardar el listado en el estado
		};
		fetchData();
	}, []);

	return (
		<div className="home">
			<h2>Listado de Escuelas</h2>
			<ul>
				{schools.map((school, index) => (
					<li key={index}>{school.nombreEscuela}</li> // Mostrar el nombre de cada escuela
				))}
			</ul>
		</div>
	);
};

export default Home;
