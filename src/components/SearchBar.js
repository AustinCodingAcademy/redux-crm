function SearchBar(){
   return ( 
    <div  className="page">
    <form className="form-inline my-2 my-lg-0">
        <input id="search-customer-input" 
        onChange={(e)=>{
          searchTerm = e.target.value
          searchTerm = searchTerm.toLowerCase()
          store.dispatch({type:"CHANGE_SEARCH_TERM", value:searchTerm})
        }}
        className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    </form>
    </div>
  )

}