import Header from '@/component/header/header'
import { SearchedResult } from '@/component/searchedText/SearchedResult';


export default function index() {
    return <div>
        <Header />
        <SearchedResult query="프기실" ResultCnt={3} />
    </div>;
  }
  