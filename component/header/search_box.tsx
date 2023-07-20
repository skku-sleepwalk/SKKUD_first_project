import header_box from './header_box.module.css'

export default function Header_search_box() {
    return <div className={header_box.search}>
      <form>
        <input type="text" placeholder="Search" className={header_box.input}> 
        </input>
      </form>
    </div>;
  }
  