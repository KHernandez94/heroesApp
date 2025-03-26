import { HeroList } from '../components';


export const DcPage = () => {
    return (
        <>
            <h1 style={{color: '#DEEFE7'}}>DC Comics</h1>
            <hr />

            <HeroList publisher={'DC Comics'} />
        </>
    )
}
