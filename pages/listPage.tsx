import Header from '@/component/header/header'
import { SearchedResult } from '@/component/searchedText/SearchedResult';
import { DoubleBtn } from '@/component/DoubleBtn/DoubleBtn'


export default function index() {
    return <div>
        <Header />
        <SearchedResult query="프기실" ResultCnt={3} />
        <DoubleBtn value1='인원 많은 순' value2='최신 순' />;
    </div>;
  }
  