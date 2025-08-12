type props = {
    onChange: (value: string) => void;
    showTable: boolean;
};
function RadioShow({ onChange, showTable }: props) {
    return (
        <div className="flex  w-fit  justify-self-end text-xl rounded-xl bg-zinc-500 text-white sticky top-3 right-3">
            <div
                className={`form-check  py-2 px-3 rounded-l-xl ${
                    showTable ? "bg-blue-600" : ""
                }`}
            >
                <input
                    className="form-check-input appearance-none"
                    type="radio"
                    name="mode-affichage"
                    id="tableau"
                    checked={showTable}
                    onChange={(event) => onChange(event.target.id)}
                />
                <label className="form-check-label" htmlFor="tableau">
                    Tableau
                </label>
            </div>
            <div
                className={`form-check  py-2 px-3 rounded-r-xl ${
                    !showTable ? "bg-blue-600" : ""
                }`}
            >
                <input
                    className="form-check-input appearance-none "
                    type="radio"
                    name="mode-affichage"
                    id="grid"
                    checked={!showTable}
                    onChange={(event) => onChange(event.target.id)}
                />
                <label className="form-check-label px-4 py-2 " htmlFor="grid">
                    Grille
                </label>
            </div>
        </div>
    );
}

export default RadioShow;
