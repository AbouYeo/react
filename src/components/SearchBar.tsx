type props = {
    onSearch: (value: string) => void;
    onFilter: (value: number) => void;
    filterOrder: number;
};
function SearchBar({ onSearch, onFilter, filterOrder }: props) {
    return (
        <div className="flex flex-col sm:flex-row   justify-between items-center my-3 gap-3 ">
            <label className="flex-grow">
                <input
                    type="search"
                    name="search-user"
                    required
                    placeholder="Rechercher..."
                    className="w-full rounded  border-2 ps-2 py-0.5 max-sm:w-screen  "
                    onChange={(e) => onSearch(e.target.value)}
                />
            </label>
            <div className="">
                <select
                    title="tri-users"
                    value={filterOrder}
                    onChange={(e) => onFilter(parseInt(e.target.value))}
                    className="bg-zinc-300 rounded border-2 w-fit  px-3 py-1"
                >
                    <option disabled value={0}>
                        Trier par...
                    </option>
                    <option value={1}>Hommes</option>
                    <option value={2}>Femmes</option>
                    <option value={3}>Age croissant</option>
                    <option value={4}>Age décroissant</option>
                    <option value={5}>A-Z</option>
                    <option value={6}>Z-A</option>
                </select>
            </div>
        </div>
    );
}

export default SearchBar;
