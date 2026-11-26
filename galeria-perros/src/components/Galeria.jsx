import { Card } from "./Card";

export const Galeria = ({ images = [], razaActual }) => {
    return (
        <div>
            <div className=" flex justify-between p-6 pb-0 mx-auto max-w-7xl items-center">
                <h2 className="text-white font-semibold">
                    {images.length} imagenes totales.
                </h2>
                <h2 className="text-white font-semibold">
                    Raza: {!razaActual ? "Todas" : razaActual}
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4 sm:p-8 max-w-7xl mx-auto">
                {images.map((image) => (
                    <Card key={image} image={image} />
                ))}
            </div>
        </div>
    );
};
