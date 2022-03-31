const SearchBar = () => {
  return (
    <>
      <div className="w3l_search">
        <form action="#" method="post">
          <input
            type="search"
            name="Search"
            placeholder="Search for a Product..."
            required
          />
          <button
            type="submit"
            className="btn btn-default search"
            aria-label="Left Align"
          >
            <i className="fa fa-search" aria-hidden="true">
              {" "}
            </i>
          </button>
          <div className="clearfix"></div>
        </form>
      </div>
    </>
  );
};
export default SearchBar;
