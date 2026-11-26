export const Filtro = ({ razas = [], razaElegida, setRazaElegida }) => {
    return (
        <div>
            <select
                value={razaElegida}
                className="bg-white p-1.5 m-2 rounded-lg"
                onChange={(e) => setRazaElegida(e.target.value)}
            >
                <option value="">Todas</option>
                {razas.map((raza) => (
                    <option key={raza} value={raza}>
                        {raza}
                    </option>
                ))}
            </select>
        </div>
    );
};
