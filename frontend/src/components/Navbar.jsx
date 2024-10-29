export default function Navbar(props) {
    return(
        <div className="w-screen h-max fixed bg-primary py-6 px-12 text-white text-xl flex justify-between items-center top-0">
            <p className="font-semibold">{props.title}</p>
            <p className="font-normal">Deni Fahrony</p>
        </div>
    );
}