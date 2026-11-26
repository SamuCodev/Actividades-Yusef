export const Card = ({ image }) => {
    return (
        <div className="bg-black border-2 border-blue-400 p-2 overflow-hidden rounded-xl">
            <img
                src={image}
                alt="foto-perro"
                className="w-full h-48 object-cover rounded-xl"
            />
        </div>
    );
};
