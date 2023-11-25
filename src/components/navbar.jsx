import albLogo from '../img/albt.webp'

export default function NavBar() {
    return (
        <>
            <div class="w-100 h-16 bg-[#029ed1] flex justify-center">
                <a href="/"><img src={albLogo} className="w-36" /></a>
                <ul className="mx-12 h-16 flex justify-between items-center space-x-6 text-lg text-white">
                    <li className="hover:bg-[#e0041d]"><a href="/equipo">Equipo</a></li>
                    <li className="hover:bg-[#e0041d]">Noticias</li>
                    <li className="hover:bg-[#e0041d]">Historia</li>
                    <li className="hover:bg-[#e0041d]">Galeria</li>
                    <li className="hover:bg-[#e0041d]">Partidos</li>
                    <li className="hover:bg-[#e0041d] "><a href="/aliados">Aliados</a></li>
                </ul>
                <div className="flex justify-between items-center">
                    <a href="#"><img className="h-8" src="/icons8-facebook-240.svg" alt="" /></a>
                    <a href="#"><img className="h-8" src="/icons8-instagram-240.svg" alt="" /></a>
                    <a href="#"><img className="h-8" src="/icons8-twitter-240.svg" alt="" /></a>
                </div>
            </div>
            <div className="w-100 h-4 mb-6 bg-[#e0041d]"></div>
        </>
    )
}