function HomePage() {
    return (
        <div className="flex flex-row gap-3 w-full my-3  h-96 p-2">
            <button className=" bg-green-700 hover:bg-green-800 px-3 shadow-xl rounded-3xl font-bold text-emerald-50 w-4xl">
                Enregistrer une nouvelle naissance
            </button>
            <button className="bg-sky-100 hover:bg-sky-200 px-3 rounded-3xl shadow-xl text-black font-bold w-4xl">
                Traiter les naissances
            </button>
        </div>
    );
}

export default HomePage;
