import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

export default function SearchBar() {
    const placeholder = "Type to search something";
    return (
        <div className="searchbar pt-2 pb-2 ps-4 pe-4 m-auto">
            <SearchRoundedIcon />
            <input type="text" className="ms-2" placeholder={placeholder} onChange={() => { }} />
        </div>
    );
}
