import { HeroList } from '../components';


export const MarvelPage = () => {
    return (
        <>
            <h1 style={{color: '#DEEFE7'}}>Marvel Comics</h1>
            <hr />

            <HeroList publisher={'Marvel Comics'} />
        </>

    )
}
