function HomePage() {
    return (
        <div className="flex flex-row gap-3 w-full bg-amber-400 h-96 p-2">
            <button className=" bg-blue-900 px-3 rounded-3xl text-emerald-50">
                Enregistrer une nouvelle naissance
            </button>
            <button className=" ">Traiter les naissances</button>
        </div>
    );
}

export default HomePage;
