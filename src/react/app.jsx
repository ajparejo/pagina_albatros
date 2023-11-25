
export default function App() {

    const mensaje = "Back office"

    return(
        <>
            <div className="flex w-screen h-screen justify-center">
                <form className="flex flex-col bg-[#029ed1] w-80 h-60 margin-y-auto">
                    <h3 className="font-bold justify-self-center">Ingreso</h3>
                    <input className="rounded-lg" type="text"/>
                    <input type="password"/>
                    <input type="submit" value="Login"/>
                    <p>{mensaje}</p>
                </form>
            </div>
        </>
    );
}