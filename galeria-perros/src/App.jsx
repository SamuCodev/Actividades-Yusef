import { use, useEffect, useState } from "react";
import { Filtro } from "./components/Filtro";
import { Galeria } from "./components/Galeria";

export const App = () => {
    const [imagenes, setImagenes] = useState([]);
    const [razas, setRazas] = useState([]);
    const [razaElegida, setRazaElegida] = useState("");
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    const API_URL = "https://dog.ceo/api";

    useEffect(() => {
        setError(null);
        setCargando(true);
        const obtenerRazas = async () => {
            try {
                const response = await fetch(API_URL + "/breeds/list/all");
                if (!response.ok)
                    throw new Error(`ERROR HTTP: ${response.status}`);

                const datos = await response.json();
                const datosRazas = Object.keys(datos.message);
                setRazas(datosRazas);
                return datosRazas;
            } catch (err) {
                console.error("Hubo un problema al buscar las razas");
                setError(err);
            } finally {
                setCargando(false);
            }
        };
        obtenerRazas();
    }, []);

    useEffect(() => {
        setError(null);
        setCargando(true);
        const obtenerImagenes = async () => {
            try {
                if (!razaElegida) {
                    const ResponseNoRaza = await fetch(
                        API_URL + `/breeds/image/random/50`,
                    );
                    if (!ResponseNoRaza.ok)
                        throw new Error(`Error HTTP: ${ResponseNoRaza.status}`);
                    const datosNoRaza = await ResponseNoRaza.json();
                    const imagesNoRaza = Object.values(datosNoRaza.message);
                    setImagenes(imagesNoRaza);
                    return;
                }

                const response = await fetch(
                    API_URL + `/breed/${razaElegida}/images`,
                );
                if (!response.ok)
                    throw new Error(`Error HTTP: ${response.status}`);

                const datos = await response.json();
                const datosImages = Object.values(datos.message);
                setImagenes(datosImages);
            } catch (err) {
                console.error("Hubo un problema al buscar las fotos");
                setError(err);
            } finally {
                setCargando(false);
            }
        };
        obtenerImagenes();
    }, [razaElegida]);

    return (
        <div className="w-full min-h-screen bg-linear-to-b from-blue-950 to-blue-800">
            <div className="p-5 flex flex-col justify-center items-center">
                <h1 className="text-white text-4xl font-semibold text-center mb-5">
                    Buscador de Razas
                </h1>
                <Filtro
                    razas={razas}
                    razaElegida={razaElegida}
                    setRazaElegida={setRazaElegida}
                />
            </div>
            <div>
                <Galeria images={imagenes} razaActual={razaElegida} />
            </div>
        </div>
    );
};
